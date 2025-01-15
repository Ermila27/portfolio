const express=require('express');
const dotenv=require('dotenv').config();
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());
const data = {
    skills: [  {technical:[ "html", "css", "js", "Node.js", "Python", , "sass vue, flutter,git ,github and more "  ]} ,{soft:"   I possess strong communication, teamwork, problem-solving, and time management skills. I am adaptable to new technologies and environments, capable of leading projects when needed, and approach tasks with critical thinking to make informed decisions. My ability to collaborate effectively in a team setting and my dedication to continuous learning help me stay motivated and contribute positively to any project"} ],
  
    projects: [
  {
    title: "Amazon E-commerce Website clone",
    description: "A full-stack e-commerce platform it perform autorization of user by using firebase and also payment method also integrated in it by stripe.",
    technologies:["vite", " node js", " firebase/firestore" ,"stripe", "firebase/auth"],

    link: null,
    github: null,
    img: ["img/amazon1.png" ,"img/amazon2.png" ,]
  } ,

   {
    title:"currency converter ",
    description:"it allow to convert any currncy to another great solution for online market ",
    link: null,
    technologies: ["java 100%"],
    github: null,
    img: ["/img/currency1.webp" ,"/img/currency2.avif" ,"/img/currency3.avif"]
   },

  {
    title:" Netflix clone",
    description:"it allow to convert any currncy to another great solution for online market ",
    link: "https://ermila27.github.io/netflix-clone/",
    github: "https://github.com/Ermila27/netflix-clone",
    technologies: ["React", "Node.js", "MongoDB", "Express"],

    img: [" /img/netflix1.png" , "/img/netflix2.png " ," /img/netflix3.png "],
  }
],

    about: [
      {  
        
        bio: "Hi, I'm Ermias, a passionate full-stack developer based in Addis Ababa. I specialize in building scalable web applications and love working on new technologies , Outside of my academic life, I have a deep love for fitness, particularly gym lifting. I believe in a strong connection between physical health and mental focus, and I approach coding with the same discipline and determination that I apply to my workouts.",
        education: "As I look toward graduation next year, I’m excited to take the next steps in my journey to build a career in software development, where I aim to innovate, collaborate, and grow as a problem-solver in the tech world.",
        goals: "To work on cutting-edge technology, contribute to open-source projects, and continually improve my development skills.",
        contact: {
          email: "ermiasgetnet677@gmail.com",
          github: "https://github.com/ermila27"
        },
        profileImg: "/img/mypic.jpg",
        profile:""
      }
    ]
  };
// home server
app.get('/',(req,res)=>{
    res.status(201).json({message:'hello'})
})

// ask servr
app.post('/ask', async (req, res) => {
  // Normalize input: convert to lowercase and remove extra spaces and punctuation
  let userQuestion = req.body.question.trim().toLowerCase();

  // Optionally, remove common punctuation
  userQuestion = userQuestion.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

  // Now, use regex to check for intent keywords in the user question
  if(/skil/.test(userQuestion)) {
    return res.json({
      answer: data.skills,
      name: "skills"
    });
  } else if (/projec/.test(userQuestion)) {
    return res.json({
      answer: data.projects,
      name: "projects"
    });
  } else if (/about/.test(userQuestion)) {
    return res.json({
      answer: data.about,
      name: "about"
    });
  } else {
    return res.json({
      answer: "Sorry, I am here to provide answer for question releted ermidev portfolio couldn't understand your question. Could you clarify in the context of my skills about ,and projects  ?",
      name: "err"
    });
  }
});





app.listen(1000,(req,res)=>{
  console.log("listining")
})
   



 
