import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fashionBlog, furnish, ghanaHype, eye, guadzefie, berunice } from '../assets/images';

const projects = [
  {
    title: 'Giddins E-commerce Web Application',
    description: 'Built a responsive e-commerce web application with product listings, shopping cart functionality, and a checkout process.',
    technologies: ['Html', 'CSS', 'Node.js'],
    image: fashionBlog,
    link: 'https://giddinspp.netlify.app/'
  },
  {
    title: 'Furnish App Interior Design Web Application',
    description: 'Developed an interior decor web application that had design ideas as well as product listings for users looking to shop.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    image: furnish,
    link: 'https://elorm-furniture.netlify.app/'
  },
  {
    title: 'GhanaHype Event Management Web Application',
    description: 'Created an anual event calendar showcasing events happening in Ghana throughout the year with event cards and location/ price filters.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'Node.js'],
    image: ghanaHype,
    link: 'https://ghanahypedopel.netlify.app/'
  },
  {
    title: 'StudioRouge Photography Studio Website',
    description: 'Developed a website for a photography studio to showcase their work and their awesome team',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'Node.js'],
    image: eye,
    link: 'https://studio-rouge-xi.vercel.app/'
  },
  {
    title: 'Guadzefie',
    description: 'Designed and developed the ui of an e-commerce website for a client in Ghana.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Node.js'],
    image: guadzefie,
    link: 'https://guadzefie.vercel.app/'
  },
  {
    title: 'Berunice Farms',
    description: 'Designed and developed a Business landing page for a client in Ghana.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Node.js'],
    image: berunice,
    link: 'https://berunice.vercel.app/'
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const allTechnologies = ['All', ...new Set(projects.flatMap(project => project.technologies))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center space-y-4">
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Projects
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent web development work and creative projects
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {allTechnologies.map((tech) => (
              <motion.button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`
                  px-6 py-3 rounded-lg backdrop-blur-sm transition-all duration-300
                  ${filter === tech 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                    : 'bg-white/10 hover:bg-white/20'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.button>
            ))}
          </div>

          {/* Project grid */}
          <AnimatePresence>
            <motion.div 
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              layout
            >
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                >
                  <div className="relative group">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 bg-white/20 text-gray-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;