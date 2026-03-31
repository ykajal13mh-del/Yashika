import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  Code, 
  Video, 
  BrainCircuit, 
  GraduationCap, 
  ExternalLink,
  ChevronDown,
  Send
} from "lucide-react";
import React, { useState } from "react";

const SectionHeading = ({ children, glowColor = "blue" }: { children: React.ReactNode, glowColor?: "blue" | "purple" }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`text-4xl md:text-5xl font-bold mb-12 text-center ${glowColor === "blue" ? "glow-blue" : "glow-purple"}`}
  >
    {children}
  </motion.h2>
);

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className={`glass p-8 rounded-2xl ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1500);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 bg-[#0a0a0c]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/10 blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-black mb-4 tracking-tighter glow-blue"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            YASHIKA KAJAL
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl font-medium text-neon-purple mb-6 glow-purple"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            AI Student & Future Developer
          </motion.p>
          <motion.div 
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            From Student to Future AI Developer 🚀
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#projects" className="neon-button-blue">View Projects</a>
          <a href="#contact" className="neon-button-purple">Get in Touch</a>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ChevronDown className="text-neon-blue w-8 h-8" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
        <SectionHeading>About Me</SectionHeading>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <GlassCard className="border-neon-blue">
            <p className="text-xl leading-relaxed text-gray-300">
              Yashika Kajal is a passionate AI student currently pursuing BCA in Artificial Intelligence. She loves exploring new technologies, creating AI content, and building innovative ideas for the future.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2 text-neon-blue">
                <BrainCircuit size={20} />
                <span>AI Enthusiast</span>
              </div>
              <div className="flex items-center gap-2 text-neon-purple">
                <Code size={20} />
                <span>Developer</span>
              </div>
            </div>
          </GlassCard>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://picsum.photos/seed/tech/600/600" 
              alt="Yashika Kajal" 
              className="relative rounded-2xl w-full object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeading glowColor="purple">Education</SectionHeading>
          <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            <GlassCard className="border-neon-purple flex items-start gap-6">
              <div className="p-4 bg-neon-purple/20 rounded-xl">
                <GraduationCap className="text-neon-purple w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">BCA (Artificial Intelligence)</h3>
                <p className="text-neon-purple font-medium mb-2">Om Sterling Global University</p>
                <p className="text-gray-400">Focusing on machine learning, neural networks, and AI implementation strategies.</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
        <SectionHeading>Technical Arsenal</SectionHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Artificial Intelligence", icon: BrainCircuit, color: "text-neon-blue" },
            { name: "Python Programming", icon: Code, color: "text-neon-purple" },
            { name: "AI Tools", icon: Cpu, color: "text-neon-blue" },
            { name: "Video Creation", icon: Video, color: "text-neon-purple" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="text-center flex flex-col items-center justify-center gap-4 py-12 h-full border-transparent hover:border-white/20">
                <skill.icon className={`${skill.color} w-12 h-12`} />
                <span className="font-bold text-lg">{skill.name}</span>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeading glowColor="purple">Featured Work</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Image & Video Creation",
                desc: "Exploring the boundaries of generative AI to create stunning visual content and cinematic experiences.",
                tags: ["Midjourney", "Runway", "Stable Diffusion"],
                image: "https://picsum.photos/seed/ai/800/600"
              },
              {
                title: "Creative Tech Content",
                desc: "Producing educational and engaging content about the latest advancements in AI and emerging technologies.",
                tags: ["Content Creation", "Tech Education", "AI News"],
                image: "https://picsum.photos/seed/content/800/600"
              }
            ].map((project, index) => (
              <GlassCard key={index} className="group overflow-hidden p-0 border-transparent hover:border-neon-purple/50">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-bold px-3 py-1 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-neon-blue font-bold hover:gap-3 transition-all">
                    View Project <ExternalLink size={18} />
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 max-w-4xl mx-auto">
        <SectionHeading>Get In Touch</SectionHeading>
        <div className="grid md:grid-cols-1 gap-12">
          <GlassCard className="border-neon-blue">
            {formStatus === "sent" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="text-neon-blue w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="mt-8 text-neon-blue underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  disabled={formStatus === "sending"}
                  type="submit" 
                  className="w-full neon-button-blue flex items-center justify-center gap-2"
                >
                  {formStatus === "sending" ? "Sending..." : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-black glow-blue mb-2">YASHIKA KAJAL</h3>
            <p className="text-gray-500 text-sm">© 2026 Yashika Kajal. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "mailto:y.kajal13mh@gmail.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -5, color: "#00f3ff" }}
                className="text-gray-400 transition-colors"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
