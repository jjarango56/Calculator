import { useEffect, useState } from "react"
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider =({children})=>{

    const [theme,setTheme] = useState(() => localStorage.getItem('theme') ?? 'theme1');
    
    const handleTheme = (newTheme) => {
            setTheme(newTheme);
    }

    
    useEffect(()=>{

        document.documentElement.classList.remove('theme1','theme2','theme3');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme',theme);

    },[theme] )

    return(
        <ThemeContext value={{theme, handleTheme}}>
            {children}
        </ThemeContext>
    )
}