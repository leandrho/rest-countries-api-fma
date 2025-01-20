import { useState } from "react";
import { CountriesRegionSelector } from './CountriesInputSelector';

export const CountriesSearch = () => {

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log('SEARCH...')
    }
   
    return (
        <form className=" max-w-[480px] flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex items-center gap-6 rounded-xl px-16 py-6 bg-white dark:bg-darkBlueDark shadow-md min-h-24">
                <figure className="text-veryDarkBlueLight dark:text-veryDarkGrayLight min-w-6">
                    <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </figure>
                <input  type="text" 
                        className="block outline-none flex-grow bg-white dark:bg-darkBlueDark dark:text-veryDarkGrayLight" 
                        placeholder="Search for a country"
                    />
            </div>
        </form>
    )
}
