import { Outlet } from 'react-router-dom';

import Nav from '../nav/Nav';

const AppLayout = () => {
  return (
    <div className='h-full w-screen relative flex flex-col bg-dark-1'>
      {/* main container */}
      <div className=' flex-1 '>
        <Outlet />
      </div>
      {/* bottom nav */}
      <div className='h-20  bg-dark-2  bottom-0 flex items-center justify-around relative pt-px'>
        <Nav />
      </div>
    </div>
  );
};

export default AppLayout;
