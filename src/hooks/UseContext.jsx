import { ThemeContext } from "../contexts/ThemeContext";
import {use} from "./react";
export function useContext(){

    const Context = use(ThemeContext)
    if(!Context)throw new Error("el contexto debe estar dentro del Provider");
    
    return Context;
    
}