import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"


function Main() {
  return (
    <div>
           <div className=''>
           <Header />
           </div>
         <div className=''>
         <Outlet/>
         </div>
         
        </div>
  )
}

export default Main