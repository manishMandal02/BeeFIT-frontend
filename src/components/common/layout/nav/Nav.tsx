import { appRoutes } from '@/routes/appRoutes';
import { useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GiStairsGoal } from 'react-icons/gi';
import { ImUser } from 'react-icons/im';
import { IoRocketSharp } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';

const menuItems = [
  { label: 'Home', link: appRoutes.home, Icon: AiFillHome },
  { label: 'Goals', link: appRoutes.goals, Icon: GiStairsGoal },
  { label: 'Ai', link: appRoutes.ai, Icon: IoRocketSharp },
  { label: 'Me', link: appRoutes.myAccount, Icon: ImUser },
];

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <>
      {menuItems.map((item) => (
        <MenuItem
          label={item.label}
          link={item.link}
          Icon={item.Icon}
          key={item.label}
          isActive={pathname === item.link}
        />
      ))}
    </>
  );
};

export default Nav;
