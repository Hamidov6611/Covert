import React, { createContext } from "react";
type User = {
  id?: number;
  adress?: string | null;
  context?: string | null;
  email?: string;
  first_name?: string;
  groups?: {
    id?: number;
    name?: string;
    username?: string
  }[]
};
export type userContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export type AuthUser = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export type UserContextProviderType = {
  children: React.ReactNode;
};

export const UserContext = createContext<userContextType | null>(null);

