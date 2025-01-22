import { useEffect, useState } from "react"
import { CountryInfoList, CountryInfo, Theme } from "../types"
import { fetchAllCountries } from "../services/flags-service";


export const useGlobalCountriesState = () => {

    const [ theme, setTheme ] = useState<Theme>( () => window.matchMedia( 'prefers-color-scheme: dark' ).matches ? Theme.DARK : Theme.LIGHT );
    const [ countries, setCountries ] = useState<CountryInfoList>([]);
    const [ errorMsg , setErrorMsg ] = useState<string>('');
    const [ showCountry, setShowCountry ] = useState<CountryInfo | null>(null);
    const [ loading , setLoading ] = useState(false);


    useEffect(() => {
        theme === Theme.DARK  
            ? document.querySelector('html')?.classList.remove('dark')
            : document.querySelector('html')?.classList.add('dark')
    }, [theme])
    
    useEffect(() => {
        init();
    }, [])

    const init = async()=>{
        try{
            setLoading(true);
            const data = await fetchAllCountries();
            setCountries(data); 
        }
        catch(error) {
            setErrorMsg("Couldn't initialize countries - Try again later..");
        }
        finally{
            setLoading(false);
        }
    }
    const toogleTheme = ():void =>{
        setTheme(prev => prev == Theme.DARK? Theme.LIGHT : Theme.DARK)
    }
    const getCountry = (cod:string):CountryInfo|null =>{
        const ret :CountryInfoList = countries.filter((c)=>c.cca3 == cod);
        return ret.length? ret[0] : null;
    }
    const reloadCountries = ()=>{
        init();
    }
    return {
            countries,
            errorMsg,
            toogleTheme,
            showCountry,
            setShowCountry,
            getCountry,
            reloadCountries,
            loading
    }
}
