import { FC, useEffect } from 'react';
import { gapi } from 'gapi-script';
import { useGoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import { Spinner } from '@chakra-ui/react';

import { useGoogleAuth } from '@/components/feature/auth/google-auth/useGoogleAuth';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const GoogleAuth = () => {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: 'email profile openid',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const { isLoading, mutate } = useGoogleAuth();

  const onSuccess = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    //@ts-ignore
    const { givenName, familyName, email, imageUrl } = res.profileObj;
    mutate({ firstName: givenName, lastName: familyName, email, profilePic: imageUrl });
  };
  const onFailure = (err: any) => {
    console.log('failed:', err);
  };

  const { signIn, loaded } = useGoogleLogin({ clientId, onSuccess, onFailure, fetchBasicProfile: true });

  const handleStartGoogleAuth = () => {
    signIn();
  };

  return (
    <>
      <button
        disabled={!loaded}
        onClick={handleStartGoogleAuth}
        className=' w-full mb-3.5 rounded-full bg-[#3F7EE8] py-2 text-white flex items-center justify-start duration-500'
      >
        {isLoading ? (
          <div className='flex items-center justify-center my-1.5 -ml-8 font-medium  w-full'>
            <Spinner className='mr-2 text-white' /> Verifying...
          </div>
        ) : (
          <>
            <FcGoogle
              className=' text-[#3F7EE8] font-medium bg-white scale-150 ml-2 rounded-full p-1.5 mr-4'
              size={30}
            />
            Continue with Google
          </>
        )}
      </button>
    </>
  );
};

export default GoogleAuth;
