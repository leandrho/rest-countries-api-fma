import { useRef } from "react";

type CountriesSearchProps = {
    matchCountries: (search :string)=>void,
}
export const CountriesSearch = ({matchCountries}:CountriesSearchProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleChange = ()=>{
        if(inputRef.current)
                matchCountries(inputRef.current.value);

    }
    return (
        <div className=" w-full sm:max-w-[620px] xl:max-w-[480px] h-16 md:h-24 xl:h-14 flex flex-col gap-4 ">
            <div className="flex items-center gap-6 rounded-xl px-8 sm:px-12 h-full bg-white dark:bg-darkBlueDark shadow-md overflow-hidden">
                <figure className="text-veryDarkBlueLight dark:text-veryDarkGrayLight min-w-6">
                    <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </figure>
                <input  type="text" 
                        className="block outline-none flex-grow bg-white dark:bg-darkBlueDark dark:text-veryDarkGrayLight" 
                        placeholder="Search for a country"
                        onChange={()=>handleChange()}
                        ref={inputRef}
                    />
            </div>
        </div>
    )
}
