import  { useContext, useEffect, useState} from 'react'
import './bg.css';
import { PacmanLoader } from 'react-spinners';
import { FaTelegramPlane } from "react-icons/fa";
import About from '../aboutcomp/About';
import Project from '../projectcomp/Project';
import Skill from '../skillcomp/Skill';
import axios from 'axios';
import { dataContext } from '../Context';


export default function Answer() {

   const [ques,setques]=useState("");
   const {state,dispatch}= useContext(dataContext);
   const[ask,setask]=useState(null);
   const [err,seterr]=useState(null)
  const {name,data}=state;
  const [loading,setloading]=useState(false);
 
 const isques= ques;

 
   const handler=  (e)=>{
    setloading(true) 
  
   const input= document.getElementById("input");
    input.value=""
    e.preventDefault();
    
  axios.post("https://backend-portfolio-z3qh.onrender.com/ask",
    {
      "question" :ques
    }
  ).then((res)=>{
    setloading(false)
     dispatch({type:ques ,data: res.data})
     setques("")
  })  .catch((err) => {
    setloading(false)
    setques('')
    seterr(err.message);
    setTimeout(() => {
      seterr("")
    }, 3000);
  });
  }
  return (
    <div className=' mt-6 '>

        <div className="relative  z-10  overflow-auto">
        <div className="flex   justify-center   items-center ">
          <div className='w-11/12'>

          { !data?  <div className=''> <h1></h1> </div>: <div id='container'>
            {name==="skills"? <div id='skill'>< Skill data={data}/> </div>:name=='projects'?<div id='project'>< Project data={data}/></div>:name=="about"?<div id='about'>< About data={data}/></div>: <div className='bg-red-900 text-white bg-opacity-25 p-2 m-2 sm:w-1/2'>{data}</div>}
            
            </div>}
            {err &&<div className='text-red-400 bg-black    w-1/4 p-1  shadow-lg  border-red-400 text-center border-2'>{err}</div>}
 <form action="" onSubmit={(e)=>{handler(e)}}>
 <div  className='flex  justify-center items-center w-11/12  fixed bottom-4 '>
          <div  id='' className=' flex items-center justify-center gap-2'>
            <input  
              id='input'
              type="text"
              placeholder="What do you want to know?"
              onChange={(e)=>{
               setques(e.target.value);
              }}
            
              className="p-3 rounded-md border-purple-500 border-3 border-s text-gray-100  focus:border-blue-400   bg-[#2F2F2F] focus:outline-none focus:ring-2 w-56 sm:w-96 "
            /> 
 <div>   
               <span id='ans' className={`text-white  p-2  h-6 w-6 ${isques?"bg-black border-2 hover:text-blue-400 hover:bg-opacity-15  rounded":"bg-slate-600 border-collapse text-opacity-45 rounded-lg shadow-2xl cursor-not-allowed  bg-opacity-80"} `} ><button id='' disabled={!isques} type='submit' >{loading?<PacmanLoader size={10} color='orange'/>:<FaTelegramPlane/>}
               </button></span>
            </div>
            </div>
           

          </div>
  </form>

          
           
          </div>
        </div>
        
      </div>
     
        </div>
   
  )
}
