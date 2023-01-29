import { AppLayout } from '@/components/common/layout/app-layout';
import AI from '@/pages/ai/AI';
import { Auth } from '@/pages/auth';
import { Goals } from '@/pages/goals';
import { Home } from '@/pages/home';
import { Logout } from '@/pages/logout';
import { MyAccount } from '@/pages/my-account';
import OnBoarding from '@/pages/onboarding/OnBoarding';
import { useContext } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { appRoutes } from './appRoutes';
import ProtectedRoutes from './ProtectedRoutes';

const AppRouter = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {useRoutes([
        //logged in users
        {
          path: '/',
          element: <ProtectedRoutes user={user} />,
          children: [
            {
              // Dashboard
              path: '/',
              element: <AppLayout />,
              children: [
                {
                  path: appRoutes.home,
                  element: <Home />,
                },
                {
                  path: appRoutes.goals,
                  element: <Goals />,
                },
                {
                  path: appRoutes.ai,
                  element: <AI />,
                },
                {
                  path: appRoutes.myAccount,
                  element: <MyAccount />,
                },
                {
                  path: '*',
                  element: <Navigate to={appRoutes.home} />,
                },
              ],
            },
            {
              path: appRoutes.logout,
              element: <Logout />,
            },
          ],
        },
        //auth
        {
          path: '/auth',
          element: <Outlet />,
          children: [
            {
              path: appRoutes.auth,
              element: <Auth />,
            },
            {
              path: appRoutes.onBoarding,
              element: <OnBoarding />,
            },
            {
              path: '*',
              element: <Navigate to={appRoutes.auth} />,
            },
          ],
        },
      ])}
    </>
  );
};

export default AppRouter;
