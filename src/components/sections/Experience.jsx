import React from 'react'
import { experiences } from '../../constants';

const Experience = () => {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24" aria-label="Work experience">
      
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12  lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-4 lg:bg-transparent">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:text-xl">Experience</h2>
      </div>

      <div>
        <ol className="group/list">
          {experiences.map( (exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-sky-200 sm:col-span-2">{exp.date}</header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300  group/link text-base" href={exp.link} target="_blank" rel="noreferrer noopener">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>{exp.company} · {exp.title}</span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{exp.content}</p>
                  <ul className="mt-2 flex flex-wrap">
                    {exp.skills.map((skill, ind) => (
                      <li key={ind} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">{skill}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        
        <div className="mt-12">
          <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base" href="/resume.pdf" target="_blank" rel="noreferrer noopener">View my Résumé</a>
        </div>
      </div>
    </section>
  )
}

export default Experience