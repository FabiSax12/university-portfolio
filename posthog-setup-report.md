# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Astro static portfolio. PostHog was already partially set up via the `posthog-js` npm package in `src/lib/analytics.ts`, but several components were either missing PostHog tracking entirely or had bugs (calling undefined Vercel Analytics `track` instead of PostHog's `trackEvent`). The wizard fixed all bugs, added `PUBLIC_POSTHOG_HOST` as an environment variable (previously hardcoded), and instrumented 10 events across 9 files. Event tracking now runs alongside existing Vercel Analytics without replacing it.

| Event | Description | File |
|---|---|---|
| `cv_download` | User clicks the download CV button in the hero section. | `src/components/hero/ActionButtons.astro` |
| `contact_open` | User opens the contact dialog from the hero action button. | `src/components/ui/Button.astro` |
| `social_link_click` | User clicks a social link in the hero or footer section. | `src/components/hero/SocialLinks.astro` / `src/components/sections/Footer.astro` |
| `language_switch` | User switches the site language between English and Spanish. | `src/features/i18n/ui/LanguageSwitcher.astro` |
| `theme_toggle` | User toggles between dark and light mode. | `src/components/Header.astro` |
| `project_link_click` | User clicks a project link (view details, GitHub, or live demo) on a project card. | `src/components/projects/ProjectCard.astro` |
| `contact_link_click` | User clicks a contact link (email, LinkedIn, GitHub) inside the contact dialog. | `src/components/contact-dialog/ContactInfo.astro` |
| `contact_copy` | User copies a contact value (email, LinkedIn, GitHub) from the contact dialog. | `src/components/contact-dialog/ContactInfo.astro` |
| `university_progress_click` | User clicks the university progress section link on the home page. | `src/pages/[lang]/index.astro` |
| `links_link_click` | User clicks any link on the /links page. | `src/pages/links.astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/486844/dashboard/1763677)
- [Key CTA Actions](https://us.posthog.com/project/486844/insights/K3HADKPm) — CV downloads, contact opens, and project clicks over time
- [Social Link Clicks by Platform](https://us.posthog.com/project/486844/insights/VsLFWnBC) — Which social platforms visitors click most
- [Contact Conversion Funnel](https://us.posthog.com/project/486844/insights/UlWjcFfL) — How many users who open the contact dialog actually click a link
- [Language Switches](https://us.posthog.com/project/486844/insights/os5EBGkJ) — Split of EN vs ES language switches
- [Project Engagement by Action](https://us.posthog.com/project/486844/insights/UWLuZK7j) — Whether visitors prefer view-details, GitHub, or live-demo links

## Verify before merging

- [ ] Run a full production build (`pnpm build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `PUBLIC_POSTHOG_KEY` and `PUBLIC_POSTHOG_HOST` to `.env.example` and any bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-astro-static/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
