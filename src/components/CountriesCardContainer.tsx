import { CountryInfoList } from "../types";
import { CountryCard } from "./CountryCard";

type CountriesCardContainerProps = {
    countries :CountryInfoList
}
export const CountriesCardContainer = ({ countries }:CountriesCardContainerProps) => {
  
  return (
    <section className={`flex flex-col items-center gap-12 md:flex-row md:justify-center md:items-start flex-wrap ${countries.length<4? " xl:justify-start ":" xl:justify-between "}`}>
        {
            countries.map((country)=>(
                <CountryCard key={country.name.official} country={country}/>
            ))
        }
    </section>
  )
}
