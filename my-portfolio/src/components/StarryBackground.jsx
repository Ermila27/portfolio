
import  { useEffect, useRef, useState } from 'react';
import Navbar from './navbar/Navbar'; // Import your Navbar component here
import  './answer/bg.css'// Include the necessary CSS styles
import Answer from './answer/Answer.jsx';
const StarryBackground = () => {
  const starContainerRef = useRef(null);
  const starsRef = useRef([]);
  const [isHovered, setIsHovered] = useState(false);

  // Generate stars with random properties
  const generateStars = (count = 200) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const star = {
        id: i,
        size: Math.random() * 2 + 1, // Random size of stars
        color: `hsl(${Math.random() * 360}, 100%, 75%)`, // Random color in HSL
      };
      stars.push(star);
    }
    return stars;
  };

  const handleBackgroundHover = () => {
    setIsHovered(true);
  };

  const handleBackgroundLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const stars = generateStars(200); // Increase the number of stars for better coverage
    const starContainer = starContainerRef.current;

    // Set the background size to handle scrolling
    const updateStarPositions = () => {
      stars.forEach((star) => {
        const starElement = document.createElement('div');
        starElement.classList.add('absolute');
        starElement.style.width = `${star.size}px`;
        starElement.style.height = `${star.size}px`;
        starElement.style.backgroundColor = star.color;
        starElement.style.borderRadius = '50%'; // Round stars
        starElement.style.position = 'absolute';
        starElement.style.transition = "background-color 0.3s ease, box-shadow 0.3s ease"; // Smooth transition for color and shadow change

        // Store the original color in dataset to reset later
        starElement.dataset.originalColor = star.color;

        // Random initial positions, including scrollable areas
        const xPos = Math.random() * window.innerWidth * 2; // Increase width for better coverage
        const yPos = Math.random() * document.documentElement.scrollHeight; // Match the scrollable height

        starElement.style.left = `${xPos}px`;
        starElement.style.top = `${yPos}px`;

        // Append the star to the container
        starContainer.appendChild(starElement);

        // Add to starsRef for future manipulation
        starsRef.current.push(starElement);
      });
    };

    // Generate stars initially
    updateStarPositions();

    // Event listeners for hover effects
    const starContainerElement = starContainerRef.current;
    starContainerElement.addEventListener('mouseenter', handleBackgroundHover);
    starContainerElement.addEventListener('mouseleave', handleBackgroundLeave);

    return () => {
      starContainerElement.removeEventListener('mouseenter', handleBackgroundHover);
      starContainerElement.removeEventListener('mouseleave', handleBackgroundLeave);
    };
  }, []);

  // Apply hover effects
  useEffect(() => {
    starsRef.current.forEach(starElement => {
      if (isHovered) {
        const hoverColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
        starElement.style.backgroundColor = `red`;
        starElement.style.boxShadow = `0 4px 3px ${hoverColor}`;
      } else {
        const originalColor = starElement.dataset.originalColor;
        starElement.style.backgroundColor = originalColor;
        starElement.style.boxShadow = "none";
      }
    });
  }, [isHovered]);
     
  
  // Handle mouse movement to disable hover effect on the navbar
  useEffect(() => {
    const handleMouseMove = (event) => {
      const navbar = document.querySelector('nav');
      const navbarRect = navbar ? navbar.getBoundingClientRect() : null;

      // Disable hover effects when over the navbar or other content
      if (navbarRect && 
          (event.clientX >= navbarRect.left && event.clientX <= navbarRect.right &&
           event.clientY >= navbarRect.top && event.clientY <= navbarRect.bottom)) {
        setIsHovered(false);
      } else {
        setIsHovered(true);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div >
      {/* Starry background fixed behind content */}
      <div
        ref={starContainerRef}
        className="absolute top-0 left-0 w-full z-[-1] bg-black"
        style={{
          position: 'fixed', // Keep fixed for background scrolling
          width: '100vw', // Full width of the viewport
          height: '300vh', // Increase height to fit the page
          overflow: 'hidden', // Prevent scrollbars on the background container
        }}
      >
      </div>
      <Navbar />
      <Answer />


    
    </div>
  );
};

export default StarryBackground;
