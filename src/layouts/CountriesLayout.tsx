import { Outlet } from "react-router-dom"
import { CountriesHeader } from "../components/CountriesHeader"

export const CountriesLayout = () => {
  return (
    <>
        <div className='flex flex-col h-screen w-full bg-veryDarkGrayLight dark:bg-veryDarkBlueDark '>
            <CountriesHeader />
            <Outlet />
        </div>
    </>
  )
}
