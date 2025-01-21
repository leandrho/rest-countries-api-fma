import { CountriesHeader } from './components/CountriesHeader';
import { CountriesMain } from './components/CountriesMain';

function App() {

  return (
    <>
      <div className='flex flex-col h-screen w-full'>
        <CountriesHeader />
        <CountriesMain />
      </div>
    </>
  )
}

export default App
