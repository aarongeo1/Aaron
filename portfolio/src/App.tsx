import { useEffect, useState } from 'react'
import './App.css'

const CustomCursor = () => {
  const [position, setposition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setposition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      removeEventListener('mousemove',handleMouseMove);
    };
  }, []);
  return (
    <div
      style ={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        border: '2px solid white', 
        borderRadius: '50%', 
        width: '20px', 
        height: '20px', 
        transition: 'transform 0.2s ease-out, background-color 0.2s', 
      }}
    />
  );
}

function App() {

  return (
      <>
        <CustomCursor />
        <div className = "Intro">
          <h1> Developer </h1>
          <h2> & </h2>
          <h1> Tech Enthusiast </h1>
        </div>
      </>
  )
}

export default App
