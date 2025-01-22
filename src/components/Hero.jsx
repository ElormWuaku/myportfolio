import { motion, useScroll, useTransform } from 'framer-motion';
import { heroBg } from '../assets/images';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/ElormWuaku", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/doreenlux-25992/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:hageelorm@gmail.com", label: "Email" },
    { icon: FaPhone, href: "tel:+233246273377", label: "Phone" }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleProjectsClick = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
        <motion.div 
          className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <motion.span
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    backgroundColor: ["hsla(0, 100%, 100%, 0.1)", "hsla(230, 100%, 100%, 0.1)"],
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Available for freelance work
                </motion.span>
              </motion.div>

              <motion.h1 
                className="text-5xl sm:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Hi, I&apos;m
                </motion.span>
                <motion.span 
                  className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Doreen Wuaku
                </motion.span>
              </motion.h1>

              <motion.h2
                className="text-xl sm:text-2xl font-light text-gray-300 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Frontend Developer</span>
                {" "}crafting engaging digital experiences through code and creativity
              </motion.h2>

              <motion.div 
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  onClick={handleProjectsClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium overflow-hidden group"
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.5],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  />
                </motion.button>
                <motion.a
                  href="/public/DoreenWuakuCV.pdf"
                  download="DoreenWuakuCV.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-colors duration-300"
                >
                  Download CV
                </motion.a>
              </motion.div>
            </div>

            {/* Social Links with Enhanced Animations */}
            <div className="flex gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="group relative"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative"
                  >
                    <link.icon className="text-2xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                    <motion.div
                      className="absolute -inset-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 blur-sm"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                  <motion.span 
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {link.label}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Image Section */}
          <motion.div
            className="w-full lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            style={{ y: backgroundY }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 rounded-2xl"
                animate={{
                  opacity: [0.6, 0.8],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
              <img
                src={heroBg}
                alt="Doreen Wuaku"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <motion.div 
                className="absolute -right-4 -bottom-4 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl -z-10 opacity-50 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;