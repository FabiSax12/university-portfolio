import { githubConfig } from '@/data/github-config';
import type { APIRoute } from 'astro';

// GitHub API configuration from server-side environment
const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

// Helper function to get headers
function getGitHubHeaders() {
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Portfolio-Site/1.0'
  };

  if (GITHUB_TOKEN) {
    headers['Authorization'] = `token ${GITHUB_TOKEN}`;
  }

  return headers;
}

function getGraphQLHeaders() {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'User-Agent': 'Portfolio-Site/1.0'
  };

  if (GITHUB_TOKEN) {
    headers['Authorization'] = `bearer ${GITHUB_TOKEN}`;
  }

  return headers;
}

export const GET: APIRoute = async ({ params, request }) => {
  const url = new URL(request.url);
  const endpoint = url.searchParams.get('endpoint');
  const username = url.searchParams.get('username') || 'FabiSax12';

  if (!endpoint) {
    return new Response(JSON.stringify({ error: 'Missing endpoint parameter' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    let apiUrl: string;
    let options: RequestInit = {};

    switch (endpoint) {
      case 'user':
        apiUrl = `${GITHUB_API_BASE}/users/${username}`;
        options = { headers: getGitHubHeaders() };
        break;

      case 'repos':
        const perPage = githubConfig.ui.maxFeaturedRepos;
        const sort = url.searchParams.get('sort') || 'updated';
        apiUrl = `${GITHUB_API_BASE}/users/${username}/repos?per_page=${perPage}&sort=${sort}`;
        options = { headers: getGitHubHeaders() };
        break;

      case 'repo-languages':
        const repoName = url.searchParams.get('repo');
        if (!repoName) {
          return new Response(JSON.stringify({ error: 'Missing repo parameter' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          });
        }
        apiUrl = `${GITHUB_API_BASE}/repos/${username}/${repoName}/languages`;
        options = { headers: getGitHubHeaders() };
        break;

      case 'events':
        const eventsPerPage = url.searchParams.get('per_page') || '10';
        apiUrl = `${GITHUB_API_BASE}/users/${username}/events/public?per_page=${eventsPerPage}`;
        options = { headers: getGitHubHeaders() };
        break;

      default:
        return new Response(JSON.stringify({ error: 'Unknown endpoint' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
    }

    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    // Add metadata about authentication status
    const result = {
      data,
      meta: {
        authenticated: Boolean(GITHUB_TOKEN),
        rateLimit: response.headers.get('x-ratelimit-remaining'),
        resetTime: response.headers.get('x-ratelimit-reset')
      }
    };

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=900' // Cache for 15 minutes
      }
    });

  } catch (error) {
    console.error('GitHub API Error:', error);

    return new Response(JSON.stringify({
      error: 'Failed to fetch from GitHub API',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  if (!GITHUB_TOKEN) {
    return new Response(JSON.stringify({
      error: 'GitHub token not configured',
      message: 'GraphQL queries require authentication'
    }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await request.json();
    const { query, variables } = body;

    if (!query) {
      return new Response(JSON.stringify({ error: 'Missing GraphQL query' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: 'POST',
      headers: getGraphQLHeaders(),
      body: JSON.stringify({ query, variables })
    });

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }

    const result = {
      data: data.data,
      meta: {
        authenticated: true,
        rateLimit: response.headers.get('x-ratelimit-remaining'),
        resetTime: response.headers.get('x-ratelimit-reset')
      }
    };

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=900' // Cache for 15 minutes
      }
    });

  } catch (error) {
    console.error('GraphQL Error:', error);

    return new Response(JSON.stringify({
      error: 'Failed to execute GraphQL query',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
