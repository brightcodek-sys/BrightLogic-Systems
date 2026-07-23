import React from 'react';

const projects = [
  { title: "LexiFetch", desc: "AI-powered database querying tool built for hackathons.", tags: ["Node.js", "AI", "Next.js"] },
  { title: "BRIGHT-CBT", desc: "Online computer-based testing platform for student assessments.", tags: ["React", "Node.js", "Database"] },
  { title: "Bright Label Boutique", desc: "E-commerce storefront featuring automated category navigation.", tags: ["HTML", "CSS", "JavaScript"] }
];

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="font-bold text-xl tracking-wider">Badmos Bright</h1>
        <div className="space-x-6 text-gray-400 text-sm md:text-base">
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="mailto:bright@email.com" className="hover:text-blue-500 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="py-24 text-center px-6">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Full-Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Crafting digital experiences, building scalable web platforms, and solving complex problems from Nigeria.
        </p>
      </header>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Featured Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl hover:border-gray-700 transition flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">{p.title}</h4>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{p.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs bg-blue-950 text-blue-300 border border-blue-900/50 px-2.5 py-1 rounded-full font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-gray-500 text-sm border-t border-gray-900 mt-20">
        <p>© {new Date().getFullYear()} Badmos Bright. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;