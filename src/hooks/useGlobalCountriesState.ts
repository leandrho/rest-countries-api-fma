import { useEffect, useState } from "react"
import { CountryInfoList, Theme } from "../types"
import { fetchAllCountries } from "../services/flags-service";


export const useGlobalCountriesState = () => {

    const [ theme, setTheme ] = useState<Theme>( () => window.matchMedia( 'prefers-color-scheme: dark' ).matches ? Theme.DARK : Theme.LIGHT );
    const [ countries, setCountries ] = useState<CountryInfoList>([]);
    const [ errorMsg , setErrorMsg ] = useState<string>('');
    

    useEffect(() => {
        theme === Theme.DARK  
            ? document.querySelector('html')?.classList.remove('dark')
            : document.querySelector('html')?.classList.add('dark')
    }, [theme])
    
    useEffect(() => {
        const init = async()=>{
            try{
                const data = await fetchAllCountries();
                setCountries(data); 
            }
            catch(error) {
                setErrorMsg("Couldn't initialize countries - Try again later..");
            }
        }
        init();
    }, [])

    const toogleTheme = ():void =>{
        setTheme(prev => prev == Theme.DARK? Theme.LIGHT : Theme.DARK)
    }

    return {
            countries,
            errorMsg,
            toogleTheme,
    }
}
