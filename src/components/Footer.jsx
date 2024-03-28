import React from 'react'

const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-xs text-slate-500 sm:pb-0">
      <p>
        Built with <a href="https://react.dev/" className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300" target="_blank">React JS</a>, <a href="https://vitejs.dev/" className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300" target="_blank">Vite JS</a> and <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300" target="_blank">Tailwind CSS</a>.<br />Deployed with <a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300" target="_blank">Vercel</a>.
      </p>
    </footer>
  )
}

export default Footer