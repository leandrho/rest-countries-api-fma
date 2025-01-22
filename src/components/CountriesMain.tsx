import { CountriesSearch } from './CountriesSearch';
import { CountriesRegionSelector } from './CountriesInputSelector';
import { useEffect, useState } from 'react';
import { CountryInfoList } from '../types';
import { useCountries } from '../hooks/useCountries';
import { CountriesCardContainer } from './CountriesCardContainer';
import { Loading } from './Loading';

const regions = ['All', 'Africa', 'Americas', 'Antarctic', 'Asia', 'Europe', 'Oceania'];

export const CountriesMain = () => {
    const { countries, reloadCountries, loading } = useCountries()
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
        <main className='flex justify-center flex-grow bg-veryDarkGrayLight dark:bg-veryDarkBlueDark'>
            {   
                loading? <Loading />
                :<section className="xl:max-w-[1284px] flex-grow px-4 py-8 flex flex-col gap-16 ">
                    <div className='flex flex-col gap-8 xl:flex-row xl:justify-between'>
                        <CountriesSearch matchCountries={searchCountry}/>
                        <CountriesRegionSelector filterByRegion={filterByRegion} regions={regions}/>
                    </div>
                    {
                        countriesVisibles.length > 0 
                        ?   <CountriesCardContainer countries={countriesVisibles}/>
                        :   <section className="flex-grow flex items-center justify-center">
                                <button className='px-8 py-4 self-center bg-white dark:bg-darkBlueDark text-veryDarkBlueLight dark:text-white rounded-md text-2xl max-w-36 shadow-md hover:bg-gray-200 hover:dark:bg-gray-500'
                                    onClick={()=>reloadCountries()}
                                >
                                    Reload
                                </button>
                            </section>
                    }
                    
                </section>
            }
        </main>
        
    )
}
