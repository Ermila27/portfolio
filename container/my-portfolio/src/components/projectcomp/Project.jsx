import { useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import Slider from 'react-slick'; // Import the Slider component
const settings = {
  dots: true,
  infinite: true,
  autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000,     // Time between slides (in milliseconds)
    slidesToShow: 1,         // Number of slides to show at a time
    slidesToScroll: 1,       // Number of slides to scroll at a time
     speed: 1000,
     pauseOnHover: 1
 
};

const ProjectCard = ({ project ,ran}) => (
  <div className="project-card bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <div className="relative">
<Slider {...settings}>
  <div>      <img src={project.img[0]} alt={project.title} className="w-full h-48 object-cover" />
  </div>
  <div>      <img src={project.img[1]} alt={project.title} className="w-full h-48 object-cover" />
  </div>
  <div>      <img src={project.img[2]} alt={project.title} className="w-full h-48 object-cover" />
  </div>
</Slider>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="p-5 space-y-3">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-400">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-gray-600 text-sm text-white py-1 px-3 rounded-full">{tech}</span>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">View Project</a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-600">GitHub</a>
      </div>
    </div>
  </div>
);

const Project = ({data}) => {
//   const [num,setnum]=useState()
// const fun=()=>{ 
//   setTimeout(() => {
//     setnum(Math.floor(Math.random()*3));
//   },4000);
// };
//   fun();

  return (
    <section  className="projects bg-black text-white py-20 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gradient" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, index) => (
            <ProjectCard key={index} project={project}  />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
