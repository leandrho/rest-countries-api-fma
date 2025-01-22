
import { createContext, ReactNode } from "react"
import { CountryInfo, CountryInfoList } from "../types";
import { useGlobalCountriesState } from "../hooks/useGlobalCountriesState";

type CountriesContextType = {
    countries: CountryInfoList,
    errorMsg :string,
    toogleTheme :() => void,
    showCountry :CountryInfo | null,
    setShowCountry :( country :CountryInfo | null ) => void,
    getCountry : (cca3:string) => CountryInfo | null,
    reloadCountries :()=>void,
    loading :boolean
}
export const CountriesContext = createContext({} as CountriesContextType);

type CountriesProviderProps = {
    children: ReactNode
}
export const CountriesProvider = ({children} :CountriesProviderProps) => {
    const cstate = useGlobalCountriesState();
    return (
        <CountriesContext.Provider value={cstate}>
            {children}
        </CountriesContext.Provider>
    )
}
