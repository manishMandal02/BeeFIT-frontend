import { Navigate, Outlet } from 'react-router-dom';
import type { IUser } from 'src/types/auth';
import { appRoutes } from './appRoutes';

type Props = {
  user: IUser | null;
};

const ProtectedRoutes: React.FC<Props> = ({ user }) => {
  if (!user) {
    return <Navigate to={appRoutes.auth} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
