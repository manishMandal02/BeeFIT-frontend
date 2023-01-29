const appRoutes = {
  auth: '/auth',
  onBoarding: '/auth/onboarding',
  logout: '/logout',
  home: '/',
  ai: '/ai',
  goals: '/goals',
  myAccount: '/me',
} as const;

type IAppRoutes = typeof appRoutes;

export { appRoutes };
export type { IAppRoutes };
