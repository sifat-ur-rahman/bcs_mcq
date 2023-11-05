import { Link } from "react-router-dom";


function Header() {
    const menuItems = (
        <>
          <li>
          <Link
              to="/"
              className="mr-4 lg:text-xl font-semibold text-[#CCD6F6] hover:text-white"
            >Home</Link>
            <Link
              to="/addMCQ"
              className="mr-4 lg:text-xl font-semibold text-[#CCD6F6] hover:text-white"
            >
              Add 
            </Link>
            
            
          </li>
        </>
      );
      return (
        <div className="">
          
          <div className="navbar lg:flex   bgColor lg:px-14">
    
            <div className="navbar-start ">
              <div className="dropdown lg:hidden  ">
                <label tabIndex={0} className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu bgColor menu-compact dropdown-content mt-3 p-2 border rounded-box w-52"
                >
             {menuItems}
                </ul>
              </div>
            <ul className="hidden  lg:block">
            { menuItems}
            </ul>
            </div>
    
            <div className="navbar-end   ">
            <Link className="flex items-end" to='/'>
              <img src='https://i.ibb.co/4fVNPGR/Logo.png' className='w-32' alt="logo"/>
              
              </Link>
            </div>
         
          </div>
          <hr />
        </div>
      );
}

export default Header