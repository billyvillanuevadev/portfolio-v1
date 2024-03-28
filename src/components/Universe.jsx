import React, {useState, useEffect} from 'react'

const Universe = () => {
  // console.log(window.innerWidth * window.innerHeight / 10000);
  const [output, setOutput] = useState([]);

  // Function to generate multiple stars
  const generateStars = (size, numOfStars) => {
    const starsArr = [];
    const starVariants = {
      s: 400,
      m: 100,
      l: 50
    }

    for (const key in starVariants) {
      let numOfStars = starVariants[key];
      for (let i = 0; i < numOfStars; i++) {
        starsArr.push(
          <Star size={key} key={`${key}-${i}`} id={`${key}-${i}`} />
        );
      }
    }
    
    return starsArr;
  };
    
  function Star(props) {
    const leftPos = `${getRandomPosition()}px`;
    const topPos = `${getRandomPosition()}px`;

    let output = <li className={`stars-${props.size} star-${props.id}`} style={{ left: leftPos, top: topPos }}></li>;

    return (
      output
    );
  }

  function getRandomPosition() {
    return Math.floor(Math.random() * window.innerWidth);
  }

  // Populate 
  useEffect(() => {
    setOutput(generateStars());
  }, []);

  return (
    <ul className="universe hidden md:block fixed z-0 h-screen w-full">
      {output}
    </ul>
  )
}

export default Universe