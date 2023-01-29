import type { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

import type { IAppRoutes } from '@/routes/appRoutes';

type Props = {
  label: string;
  Icon: IconType;
  link: IAppRoutes[keyof IAppRoutes];
  isActive?: boolean;
};

const MenuItem = ({ label, Icon, link, isActive }: Props) => {
  return (
    <div>
      <Link
        to={link}
        className={`flex flex-col items-center justify-center text-sm rounded-lg  py-1.5  ${
          isActive ? 'bg-primary' : ''
        } 
        ${label === 'Me' || label === 'Ai' ? 'px-4' : 'px-3'}
        `}
      >
        <Icon className='text-dark-1' size={24} />
        <span className={`text-xs mt-px font-medium ${label === 'Me' && 'ml-px'}`}>{label}</span>
      </Link>
    </div>
  );
};

export default MenuItem;
