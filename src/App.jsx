import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Cloud, Code, Zap, Sparkles, X, ChevronRight, Award, Layers, MonitorSmartphone, Rocket, Wand2, Linkedin } from 'lucide-react';

export default function App() {
  const [vendingOpen, setVendingOpen] = useState(false);
  const [selectedPower, setSelectedPower] = useState(null);
  const [dispensing, setDispensing] = useState(false);
  const terminalEndRef = useRef(null);

  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'output', text: 'Welcome to Sach.os v2.6.0 (AWS Amplify Edition)' },
    { type: 'output', text: 'Type "help" to explore available commands.' }
  ]);

  // Auto-scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  const superpowers = [
    {
      code: 'A1',
      name: '2 AM Hackathon Hyperfocus',
      icon: <Zap className="w-8 h-8 text-amber-400 mx-auto" />,
      desc: 'When the clock hits 2 AM during a hackathon, my debugging speed triples. I turn complex blockers into working MVPs before sunrise.',
      badge: 'Legendary Trait'
    },
    {
      code: 'B2',
      name: 'Zero-Downtime Cloud Architect',
      icon: <Cloud className="w-8 h-8 text-purple-400 mx-auto" />,
      desc: 'From configuring custom domain DNS records to setting up automated GitHub CI/CD pipelines on AWS Amplify—I ship globally in minutes.',
      badge: 'AWS Builder Power'
    },
    {
      code: 'C3',
      name: 'Full-Stack Shapeshifter',
      icon: <Wand2 className="w-8 h-8 text-pink-400 mx-auto" />,
      desc: 'Capable of switching seamlessly between pixel-perfect Tailwind UIs, React logic, and structured technical documentation.',
      badge: 'Epic Versatility'
    },
    {
      code: 'D4',
      name: 'Startup Hustler (CreaSpace)',
      icon: <Rocket className="w-8 h-8 text-rose-400 mx-auto" />,
      desc: 'Founder mindset. I don\'t just write code; I build products that solve real problems and understand the business side of tech.',
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
      newHistory.push({ type: 'output', text: 'Available commands: about, skills, projects, startup, aws, secret, clear' });
    } else if (cmd === 'about') {
      newHistory.push({ type: 'output', text: 'Sachin Dhage (Sach) — Cloud Builder, Startup Founder & Web Developer passionate about AWS and AI.' });
    } else if (cmd === 'skills') {
      newHistory.push({ type: 'output', text: 'Tech Stack: React.js, Tailwind CSS, JavaScript, AWS Amplify, Cloud CI/CD, AI Prototyping.' });
    } else if (cmd === 'projects') {
      newHistory.push({ type: 'output', text: '1. CreaSpace.in (Startup) | 2. AWS Cloud Portfolio | 3. Campusify EdTech | 4. AI Hackathon Prototypes' });
    } else if (cmd === 'startup') {
      newHistory.push({ type: 'output', text: '[CREASPACE]: My own startup! Building digital experiences and scalable platforms.' });
    } else if (cmd === 'aws') {
      newHistory.push({ type: 'output', text: 'AWS Architecture: Hosted globally on AWS Amplify with continuous deployment connected directly to GitHub.' });
    } else if (cmd === 'secret') {
      newHistory.push({ type: 'output', text: '[SECRET UNLOCKED]: Launching the Superpower Vending Machine...' });
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
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-900/90 via-indigo-900/90 to-purple-900/90 border-b border-purple-500/30 px-4 py-2.5 text-center text-xs md:text-sm flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse shrink-0" />
          <span><strong>AWS Student Builder Challenge:</strong></span>
        </div>
        <span>Type <code className="bg-black/40 px-1.5 py-0.5 rounded text-amber-300 font-mono">secret</code> in the terminal below!</span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-30 backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-tight">
            <Cloud className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
            <span>Sach<span className="text-purple-400">.os</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#skills" className="hover:text-purple-400 transition">Tech Arsenal</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <button 
              onClick={() => setVendingOpen(true)}
              className="bg-purple-600/20 border border-purple-500/50 text-purple-300 px-4 py-2 rounded-full text-xs hover:bg-purple-600 hover:text-white transition flex items-center gap-1.5 cursor-pointer shadow-lg shadow-purple-900/20"
            >
              <Zap className="w-4 h-4 text-amber-400" /> Unlock Superpower
            </button>
          </div>
          {/* Mobile Nav Vending Button */}
          <button 
            onClick={() => setVendingOpen(true)}
            className="md:hidden bg-purple-600/20 border border-purple-500/50 text-purple-300 p-2 rounded-full hover:bg-purple-600 hover:text-white transition"
          >
            <Zap className="w-5 h-5 text-amber-400" />
          </button>
        </div>
      </nav>

      {/* Hero & Terminal Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Deployed on AWS Amplify
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Building Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400">Cloud & AI</span> Web Experiences.
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
            Hi, I'm <strong>Sachin (Sach)</strong> — Founder of <strong>CreaSpace.in</strong>, web developer, and cloud enthusiast. I specialize in turning ambitious ideas into fast, responsive applications on modern AWS infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-purple-600/25">
              View My Projects <ChevronRight className="w-4 h-4" />
            </a>
            <button 
              onClick={() => setVendingOpen(true)}
              className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold px-6 py-3.5 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" /> Launch Vending Machine
            </button>
            <a 
              href="https://in.linkedin.com/in/sachindhageofficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-[#70B5F9] font-semibold px-6 py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-[#0A66C2]/10"
            >
              <Linkedin className="w-5 h-5" /> Connect
            </a>
          </div>
        </div>

        {/* Terminal Window */}
        <div className="order-1 md:order-2 bg-slate-900 border border-slate-700 md:border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-purple-950/40">
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            </div>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-purple-400" /> sach@aws-amplify:~
            </span>
          </div>
          <div className="p-4 md:p-5 font-mono text-xs md:text-sm h-72 md:h-80 flex flex-col justify-between">
            <div className="overflow-y-auto space-y-2.5 pr-2 custom-scrollbar">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className={item.type === 'input' ? 'text-amber-300 font-semibold' : 'text-slate-300 leading-relaxed'}>
                  {item.type === 'input' ? `$ ${item.text}` : item.text}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>
            <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-3 border-t border-slate-800/80 mt-2">
              <span className="text-purple-400 font-bold">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help'..."
                className="bg-transparent border-none outline-none text-white w-full placeholder:text-slate-600"
              />
            </form>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-slate-900/40 border-y border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center md:justify-start gap-2 text-purple-400 text-sm font-semibold uppercase tracking-wider mb-2">
            <Cpu className="w-4 h-4" /> Technical Arsenal
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">Skills & Tech Superpowers</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition shadow-lg">
              <Cloud className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">AWS & Cloud</h3>
              <p className="text-slate-400 text-sm mb-4">
                Deploying globally available web applications using AWS Amplify, automated CI/CD, and custom routing.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AWS Amplify', 'GitHub CI/CD', 'Route 53', 'Cloud Hosting'].map(tag => (
                  <span key={tag} className="text-xs bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-md text-slate-300">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition shadow-lg">
              <Code className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Frontend Engineering</h3>
              <p className="text-slate-400 text-sm mb-4">
                Building responsive, accessible, and interactive user interfaces that look flawless on any device.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Tailwind CSS', 'JavaScript', 'Responsive UI'].map(tag => (
                  <span key={tag} className="text-xs bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-md text-slate-300">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition shadow-lg sm:col-span-2 md:col-span-1">
              <Rocket className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Startup & MVP Build</h3>
              <p className="text-slate-400 text-sm mb-4">
                Rapidly transforming ideas into functional MVPs. Bringing a founder's mindset from building CreaSpace.in.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Agile MVP', 'Problem Solving', 'Leadership', 'Hackathons'].map(tag => (
                  <span key={tag} className="text-xs bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-md text-slate-300">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="flex items-center justify-center md:justify-start gap-2 text-purple-400 text-sm font-semibold uppercase tracking-wider mb-2">
          <Layers className="w-4 h-4" /> Proof of Work
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">Projects & Achievements</h2>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: 'CreaSpace.in (My Startup)',
              badge: 'Startup Founder',
              desc: 'Founded a digital platform focusing on creative tech solutions. Architected the front-end and managed end-to-end deployment.',
              tech: ['Startup', 'React', 'Management', 'AWS']
            },
            {
              title: 'Campusify EdTech Platform',
              badge: 'Ex Co-Founder',
              desc: 'Co-founded and built an educational technology platform dedicated to student learning, agile workflows, and tech mastery.',
              tech: ['EdTech', 'Leadership', 'Product Strategy', 'Web']
            },
            {
              title: 'Sach.os AWS Portfolio',
              badge: 'AWS Challenge 2026',
              desc: 'Built this interactive cloud-native portfolio on AWS Amplify. Features a fully functional terminal and gamified vending machine.',
              tech: ['React', 'Tailwind CSS', 'AWS Amplify']
            },
            {
              title: 'AI Builder Prototypes',
              badge: 'Hackathon Wins',
              desc: 'Participated and prototyped heavily in major developer challenges including Cloud AI Builder and Search & Scale workshops.',
              tech: ['AI Integration', 'Rapid MVP', 'Cloud Arch']
            }
          ].map((proj, i) => (
            <div key={i} className="bg-slate-900/80 border border-slate-700 md:border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1.5 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-900/20 transition duration-300">
              <div>
                <span className="inline-block text-xs font-semibold text-purple-300 bg-purple-950/80 border border-purple-700/50 px-3 py-1 rounded-full mb-4">
                  {proj.badge}
                </span>
                <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80 mt-auto">
                {proj.tech.map(t => (
                  <span key={t} className="text-xs text-purple-300/80 font-mono">#{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Action Button for Mobile & Desktop */}
      <button
        onClick={() => setVendingOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold px-4 py-3 md:px-5 md:py-3.5 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)] flex items-center gap-2.5 border border-white/20 hover:scale-105 transition-transform cursor-pointer"
      >
        <Zap className="w-5 h-5 text-amber-300 fill-amber-300 animate-pulse" />
        <span className="hidden sm:inline">Superpower Machine</span>
        <span className="sm:hidden">Superpower</span>
      </button>

      {/* Vending Machine Modal */}
      {vendingOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-purple-500/50 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-[0_0_40px_rgba(168,85,247,0.2)]">
            <button 
              onClick={() => setVendingOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 p-2 rounded-full transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                AWS Hackathon Feature
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                ⚡ Tech Superpower Machine
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">
                Select a slot code below to dispense my unique developer traits!
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {superpowers.map((item) => (
                <button
                  key={item.code}
                  onClick={() => handleDispense(item)}
                  disabled={dispensing}
                  className="bg-slate-950 hover:bg-purple-950/60 border border-slate-700 hover:border-purple-500 rounded-xl p-3 sm:p-4 text-center transition-all group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-purple-300 font-bold bg-purple-900/40 border border-purple-800/50 rounded py-1 px-1">
                    Slot {item.code}
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-slate-950 border-2 border-slate-800 rounded-2xl p-4 sm:p-6 min-h-[140px] sm:min-h-[160px] flex items-center justify-center text-center relative overflow-hidden">
              {/* Glass reflection effect on the vending machine screen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50 pointer-events-none"></div>
              
              {dispensing ? (
                <div className="text-purple-400 font-mono text-sm sm:text-base animate-pulse flex flex-col items-center gap-2">
                  <Cloud className="w-6 h-6 animate-bounce" />
                  Fetching capsule from AWS Cloud...
                </div>
              ) : selectedPower ? (
                <div className="space-y-3 animate-in zoom-in-95 duration-300">
                  <span className="inline-block text-[10px] sm:text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full font-semibold">
                    {selectedPower.badge}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center gap-2">
                    {selectedPower.icon} {selectedPower.name}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-[90%] mx-auto">
                    {selectedPower.desc}
                  </p>
                </div>
              ) : (
                <p className="text-slate-500 text-xs sm:text-sm font-mono flex flex-col items-center gap-2">
                  <MonitorSmartphone className="w-6 h-6 text-slate-600 mb-1" />
                  [ TRAY EMPTY — AWAITING SELECTION ]
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 mt-12 bg-slate-950 text-center text-slate-500 text-xs md:text-sm px-4">
        <p>
          Built by <strong>Sachin (Sach)</strong> for the <strong>AWS Student Builder Challenge</strong>.
        </p>
        <p className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <span>Powered by React, Tailwind CSS & <strong className="text-purple-400/80">AWS Amplify</strong>.</span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-700"></span>
          <a href="https://in.linkedin.com/in/sachindhageofficial" target="_blank" rel="noopener noreferrer" className="text-[#70B5F9] hover:underline flex items-center gap-1.5">
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn Profile
          </a>
        </p>
      </footer>

      {/* CSS for custom scrollbar hidden in regular view but styled */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5); 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.3); 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.6); 
        }
      `}} />
    </div>
  );
}
