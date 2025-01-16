import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPython, FaGitAlt, FaVuejs, FaReact, FaGithubAlt } from 'react-icons/fa';
import { RiTailwindCssLine } from 'react-icons/ri';
import { SiPostman, SiFirebase } from 'react-icons/si';

// Map of string identifiers to React components
const skillsData = 
  
   [
      "html5",
      "css3",
      "js",
      "nodejs",
      "python",
      "git",
      "vue",
      "react",
      "github",
      "tailwind",
      "postman",
      "firebase"
    ]
  
  


const iconMap = {
  html5: <FaHtml5 />,
  css3: <FaCss3Alt />,
  js: <FaJsSquare />,
  nodejs: <FaNodeJs />,
  python: <FaPython />,
  git: <FaGitAlt />,
  vue: <FaVuejs />,
  react: <FaReact />,
  github: <FaGithubAlt />,
  tailwind: <RiTailwindCssLine />,
  postman: <SiPostman />,
  firebase: <SiFirebase />
};
const settings = {
  dots: true,
  infinite: true,
  autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000,     // Time between slides (in milliseconds)
    slidesToShow: 1,         // Number of slides to show at a time
    slidesToScroll: 1,       // Number of slides to scroll at a time
     speed: 1000,
     pauseOnHover: true,
 
};


const Skill = ({data}) => {
  return (
    <div className=" my-40  sm:my-0 bg-transparent mt-10 sm:mt-0 text-white min-h-screen  px-5 sm:px-10">
      {/* Container */}
      <div className="max-w-2xl mx-auto space-y-4 sm:grid sm:grid-cols-12 sm:gap-7">
        
        {/* Technical Skills Section */}
        <div className="skills-section  bg-black  sm:col-span-7 sm:w-96">
          <h2 className="text-3xl font-semibold text-center text-gradient mb-5">Technical Skills</h2>
          <ul  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="grid grid-cols-4  sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
            {skillsData.map((skill, index) => (
              <li
                key={index}
                className="skill-item text-center hover:text-green-300   p-5 sm:w-28 rounded-lg hover:bg-gradient-to-r from-indigo-500 to-purple-500 transform transition-all duration-300 ease-in-out"
              >
                <span className="block text-2xl hover: font-semibold">{iconMap[skill]} <div className='text-black hidden sm:block hover:white'>{skill}</div></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills Section */}
        <div data-aos="fade-left" className="soft-skills  sm:w-96 sm:ml-7 sm:col-span-5">
          <h2 className="text-3xl font-semibold  text-gradient mb-5">Soft Skills</h2>
          <p className="text-lg  text-gray-400 max-w-3xl mx-auto animate-fade-in">
            {data[1].soft}
          </p>
        </div>
      </div>

 
    
      

    </div>
  );
};

export default Skill;
