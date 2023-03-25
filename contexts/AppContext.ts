import { createContext } from "react";
import { ClubType } from "../constants/clubs";

export const AppContext = createContext<{
  club: undefined | ClubType,
  setClub: any
}>({ club: undefined, setClub: () => {}});
