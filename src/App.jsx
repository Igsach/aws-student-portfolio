import React, { useState } from 'react';
import { 
  Terminal, Cpu, Cloud, Code, Zap, Sparkles, 
  X, ChevronRight, Award, Layers 
} from 'lucide-react';

export default function App() {
  const [vendingOpen, setVendingOpen] = useState(false);
  const [selectedPower, setSelectedPower] = useState(null);
  const [dispensing, setDispensing] = useState(false);

  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'output', text: 'Welcome to SachinOS v2.6.0 (AWS Amplify Cloud Edition)' },
    { type: 'output', text: 'Type "help" to explore available commands.' }
  ]);

  const superpowers = [
    {
      code: 'A1',
      name: '2 AM Hackathon Hyperfocus',
      icon: '⚡',
      desc: 'When the clock hits 2 AM during a hackathon, my debugging speed triples. I turn complex blockers into working MVPs before sunrise.',
      badge: 'Legendary Trait'
    },
    {
      code: 'B2',
      name: 'Zero-Downtime Cloud Architect',
      icon: '☁️',
      desc: 'From configuring custom domain DNS records to setting up automated GitHub CI/CD pipelines on AWS Amplify—I ship globally in minutes.',
      badge: 'AWS Builder Power'
    },
    {
      code: 'C3',
      name: 'Full-Stack Shapeshifter',
      icon: '🔮',
      desc: 'Capable of switching seamlessly between pixel-perfect Tailwind UIs, AI prototype integrations, and structured technical documentation.',
      badge: 'Epic Versatility'
    },
    {
      code: 'D4',
      name: 'Rapid Ecosystem Learner',
      icon: '🚀',
      desc: 'Drop me into any unfamiliar cloud service, API, or framework, and I will have a working proof-of-concept deployed by the end of the day.',
      badge: 'Secret Weapon'
    }
  ];

  const handleDispense = (power) => {
    setDispensing(true);
    setSelectedPower(null);
    setTimeout(() => {
      setDispensing(false);
      setSelectedPower(power);
    }, 650);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    const newHistory = [...terminalHistory, { type: 'input', text: terminalInput }];

    if (cmd === 'help') {
      newHistory.push({ type: 'output', text: 'Available commands: about, skills, projects, aws, secret, clear' });
    } else if (cmd === 'about') {
      newHistory.push({ type: 'output', text: 'Sachin Dhage — Cloud Builder, Hackathon Enthusiast & Web Developer passionate about scalable web apps and AI.' });
    } else if (cmd === 'skills') {
      newHistory.push({ type: 'output', text: 'Tech Stack: React.js, Tailwind CSS, JavaScript (ES6+), AWS Amplify, Cloud CI/CD, AI Prototyping, Custom Domains & WordPress.' });
    } else if (cmd === 'projects') {
      newHistory.push({ type: 'output', text: '1. AWS Cloud Portfolio | 2. Campusify EdTech Platform | 3. AI Hackathon Prototypes | 4. Multi-Domain Web Deployments' });
    } else if (cmd === 'aws') {
      newHistory.push({ type: 'output', text: 'AWS Architecture: Hosted globally on AWS Amplify with continuous deployment connected directly to GitHub.' });
    } else if (cmd === 'secret') {
      newHistory.push({ type: 'output', text: '🔓 SECRET UNLOCKED: Launching the Superpower Vending Machine...' });
      setVendingOpen(true);
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else {
      newHistory.push({ type: 'output', text: `Command not recognized: "${cmd}". Type "help" for a list of commands.` });
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
      <div className="bg-gradient-to-r from-purple-900/90 via-indigo-900/90 to-purple-900/90 border-b border-purple-500/30 px-4 py-2.5 text-center text-xs md:text-sm flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-400 animate-pulse shrink-0" />
        <span>
          <strong>Interactive Hint:</strong> Type <code className="bg-black/40 px-1.5 py-0.5 rounded text-amber-300 font-mono">secret</code> in the terminal below or click the <strong>⚡ Superpower Vending Machine</strong> button to reveal something unique about me!
        </span>
      </div>

      <nav className="sticky top-0 z-30 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Cloud className="w-6 h-6 text-purple-400" />
            <span>Sachin<span className="text-purple-400">.cloud</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-purple-400 transition">About Me</a>
            <a href="#skills" className="hover:text-purple-400 transition">Tech Superpowers</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <button 
              onClick={() => setVendingOpen(true)}
              className="bg-purple-600/20 border border-purple-500/50 text-purple-300 px-3.5 py-1.5 rounded-full text-xs hover:bg-purple-600 hover:text-white transition flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" /> Unlock Superpower
            </button>
          </div>
        </div>
      </nav>

      <section id="about" className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Deployed Globally on AWS Amplify
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Building Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400">Cloud & AI</span> Web Experiences.
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Hi, I'm <strong>Sachin Dhage</strong> — a web developer, hackathon builder, and cloud enthusiast. I specialize in turning ambitious ideas into fast, responsive applications hosted on modern cloud infrastructure.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl transition flex items-center gap-2 shadow-lg shadow-purple-600/25">
              View My Projects <ChevronRight className="w-4 h-4" />
            </a>
            <button 
              onClick={() => setVendingOpen(true)}
              className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-xl transition flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" /> Launch Vending Machine
            </button>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-purple-950/20">
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            </div>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-purple-400" /> sachin@aws-amplify:~
            </span>
          </div>
          <div className="p-5 font-mono text-sm h-80 flex flex-col justify-between">
            <div className="overflow-y-auto space-y-2.5 pr-2">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className={item.type === 'input' ? 'text-amber-300 font-semibold' : 'text-slate-300 leading-relaxed'}>
                  {item.type === 'input' ? `$ ${item.text}` : item.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-3 border-t border-slate-800/80 mt-2">
              <span className="text-purple-400 font-bold">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help', 'aws', or 'secret' and press Enter..."
                className="bg-transparent border-none outline-none text-white w-full placeholder:text-slate-600"
              />
            </form>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold uppercase tracking-wider mb-2">
            <Cpu className="w-4 h-4" /> Technical Arsenal
          </div>
          <h2 className="text-3xl font-bold mb-12">Skills & Tech Superpowers</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition">
              <Cloud className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cloud & DevOps</h3>
              <p className="text-slate-400 text-sm mb-4">
                Deploying globally available web applications using automated Git-based CI/CD workflows and custom domain routing.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AWS Amplify', 'GitHub CI/CD', 'Cloud Hosting', 'Custom DNS', 'SSL/HTTPS'].map(tag => (
                  <span key={tag} className="text-xs bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-md text-slate-300">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition">
              <Code className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Frontend Engineering</h3>
              <p className="text-slate-400 text-sm mb-4">
                Building responsive, accessible, and interactive user interfaces that work seamlessly across desktop and mobile devices.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'WordPress'].map(tag => (
                  <span key={tag} className="text-xs bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-md text-slate-300">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition">
              <Award className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI & Rapid Prototyping</h3>
              <p className="text-slate-400 text-sm mb-4">
                Translating complex problem statements into working prototypes during competitive AI and cloud developer hackathons.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AI Hackathons', 'Search & Scale', 'Technical Docs', 'Agile Execution'].map(tag => (
                  <span key={tag} className="text-xs bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-md text-slate-300">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold uppercase tracking-wider mb-2">
          <Layers className="w-4 h-4" /> Proof of Work
        </div>
        <h2 className="text-3xl font-bold mb-12">Projects & Hackathon Achievements</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'AWS Cloud Portfolio & Superpower Machine',
              badge: 'AWS Challenge 2026',
              desc: 'Built and deployed a cloud-native personal portfolio on AWS Amplify featuring an interactive terminal and a gamified Superpower Vending Machine.',
              tech: ['React', 'Tailwind CSS', 'AWS Amplify', 'GitHub CI/CD']
            },
            {
              title: 'Campusify Educational Platform & Docs',
              badge: 'EdTech Initiative',
              desc: 'Contributed to structuring comprehensive course manuals, learning documentation, and agile task workflows to help students master technology.',
              tech: ['Technical Writing', 'Web Content', 'Workflow Ops', 'EdTech']
            },
            {
              title: 'AI & Cloud Builder Hackathon Prototypes',
              badge: 'Competitive Builder',
              desc: 'Participated in major developer challenges including Google Cloud AI Builder Cup, Paytm AI Hackathon, and Elastic Search & Scale workshops.',
              tech: ['AI Prototyping', 'Cloud Architecture', 'Search Systems', 'Rapid MVP']
            }
          ].map((proj, i) => (
            <div key={i} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 hover:border-purple-500/40 transition duration-300">
              <div>
                <span className="text-xs font-semibold text-purple-300 bg-purple-950/80 border border-purple-700/50 px-3 py-1 rounded-full">
                  {proj.badge}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3">{proj.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {proj.tech.map(t => (
                  <span key={t} className="text-xs text-purple-300/80 font-mono">#{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <button
        onClick={() => setVendingOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold px-5 py-3.5 rounded-full shadow-2xl shadow-purple-600/50 flex items-center gap-2.5 border border-white/20 animate-bounce cursor-pointer"
      >
        <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
        <span>Superpower Vending Machine</span>
      </button>

      {vendingOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-purple-500/60 rounded-3xl max-w-lg w-full p-6 relative shadow-2xl shadow-purple-600/30">
            <button 
              onClick={() => setVendingOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
                Interactive Creative Feature
              </span>
              <h3 className="text-2xl font-extrabold mt-2">⚡ Superpower Vending Machine</h3>
              <p className="text-slate-400 text-sm mt-1">
                Select a slot code below to dispense a unique tech story or trait about me!
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {superpowers.map((item) => (
                <button
                  key={item.code}
                  onClick={() => handleDispense(item)}
                  className="bg-slate-950 hover:bg-purple-950/50 border border-slate-700 hover:border-purple-400 rounded-xl p-3 text-center transition group cursor-pointer"
                >
                  <div className="text-2xl mb-1 group-hover:scale-125 transition">{item.icon}</div>
                  <div className="text-xs font-mono text-purple-400 font-bold bg-purple-950/80 rounded py-0.5">
                    Slot {item.code}
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium mt-1.5 line-clamp-1">
                    {item.name}
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 min-h-[140px] flex items-center justify-center text-center">
              {dispensing ? (
                <div className="text-purple-400 font-mono text-sm animate-pulse">
                  ⚙️ Dispensing superpower capsule from AWS Cloud...
                </div>
              ) : selectedPower ? (
                <div className="space-y-2">
                  <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full font-semibold">
                    {selectedPower.badge}
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    {selectedPower.icon} {selectedPower.name}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedPower.desc}
                  </p>
                </div>
              ) : (
                <p className="text-slate-500 text-sm font-mono">
                  [ TRAY EMPTY — SELECT SLOT A1, B2, C3, OR D4 ABOVE ]
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-slate-900 py-8 text-center text-slate-500 text-sm px-4">
        <p>
          Designed & Built by <strong>Sachin Dhage</strong> • Powered by React, Tailwind CSS & <strong>AWS Amplify</strong>
        </p>
      </footer>
    </div>
  );
}