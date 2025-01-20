
import { createContext, ReactNode } from "react"
import { CountryInfoList } from "../types";
import { useGlobalCountriesState } from "../hooks/useGlobalCountriesState";

type CountriesContextType = {
    countries: CountryInfoList,
    errorMsg :string,
    toogleTheme :() => void
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
