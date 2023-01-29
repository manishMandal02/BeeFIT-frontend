import { APIMethods } from './../utils/api';

const apiRoutes = {
  auth: {
    google: { method: APIMethods.post, route: '/auth/google' },
    onboardingComplete: {
      method: APIMethods.post,
      route: '/auth/onboarding-complete',
    },
    goals: {
      createGoals: {
        method: APIMethods.post,
        route: '/goals',
      },
      getAllGoals: {
        method: APIMethods.get,
        route: (userId: string) => `/goals/${userId}`,
      },
      updateGoals: {
        method: APIMethods.put,
        route: `/goals`,
      },
      deleteGoals: {
        method: APIMethods.delete,
        route: (userId: string) => `/goals/${userId}`,
      },
    },
  },
};

export default apiRoutes;
