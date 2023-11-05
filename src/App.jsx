import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/Routes"


function App() {
  

  return (
    <div className="bgColor">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
