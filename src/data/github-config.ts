export const githubConfig = {
  username: 'FabiSax12',
  displayName: 'Fabián Vargas',

  // API endpoints (now using internal Astro API routes)
  apiEndpoints: {
    internal: '/api/github', // Our internal API endpoint
    github: 'https://api.github.com', // Direct GitHub API (fallback)
  },

  // Featured repositories (optional - if not specified, will auto-select based on stars/activity)
  featuredRepos: [
    'university-portfolio',
    'chatGPT-clone',
    'taskify',
    'ecommerce-api',
    'weather-app',
    'portfolio-v1'
  ],

  // Social links related to coding
  links: {
    portfolio: 'https://fabian-vargas.dev',
    email: 'fabidev18@gmail.com',
    linkedin: 'https://www.linkedin.com/in/fabian-va',
  },

  // Cache settings
  cache: {
    duration: 15 * 60 * 1000, // 15 minutes
    maxRetries: 3,
  },

  // API settings
  api: {
    baseUrl: 'https://api.github.com',
    graphqlUrl: 'https://api.github.com/graphql',
    perPage: 100,
    timeout: 10000, // 10 seconds
    rateLimit: {
      authenticated: 5000, // requests per hour with token
      unauthenticated: 60   // requests per hour without token
    }
  },

  // UI customization
  ui: {
    maxFeaturedRepos: 6,
    maxRecentEvents: 8,
    maxLanguages: 5,
    showPrivateContributions: true,
    showPrivateRepos: true,
    includeOrganizations: true,
    contributionYears: 1, // Show last N years of contributions
  },

  // Private data settings (requires API token)
  private: {
    includePrivateRepos: true,
    includeOrganizationRepos: true,
    includeContributionsToPrivate: true,
    showDetailedStats: true,
  }
};

// Helper function to call our internal API
export const callInternalAPI = async (endpoint: string, params: Record<string, string> = {}) => {
  const url = new URL(githubConfig.apiEndpoints.internal, window.location.origin);

  // Add endpoint parameter
  url.searchParams.append('endpoint', endpoint);

  // Add other parameters
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

// Helper function to call GraphQL via internal API
export const callInternalGraphQL = async (query: string, variables: Record<string, any> = {}) => {
  const url = new URL(githubConfig.apiEndpoints.internal, window.location.origin);

  const response = await fetch(url.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

// Check if we have authentication (based on API response metadata)
export const hasApiToken = async (): Promise<boolean> => {
  try {
    const result = await callInternalAPI('user', { username: githubConfig.username });
    return result.meta?.authenticated || false;
  } catch (error) {
    console.warn('Could not check authentication status:', error);
    return false;
  }
};

// Helper function to format repository names
export const formatRepoName = (fullName: string): string => {
  return fullName.split('/').pop() || fullName;
};

// Helper function to calculate repository score for featured selection
export const calculateRepoScore = (repo: any): number => {
  const stars = repo.stargazers_count || repo.stargazerCount || 0;
  const forks = repo.forks_count || repo.forkCount || 0;
  const watchers = repo.watchers_count || repo.watchers?.totalCount || 0;
  const issues = repo.open_issues_count || repo.issues?.totalCount || 0;
  const hasDescription = repo.description ? 15 : 0;
  const hasHomepage = (repo.homepage || repo.homepageUrl) ? 8 : 0;
  const hasTopics = (repo.topics?.length || repo.repositoryTopics?.nodes?.length || 0) * 3;
  const hasLicense = (repo.license || repo.licenseInfo) ? 5 : 0;
  const hasReadme = (repo.has_wiki || repo.has_pages || repo.hasWikiEnabled) ? 3 : 0;
  const language = (repo.language || repo.primaryLanguage) ? 5 : 0;
  const sizeScore = Math.min((repo.size || repo.diskUsage || 0) / 1000, 10);

  // Private repos get bonus points when authenticated
  const privateBonus = (repo.private || repo.isPrivate) ? 10 : 0;

  // Calculate days since last update
  const lastUpdate = repo.updated_at || repo.updatedAt || repo.pushedAt;
  const daysSinceUpdate = lastUpdate
    ? (Date.now() - new Date(lastUpdate).getTime()) / (1000 * 60 * 60 * 24)
    : 365;
  const recencyScore = Math.max(0, 50 - daysSinceUpdate * 0.5);

  // Calculate days since creation for maturity score
  const creation = repo.created_at || repo.createdAt;
  const daysSinceCreation = creation
    ? (Date.now() - new Date(creation).getTime()) / (1000 * 60 * 60 * 24)
    : 0;
  const maturityScore = Math.min(daysSinceCreation * 0.1, 20);

  return (
    stars * 4 +
    forks * 3 +
    watchers * 1 +
    Math.max(0, 20 - issues) + // Fewer open issues = better score
    hasDescription +
    hasHomepage +
    hasTopics +
    hasLicense +
    hasReadme +
    language +
    sizeScore +
    privateBonus +
    recencyScore +
    maturityScore
  );
};

// Language colors mapping
export const languageColors: Record<string, string> = {
  'JavaScript': '#f1e05a',
  'TypeScript': '#2b7489',
  'HTML': '#e34c26',
  'CSS': '#1572B6',
  'SCSS': '#c6538c',
  'Python': '#3572A5',
  'Java': '#b07219',
  'C#': '#239120',
  'C++': '#f34b7d',
  'C': '#555555',
  'PHP': '#4F5D95',
  'Ruby': '#701516',
  'Go': '#00ADD8',
  'Rust': '#dea584',
  'Swift': '#ffac45',
  'Kotlin': '#F18E33',
  'Dart': '#00B4AB',
  'Vue': '#4FC08D',
  'React': '#61dafb',
  'Angular': '#dd0031',
  'Svelte': '#ff3e00',
  'Astro': '#ff5d01',
  'Next.js': '#000000',
  'Nuxt.js': '#00c58e',
  'Express': '#000000',
  'Node.js': '#339933',
  'Deno': '#000000',
  'Shell': '#89e051',
  'PowerShell': '#012456',
  'Dockerfile': '#384d54',
  'YAML': '#cb171e',
  'JSON': '#292929',
  'Markdown': '#083fa1',
  'SQL': '#e38c00',
  'GraphQL': '#e10098'
};

// Default fallback color for unknown languages
export const getLanguageColor = (language: string): string => {
  return languageColors[language] || '#858585';
};

// GraphQL queries for enhanced data
export const GITHUB_QUERIES = {
  // Get user profile with private contribution data
  USER_PROFILE: `
    query GetUserProfile($username: String!) {
      user(login: $username) {
        name
        login
        bio
        avatarUrl
        url
        email
        company
        location
        websiteUrl
        twitterUsername
        createdAt
        updatedAt
        followers {
          totalCount
        }
        following {
          totalCount
        }
        repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC) {
          totalCount
        }
        repositoriesContributedTo(first: 100, includeUserRepositories: false) {
          totalCount
        }
        pullRequests {
          totalCount
        }
        issues {
          totalCount
        }
        gists {
          totalCount
        }
        organizations(first: 10) {
          nodes {
            name
            login
            avatarUrl
            url
          }
        }
      }
    }
  `,

  // Get contribution calendar with private contributions
  CONTRIBUTIONS: `
    query GetContributions($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                weekday
              }
            }
          }
          commitContributionsByRepository(maxRepositories: 25) {
            repository {
              name
              owner {
                login
              }
              primaryLanguage {
                name
                color
              }
              isPrivate
            }
            contributions(first: 100) {
              totalCount
            }
          }
          pullRequestContributions(first: 25) {
            totalCount
            nodes {
              pullRequest {
                title
                url
                repository {
                  name
                  owner {
                    login
                  }
                  isPrivate
                }
                createdAt
                state
              }
            }
          }
          issueContributions(first: 25) {
            totalCount
          }
          pullRequestReviewContributions(first: 25) {
            totalCount
          }
        }
      }
    }
  `,

  // Get repositories with detailed information
  REPOSITORIES: `
    query GetRepositories($username: String!, $first: Int!, $after: String) {
      user(login: $username) {
        repositories(
          first: $first
          after: $after
          orderBy: { field: UPDATED_AT, direction: DESC }
          ownerAffiliations: [OWNER, COLLABORATOR]
        ) {
          totalCount
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            name
            nameWithOwner
            description
            url
            homepageUrl
            isPrivate
            isFork
            isArchived
            createdAt
            updatedAt
            pushedAt
            stargazerCount
            forkCount
            watchers {
              totalCount
            }
            issues(states: OPEN) {
              totalCount
            }
            pullRequests(states: OPEN) {
              totalCount
            }
            primaryLanguage {
              name
              color
            }
            languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
              totalSize
              edges {
                size
                node {
                  name
                  color
                }
              }
            }
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
            licenseInfo {
              name
              spdxId
            }
            hasWikiEnabled
            hasProjectsEnabled
            hasIssuesEnabled
            diskUsage
            defaultBranchRef {
              name
              target {
                ... on Commit {
                  history(first: 1) {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    }
  `
};
