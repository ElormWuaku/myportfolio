
import { motion } from 'framer-motion';
import { heroBg } from '../assets/images';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/ElormWuaku", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/doreenlux-25992/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:hageelorm@gmail.com", label: "Email" },
    { icon: FaPhone, href: "tel:+233246273377", label: "Phone" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

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
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
                  Available for freelance work
                </span>
              </motion.div>

              <h1 className="text-5xl sm:text-7xl font-bold">
                <span className="block">Hi, I&apos;m</span>
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Doreen Wuaku
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl font-light text-gray-300 max-w-xl">
                Front-End Developer crafting engaging digital experiences through code and creativity
              </h2>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
                >
                  View My Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-colors duration-300"
                >
                  Contact Me
                </motion.button>
              </div>
            </div>

            {/* Social Links */}
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
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <link.icon className="text-2xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 rounded-2xl" />
              <img
                src={heroBg}
                alt="Doreen Wuaku"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -right-4 -bottom-4 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl -z-10 opacity-50 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;