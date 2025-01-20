import { useCountries } from "../hooks/useCountries"

export const CountriesHeader = () => {
    const {toogleTheme} = useCountries();
  return (
    <header className="flex justify-between px-4 py-8 shadow-md bg-white dark:bg-darkBlueDark">
        <h1 className="text-base font-bold text-veryDarkBlueLight dark:text-white sm:text-xl">Where in the world?</h1>
        <button className="flex items-center gap-2 "
                onClick={()=>toogleTheme()}
        >
            <figure className="">
                <svg className={`text-veryDarkBlueLight dark:text-white w-6`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="1.344"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#000000"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#ffffff"></path> </g></svg>
            </figure>
            <p className="text-sm font-medium text-veryDarkBlueLight dark:text-white sm:text-base">Dark Mode</p>
        </button>
    </header>
  )
}
