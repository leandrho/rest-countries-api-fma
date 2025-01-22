import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./pages/App"
import { Country } from "./pages/Country"
import { CountriesLayout } from "./layouts/CountriesLayout"

export const CountriesRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<CountriesLayout/>}>
            <Route path='/' element={<App/>} />
            <Route path='/country' element={<Country/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
