import { useContext } from "react";
import axios from "axios";
import  { useState } from "react";
import {NavLink} from "react-router-dom";
import { dataContext } from "../Context";
import { CircleLoader, ClockLoader} from 'react-spinners';
const Navbar = () => {
const [err,seterr]=useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [loading,setloading]=useState(null)
  const {state,dispatch}= useContext(dataContext);
  // Toggle the menu on mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handler=  (e)=>{
    e.preventDefault();
    setloading(true)
    axios.post("https://backend-portfolio-z3qh.onrender.com/",
    {
      "question" :e.target.name
    }
  ).then((res)=>{
     dispatch({type:e.target.name ,data: res.data})
     setloading(false)
  })  .catch((err) => {
    seterr(err.message);
    setloading(false)
    setTimeout(() => {
      seterr("");
    }, 3000);
  });
  }

   const displaymenu=()=>{
     const a=document.getElementById('menu');
      a.classList.remove("hidden")
   }
   const remove=()=>{
    const a=document.getElementById('menu');
     a.classList.add("hidden")
  }
  return (
     <div  className="  overflow-hidden bg-transparent" >
     {err&& <div  className="text-red-400 left-36 top-12 absolute">{err}</div>}
        <nav  className=" top-0 left-0 w-full    via-slate-80 to-blue-800 bg-opacity-10 p-4 shadow-lg z-50">
      <div  className="flex justify-between items-center max-w-screen-xl mx-auto">
        
        {/* Logo */}
        <div onMouseOver={displaymenu} onMouseLeave={remove} className="h-12 ">
        <div    className=" group flex text-white p-1  bg-gradient-to-t from-black   border-t-2 border-l-2 border-l-purple-400">
          ErmiasDev  
          <div  className="  flex ml-4  text-white text-opacity-70 h-4">
           {loading?<div><CircleLoader/></div>:<div></div>}
   <div id="menu" className="   hidden h-36 absolute z-50   top-14  sm:left-35 sm:top-14 w-36  justify-center items-center  rounded  bg-gray-900 shadow-lg shadow-purple-600">
  <a  href="https://drive.google.com/file/d/1PxRjrZYzmkhSQYnNrUpqer1HM_UWgdHT/view?usp=drive_link" target="blank"  className=" flex m-4 justify-center items-center bg-black border-2 border-gray-600 p-1 rounded-2xl bottom-4 hover:border-blue-700 transition ">download cv  </a>
       </div>

 </div>
 <div className="float-end"> {loading?<div><ClockLoader ize={5 } color="white"/></div>:<div> </div>}
 </div>

        </div>
        </div>
   
      

        {/* Links Section: Visible on larger screens and toggled on smaller screens */}
        <div
          className={`${
            isOpen ? " sm:relative  sm:top-0  absolute top-20" : "hidden"
          } md:flex sm:mr-16 rounded border-s-2 border-l-purple-500 border-r-2 border-r-purple-500 bg-black  text-white md:flex-row flex-col items-center space-x-0 md:space-x-6 space-y-4 md:space-y-0 transition-all duration-500 ease-in-out w-96`}>
          
          <NavLink to={"/"} onClick={(e)=>{
            handler(e)
          }}
          name="skills"
           className=" hover:bg-white hover:text-gray-800 px-3 py-2 rounded-md transition duration-300 ease-in-out">
            skills 
          </NavLink>
          
          <NavLink onClick={(e)=>{handler(e)}}
          
          
           name="about" className="hidden hover:bg-white hover:text-gray-800 px-3 py-2 rounded-md transition duration-300 ease-in-out">
            About
          </NavLink>
          <a onClick={(e)=>{handler(e)}}
         name="projects"  href=""
            className="hidden hover:bg-white hover:text-gray-800 px-3 py-2 rounded-md transition duration-300 ease-in-out">
            projects
          </a>
          <NavLink NavLink to="/contact"
            
            className="hidden hover:bg-white hover:text-gray-800 px-3 py-2 rounded-md transition duration-300 ease-in-out">
           contact 
          </NavLink>
        </div>



        {/* Hamburger Menu Icon: Only visible on small screens */}
        <div className="block md:hidden" onClick={toggleMenu}>
          <div
            className={`w-6 h-0.5  mb-1 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}></div>
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}></div>
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}></div>
        </div>
     
      </div>
    </nav>
  
      
     </div>
    
  );
};

export default Navbar;
