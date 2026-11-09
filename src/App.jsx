import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import NotFound from "./pages/NotFound"


function App() {


  return (
    <div>
     <Navbar/>
     <Routes>
       <Route path="/" element={<h1>Home</h1>}/>
       <Route path="*" element={<NotFound/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
