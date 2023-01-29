import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { useContext } from 'react';
import { api } from '@/utils/api';
import type { IUser } from '@/types/auth';
import { UserContext } from '@/context/UserContext';
import apiRoutes from '@/routes/apiRoutes';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '@/routes/appRoutes';

type AuthWithGoogleApiPayload = {
  email: string;
  firstName: string;
  lastName: string;
  profilePic: string;
};

type WithGoogleApiResponse = { success: boolean; user: IUser; isNewUser: boolean };

const useGetGoals = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);
  const googleAuthAPI = async (data: AuthWithGoogleApiPayload) => {
    return await api<WithGoogleApiResponse, AuthWithGoogleApiPayload>({
      method: apiRoutes.auth.google.method,
      url: apiRoutes.auth.google.route,
      body: data,
    });
  };
  const { mutate, isLoading, isSuccess, error, status } = useMutation(
    async (data: AuthWithGoogleApiPayload) => await googleAuthAPI(data),
    {
      onSuccess: (data) => {
        toast({
          title: 'Authenticated with Google',
          status: 'success',
          duration: 3000,
          variant: 'left-accent',
          position: 'bottom',
        });
        updateUser({ ...data.user });
        if (data.isNewUser) {
          navigate(appRoutes.home);
        } else {
          navigate(appRoutes.home);
        }
      },
      onError: () => {
        toast({
          title: 'Failed to authenticate with google.',
          status: 'error',
          duration: 2000,
          variant: 'left-accent',
          position: 'bottom',
        });
      },
    }
  );

  return {
    mutate,
    isLoading,
    isSuccess,
    error,
    status,
  };
};

export { useGetGoals };
