import posthog from "posthog-js";

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  const key = import.meta.env.PUBLIC_POSTHOG_KEY;
  if (!key) return;
  const host = import.meta.env.PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";
  posthog.init(key, {
    api_host: host,
    person_profiles: "identified_only",
    capture_pageview: true,
    capture_pageleave: true,
  });
  initialized = true;
}

export function trackEvent(name: string, data?: Record<string, string>) {
  if (typeof window === "undefined") return;
  posthog.capture(name, data);
}
