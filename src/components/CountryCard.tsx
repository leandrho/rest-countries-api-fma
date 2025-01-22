import { useNavigate } from 'react-router-dom';
import { CountryInfo } from '../types/index';
import { useCountries } from '../hooks/useCountries';
type CountryCardProps = {
    country :CountryInfo,
}

export const CountryCard = ( { country } :CountryCardProps ) => {

    const navigate = useNavigate();
    const {setShowCountry} = useCountries();
    const handleClick = () => {
        setShowCountry(country);
        navigate('/country');
    }
  return (
    <div className='h-[490px] w-[340px] md:w-[528px] md:h-[670px] xl:w-[264px] xl:h-[336px] rounded-xl bg-white dark:bg-darkBlueDark flex flex-col shadow-md cursor-pointer hover:opacity-60'
        onClick={()=>handleClick()}
    >
        <figure className='h-[220px] md:h-[320px] xl:h-[160px] w-full '>
            <img className='h-full w-full block object-cover rounded-t-xl' src={country.flags.png} alt={country.name.official+' flag'} />
        </figure>
        <div className='px-8 pt-10 xl:pt-4 xl:space-y-4 space-y-8'>
            <h2 className='text-xl md:text-3xl xl:text-base font-extrabold text-veryDarkBlueLight dark:text-white'>{country.name.common}</h2>
            <div className='space-y-2'>
                <p className='text-lg md:text-2xl xl:text-sm font-semibold text-veryDarkBlueLight dark:text-white'>Population: <span className='font-normal'>{country.population}</span></p>
                <p className='text-lg md:text-2xl xl:text-sm font-semibold text-veryDarkBlueLight dark:text-white'>Region: <span className='font-normal'>{country.region}</span></p>
                { 
                    country.capital&&<p className='text-lg xl:text-sm md:text-2xl font-semibold text-veryDarkBlueLight dark:text-white'>Capital: <span className='font-normal'>{country.capital}</span></p>
                }
            </div>
        </div>
    </div>
  )
}
