import { useRef } from 'react';

type CountriesRegionSelectorProps = {
    regions : string[],
    filterByRegion : (region:string)=>void
}

export const CountriesRegionSelector = ({filterByRegion, regions}:CountriesRegionSelectorProps) => {

        
        const menuRef = useRef<HTMLDivElement>(null);
        const butNameRef = useRef<HTMLParagraphElement>(null)
        const handleMenuClose = () => {
            if(menuRef.current){
                if(menuRef.current.classList.contains('hidden')){
                    menuRef.current.classList.remove('hidden');
                    menuRef.current.classList.add('flex');
                }
                else {
                    menuRef.current.classList.remove('flex');
                    menuRef.current.classList.add('hidden');
                }
            }
        }
        const handleChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, selected :string) => {
            e.preventDefault();
            handleMenuClose();
            if(butNameRef.current){
                butNameRef.current.innerText=selected;
            }
            filterByRegion(selected);
        }
  return (
            <div className="w-[250px] flex flex-col gap-2 relative">
                <button className="px-12 flex items-center justify-between rounded-xl shadow-md h-16 md:h-24 xl:h-14 bg-white dark:bg-darkBlueDark cursor-pointer font-medium"
                    onClick={()=> handleMenuClose()}
                >
                    <p ref={butNameRef} className="text-veryDarkBlueLight dark:text-veryDarkGrayLight">Filter by Region</p>
                    <svg className="max-w-5 text-veryDarkBlueLight dark:text-veryDarkGrayLight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m12 14.586 6.293-6.293a1 1 0 1 1 1.414 1.414l-6.646 6.647a1.5 1.5 0 0 1-2.122 0L4.293 9.707a1 1 0 0 1 1.414-1.414L12 14.586z" fill="currentColor"></path></g></svg>
                </button>
                <div ref={menuRef} className="hidden flex-col bg-white dark:bg-darkBlueDark shadow-md rounded-xl px-6 py-8 absolute w-full h-fit top-full mt-2">
                    {
                    regions.map((region)=>(
                        <a key={region} href='#' 
                            className="py-2 px-6 text-veryDarkBlueLight dark:text-veryDarkGrayLight font-medium cursor-pointer rounded-md hover:bg-veryDarkGrayLight hover:dark:bg-veryDarkBlueDark"
                            onClick={(e)=>handleChange(e,region)}
                        >
                            {region}
                        </a>
                    ))
                    
                    }
                </div>
            </div>
  )
}
