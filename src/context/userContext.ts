import React, { createContext } from "react";
export type User = {
  id?: number;
  adress?: string | null;
  context?: string | null;
  email?: string;
  first_name?: string;
  last_name?: string;
  groups?: {
    id?: number;
    name?: string;
    username?: string
  }[]
};
export interface userContextType  extends User {
  // user: User;
  // setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export type AuthUser = {
  user: User
  setUser: (value: User) => void;
};

export type UserContextProviderType = {
  children: React.ReactNode;
};

export const UserContext = createContext<User | null>(null);


