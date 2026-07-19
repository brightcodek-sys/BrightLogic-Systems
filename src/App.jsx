import React from 'react';

const projects = [
  { title: "LexiFetch", desc: "AI-powered database querying.", tags: ["Node.js", "AI"] },
  { title: "BRIGHT-CBT", desc: "Online computer-based testing platform.", tags: ["React", "Node.js"] },
  { title: "Bright Label Boutique", desc: "E-commerce storefront for retail.", tags: ["HTML", "CSS", "JS"] }
];

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white font-sans">
      <nav className="p-6 flex justify-between max-w-6xl mx-auto">
        <h1 className="font-bold text-xl">Badmos Bright</h1>
        <div className="space-x-6 text-gray-400">
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="mailto:bright@email.com" className="hover:text-blue-500">Contact</a>
        </div>
      </nav>

      <header className="py-20 text-center">
        <h2 className="text-6xl font-extrabold mb-4">Full-Stack Developer</h2>
        <p className="text-xl text-gray-400">Building scalable solutions from Ekiti, Nigeria.</p>
      </header>

      <section id="projects" className="max-w-6xl mx-auto p-6">
        <h3 className="text-3xl font-bold mb-8">Featured Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <h4 className="text-xl font-bold mb-2">{p.title}</h4>
              <p className="text-gray-400 mb-4 text-sm">{p.desc}</p>
              <div className="flex gap-2">
                {p.tags.map(t => <span key={t} className="text-[10px] bg-blue-900 px-2 py-1 rounded">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
