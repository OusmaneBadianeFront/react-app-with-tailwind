
function Navbar() {
  return (
    <nav className="  nav  mx-auto shadow-xl w-full mb-0 pb-0    overflow-hidden z-40 p-7  " >
    <div className="flex flex-row mx-auto justify-between space-x-10 pt-6  " >
        <div className="flex flex-row  ">
            <h3 className="text-2xl font-bold  mb-5" >
        
            </h3>
        </div>
        <div className="hidden lg:flex lg:flex-row space-x-10 pr-16 mb-5">
            <a href="" className="text-blue-400 font-bold  hover:text-blue-600 ">Acceuil</a>
            <a href="" className="text-gray-500  hover:text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600">A propos</a>
            <a href=""  className="text-gray-500 hover:text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600">Services</a>
            <a href=""  className="text-gray-500 hover:text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600">Contact</a>
        </div>
        <button id="menu-btn" className="hamburger  lg:hidden block   " type="button">
            <span className="hamburger-top"> </span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
        </button>
    </div>

    <div id="mobile-nav" className="bg-white  flex flex-col space-y-7 text-center lg:hidden ">
        <a href="" className=" text-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 ">Acceuil</a>
        <a href="" className="text-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 "  >A propos</a>
        <a href=""  className="text-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 ">Services</a>
        <a href=""  className="text-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 ">Contact</a>

    </div>
</nav>
  );
}

export default Navbar;
