import { ThemeContext } from "../contexts/ThemeContext"
import { use } from "react"
export const Header = () => {
    const {  handleTheme } = use(ThemeContext);

    return (
        <header className="flex justify-between w-[400px] mb-5 text-text-dark items-center">
            <h1 className="font-bold text-text-light-number text-xl">Calc</h1>
            <div className="text-text-light-number">
                  
                <div className="flex flex-col">
                    <div className="flex font-bold">
                    <p className="p-2 text-xs">1</p>
                    <p className="p-2 text-xs">2</p>
                    <p className="p-2 text-xs">3</p>
                    </div>
                    
                  
                    <div className="flex bg-keypad-bg rounded-xl gap-3"> 
                    
                    <button onClick={() => handleTheme('theme1') } className="p-2 hover:bg-bg-pointer rounded-full"></button>
                    <button onClick={()  => handleTheme('theme2') } className="p-2 hover:bg-bg-pointer rounded-full"></button>
                    <button onClick={() => handleTheme('theme3')} className="p-2 hover:bg-bg-pointer rounded-full"></button>
                    </div>
                   
                </div>


            </div>

        </header>
    )
}