export type TemplateId =
  | "ui-component"
  | "landing-section"
  | "mobile-screen"
  | "dashboard-widget";

export type Template = {
  id: TemplateId;
  title: string;
  subtitle: string;
  defaultPrompt: string;
};

export const TEMPLATES: Template[] = [
  {
    id: "ui-component",
    title: "UI Component",
    subtitle: "Buttons, cards, nav bars, modals, forms",
    defaultPrompt: "Create a modern pricing card component for a SaaS app. Include title, price, features list, primary CTA button.",
  },
  {
    id: "landing-section",
    title: "Landing Page Section",
    subtitle: "Hero, feature grid, testimonials, FAQs",
    defaultPrompt: "Create a hero section for an AI design tool. Headline, subheadline, primary + secondary CTA, and 3 trust bullets.",
  },
  {
    id: "mobile-screen",
    title: "Mobile Screen",
    subtitle: "Login, onboarding, feed, checkout",
    defaultPrompt: "Create an iOS-style onboarding screen for a habit tracker. Include title, illustration placeholder, and CTA.",
  },
  {
    id: "dashboard-widget",
    title: "Dashboard Widget",
    subtitle: "Tables, charts, stats cards, filters",
    defaultPrompt: "Create a dashboard widget showing weekly active users with a small chart placeholder and 2 KPI stats.",
  },
];
