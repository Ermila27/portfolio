import React from 'react';
import { FaGithub } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import '../answer/bg.css'
import { PiSunBold } from "react-icons/pi";

const About = ({data}) => { 
  

   
     return (
    <section id='about-container' className=" group  about-me  bg-black text-white sm:m-0  my-20 px-5 sm:px-10">
      
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0">
        {/* Profile Image */}
        <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
          <img src="img/mypic.jpg" alt="Ermias Profile" className="  w-full h-full object-cover" />
        </div>

        {/* About Details */}
        <div className="flex-1 sm:ml-10 sm:text-left space-y-4">
          
          <div className='flex w-full justify-around'>
               {/* Contact Links */}
               <h2  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-3xl font-semibold text-gradient">About Me</h2>

          <div className="mt-6 flex justify-center sm:justify-start space-x-6">
            <a
              href={`mailto:${data[0].email}}`}
              className="text-blue-400 hover:text-blue-600 text-2xl transition-colors duration-300"
            >
<MdAttachEmail /> <div className='text-xs '>send email</div>
</a>
            <a
              href={data[0].contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-400 hover:text-blue-700  text-2xl transition-colors duration-300"
            >
              <FaGithub /> <div className='text-xs m-1'>visit github</div>
            </a>

            <button
            
            onClick={()=>{
              const body=document.getElementById("about-container");
              body.classList.toggle("bg-white");

              const p=document.getElementById("bio");
              p.classList.toggle("text-gray-900")
              p.classList.toggle("hover:text-white")

                const edu=document.getElementById("education");
                   edu.classList.toggle("text-gray-900" )              
                   edu.classList.toggle("hover:text-white")
 const id=document.getElementById("id");
  id.classList.toggle("text-gray-900");
  const edulebel=document.getElementById("edulebel");
  edulebel.classList.toggle("text-gray-900");
               

            }}

              rel="noopener noreferrer"
              className=" text-blue-400 hover:text-gray-300  text-2xl transition-colors duration-300"
            >
              <PiSunBold /> <div className='text-xs m-1'>theme </div>
            </button>

          </div>
          </div>
          <label id='id'      
           
           data-aos="fade-down"
        data-aos-easing="linear"
     data-aos-duration="1000" className='   text-lg  border-l-2 border-l-purple-500 border-h-fit p-1 '  >Bio</label>
          <p  id="bio" className="text-lg  text-gray-400 hover:text-white  transition-all duration-700" >{data[0].bio}</p>
          <br />
          <label id='edulebel'
      className='text-lg border-l-2   border-l-purple-500  p-1 '  htmlFor="goal">Education</label>
          <p id='education' className="text-lg text-gray-400  hover:text-white transition-all duration-700">{data[0].education}</p>
          <br />
           

   

       
        </div>
      </div>
    </section>
  );
};

export default About;
