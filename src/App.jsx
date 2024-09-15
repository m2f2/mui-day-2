import { CssBaseline, Divider } from '@mui/material'
import './App.css'
import Header from './Layout/Header'
import Products from './Layout/Products'
import PromoSection from './Layout/PromoSections'


const App=()=> {

  return (
    <>
    <CssBaseline/>
    <Header/>
    <Products/>
    <Divider sx={{ margin: '20px 0', borderColor: '#000', borderWidth: '5px' }}/>
    <PromoSection/>
    </>
  )
}

export default App
