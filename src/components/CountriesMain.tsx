import { CountriesSearch } from './CountriesSearch';
import { CountriesRegionSelector } from './CountriesInputSelector';
import { useEffect, useState } from 'react';
import { CountryInfoList } from '../types';
import { useCountries } from '../hooks/useCountries';
import { CountriesCardContainer } from './CountriesCardContainer';

const regions = ['All', 'Africa', 'Americas', 'Antarctic', 'Asia', 'Europe', 'Oceania'];

export const CountriesMain = () => {
    const { countries } = useCountries()
    const [countriesVisibles, setCountriesVisibles] = useState<CountryInfoList>(countries)
    const filterByRegion = (region :string):void =>{
        const r=region.toLowerCase();
        if(r=='all'){
            setCountriesVisibles(countries);
            return;
        }
        const newVisibles = countries.filter((country)=> country.region.toLowerCase() == r);
        setCountriesVisibles(newVisibles);
        console.log('Filtering...')
    }
    const searchCountry = (c :string) :void => {
        if(c.length == 0){
            setCountriesVisibles(countries);
            return;
        }
        const newVisibles = countries.filter((country)=> country.name.common.toLowerCase().startsWith(c));
        setCountriesVisibles(newVisibles);
    }
    useEffect(() => {
        setCountriesVisibles(countries)
    }, [countries])
    
    return (
        <main className='bg-veryDarkGrayLight dark:bg-veryDarkBlueDark flex justify-center flex-grow'>
            <section className="xl:max-w-[1284px] flex-grow px-4 py-8 flex flex-col gap-16 ">
                <div className='flex flex-col gap-8 xl:flex-row xl:justify-between'>
                    <CountriesSearch matchCountries={searchCountry}/>
                    <CountriesRegionSelector filterByRegion={filterByRegion} regions={regions}/>
                </div>
                <CountriesCardContainer countries={countriesVisibles}/>
            </section>
        </main>
        
    )
}
