import { BrowserRouter,NavLink ,Route ,Routes } from 'react-router-dom';
import './App.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Landing from './pages/Landing';
import ContactForm from './pages/contact/ContactForm';
import Answer from './components/answer/Answer';
function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      easing: 'ease-in-out', // Easing function
      once:true, // Whether the animation should happen only once
    });
    document.title = "my personal website";

  }, []);


  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Landing />} />
<Route path="/contact" element={<ContactForm />} />


</Routes>

 </BrowserRouter>
     )
}

export default App
