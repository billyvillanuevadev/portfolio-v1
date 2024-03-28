import React from 'react'

const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-16 lg:scroll-mt-24" aria-label="About me">
      
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>

      <div>
        <p className="mb-4">Welcome! I am Billy Joel Villanueva, an experienced web developer from the Philippines. I'm comfortable working across all layers of the web development stack, from the user interface to the server-side logic. This enables me to work independently or collaboratively within teams.</p>

        <p className="mb-4">While my foundation lies in <span className="text-sky-300">WordPress</span> and <span className="text-sky-300">PHP</span>, I continue to expand my skillset. I'm currently studying <span className="text-sky-300">React JS</span>, <span className="text-sky-300">Python</span> and <span className="text-sky-300">Artificial Intelligence</span> through online tutorials and by building personal projects.
        </p>
      </div>
    </section>
  )
}

export default About