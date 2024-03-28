import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Navigation from './Navigation'

const Header = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"><a href="/">Joel Villanueva</a></h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Web Developer</h2>
      <p className="mt-4 max-w-sm leading-normal">I code functional & pixel-perfect websites.</p>
      <p className="mt-4 max-w-xs leading-normal">My passion for learning extends beyond code. I find myself drawn to variety of interests that foster personal growth & practical skills:&nbsp;
        <span className="text-teal-300">
          <Typewriter
            words={['Artificial Intelligence', 'Music', 'Stoicism', 'Cosmology', 'Boxing', 'Cooking', 'Gaming', 'Calisthenics', 'Drums', 'Running', 'Guitar', 'Yoga', 'Astronomy']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </p>
      
      <Navigation />
    </div>
  )
}

export default Header