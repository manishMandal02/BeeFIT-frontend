import GoogleAuth from '@/components/feature/auth/google-auth/GoogleAuthButton';

const bgImageURL =
  'https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80';

const Auth = () => {
  return (
    <div
      className='h-full w-screen flex items-center justify-center relative flex-col'
      style={{ backgroundImage: `url(${bgImageURL})` }}
    >
      <img src={bgImageURL} alt='running-man-image-background' className='absolute h-full  object-cover' />
      <div className='h-full w-screen bg-slate-300 opacity-60 absolute'></div>
      <p className='z-10 text-3xl font-bold tracking-wide text-slate-600 absolute top-32'>
        {/* WELCOME TO{' '} */}
        <span className='font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-teal-600 to-pink-600  '>
          BeeFIT
        </span>
      </p>
      <div className='z-10 absolute bottom-0 bg-dark bg-slate-100  bg-opacity-90 h-72 rounded-tr-3xl rounded-tl-3xl w-full  rounded-md  flex items-center justify-center flex-col'>
        <div className='w-full px-8 -mt-6'>
          <GoogleAuth />
        </div>
        <p className='text-sm font-normal text-slate-400 mt-2'>Connect your google account to continue.</p>
      </div>
    </div>
  );
};

export default Auth;
