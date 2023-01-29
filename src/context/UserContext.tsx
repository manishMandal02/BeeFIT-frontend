import React, { createContext } from 'react';
import { useLocalStorage } from '../hooks/common/useLocalStorage';

import { IUser } from '../types/auth';

export type UpdateUserType = (value: IUser | null) => void;

const updateUserFn: UpdateUserType = (user) => {};

type ContextType = {
  user: IUser | null;
  updateUser: UpdateUserType;
};

export const UserContext = createContext<ContextType>({
  user: null,
  updateUser: updateUserFn,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, updateUser] = useLocalStorage<IUser, null>('user', null);

  return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>;
};
