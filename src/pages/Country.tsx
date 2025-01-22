import { useNavigate } from "react-router-dom";
import { useCountries } from "../hooks/useCountries"
import { CountryInfo } from "../types";


export const Country = () => {
    const navigate = useNavigate();
    const { showCountry, setShowCountry, getCountry } = useCountries();

    const handleBack = () => { 
        navigate('/');
      
    }

    const openCountry = (country :CountryInfo | null) => {
        if(country)
            setShowCountry(country);
    }
    return (
        <section className="flex-grow px-6 py-16 flex justify-center xl:mx-16 bg-veryDarkGrayLight dark:bg-veryDarkBlueDark ">
            <div className="flex flex-col gap-16 w-full max-w-[460px] xl:max-w-full">
                <button className="w-[160px] h-16 shadow-md rounded-md flex items-center justify-center gap-2 font-light bg-white dark:bg-darkBlueDark text-veryDarkBlueLight dark:text-veryDarkGrayLight"
                    onClick={()=>handleBack()}>
                    <svg className="max-w-5 text-veryDarkBlueLight dark:text-veryDarkGrayLight" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="currentColor" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
                    Back
                </button>
                <div className="flex flex-col gap-12 xl:flex-row xl:items-center xl:justify-between" >
                    <figure className="h-[330px] w-full xl:min-w-[560px] xl:w-[45%] xl:h-[400px]">
                        <img src={showCountry?.flags.png} alt={showCountry?.name.common + 'flag'} className="h-full w-full object-fill bg-white" />
                    </figure>
                    <div className="flex flex-col gap-8 xl:w-[45%]">
                        <h2 className="text-[26px] font-extrabold text-veryDarkBlueLight dark:text-white">{showCountry?.name.common}</h2>
                        <div className="flex flex-col gap-10 xl:flex-row xl:gap-[20%]">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-veryDarkBlueLight dark:text-white">Native Name: <span className="font-light">{showCountry?.name.common}</span></p>
                                <p className="text-base font-medium text-veryDarkBlueLight dark:text-white">Population: <span className="font-light">{showCountry?.population}</span></p>
                                <p className="text-base font-medium text-veryDarkBlueLight dark:text-white">Region: <span className="font-light">{showCountry?.region}</span></p>
                                <p className="text-base font-medium text-veryDarkBlueLight dark:text-white">Sub Region: <span className="font-light">{showCountry?.subregion}</span></p>
                                <p className="text-base font-medium text-veryDarkBlueLight dark:text-white">Capital: <span className="font-light">{showCountry?.capital}</span></p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-base font-medium text-veryDarkBlueLight dark:text-white">Top Level Domain: <span className="font-light">{showCountry?.tld}</span></p>
                                <p className="text-base font-medium text-veryDarkBlueLight dark:text-white">Currencies: <span className="font-light">{`US$`}</span></p>
                                <p className="text-base font-medium text-veryDarkBlueLight dark:text-white">Languages: <span className="font-light">{`LANGS`}</span></p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 xl:flex-row xl:items-baseline">
                            <h3 className="text-base font-medium text-veryDarkBlueLight dark:text-white min-w-fit">Border Countries:</h3>
                            <div className="flex flex-wrap gap-2">
                                {
                                    showCountry?.borders && 
                                    showCountry.borders.map((border)=>{
                                        const country :CountryInfo | null =  getCountry(border);
                                        return <button key={border} className="rounded-md shadow-md px-8 py-3 text-sm xl:py-2 xl:px-4 font-light bg-white dark:bg-darkBlueDark text-veryDarkBlueLight dark:text-veryDarkGrayLight "
                                                    onClick={()=>openCountry(country)}
                                                >
                                                    {country?.name.common??border}
                                                </button>
                                    })
                                    
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
