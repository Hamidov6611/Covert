import { createContext } from "react";

export interface sideType {
    side: boolean,
}

export const SideContext = createContext<sideType | boolean>(false)