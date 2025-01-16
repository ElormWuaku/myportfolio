import { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaLanguage, FaGraduationCap } from "react-icons/fa";

const skills = [
  { name: "React", level: 80 },
  { name: "JavaScript", level: 65 },
  { name: "HTML", level: 70 },
  { name: "CSS", level: 80 },
  { name: "Tailwind", level: 75 },
  { name: "SEO", level: 60 },
  { name: "SMM", level: 70 },
];

const languages = [
  { name: "English", level: 95 },
  { name: "French", level: 70 },
  { name: "Twi ", level: 90 },
  { name: "Ewe", level: 70 },
];

const experiences = [
  {
    company: "Peduase Valley Resort",
    role: "Brand Strategist",
    duration: "2022-2023",
  },
  {
    company: "Upwork Inc",
    role: "Freelancer",
    duration: "2020-2021",
  },
  {
    company: "Giddins Innove",
    role: "Brand Strategist",
    duration: "2019",
  },
  {
    company: "Appen Global",
    role: "Social Media Evaluator/Content Curator",
    duration: "2018",
  },
  {
    company: "School Of Public Health",
    role: "National Service Personnel",
    duration: "2015",
  },
];

const education = [
  {
    institution: "NIBS Nobel International Business School",
    year: "2022",
    major: "Executive Advanced Diploma - Positive Leadership for Africa",
  },
  {
    institution: "INSEEC MSC & MBA Bordeaux",
    year: "2017-2019",
    major: "Luxury Brand Management",
  },
  {
    institution: "Université Bordeaux Montaigne",
    year: "2013-2014",
    major: "Diplôme Universitaire - Français Langue Etranger",
  },
  {
    institution: "University of Ghana, Legon",
    year: "2010-2015",
    major: "Bachelor of Arts - Sociology and French",
  },
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const tabVariants = {
    active: { scale: 1.05, y: -2 },
    inactive: { scale: 1, y: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Journey
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A timeline of my professional experience, skills, and educational background
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["experience", "education", "skills", "languages"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                variants={tabVariants}
                animate={activeTab === tab ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-6 py-3 rounded-lg backdrop-blur-sm transition-all duration-300
                  ${activeTab === tab 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                    : 'bg-white/10 hover:bg-white/20'
                  }
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {activeTab === "experience" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center mb-8">
                  <FaBriefcase className="mr-3" /> Professional Experience
                </h2>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-gray-300 mt-1">{exp.role}</p>
                    <p className="text-sm text-gray-400 mt-2">{exp.duration}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center mb-8">
                  <FaGraduationCap className="mr-3" /> Education
                </h2>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-semibold">{edu.institution}</h3>
                    <p className="text-gray-300 mt-1">{edu.major}</p>
                    <p className="text-sm text-gray-400 mt-2">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "skills" && (
              <div>
                <h2 className="text-2xl font-bold flex items-center mb-8">
                  <FaCode className="mr-3" /> Technical Skills
                </h2>
                <div className="grid gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "languages" && (
              <div>
                <h2 className="text-2xl font-bold flex items-center mb-8">
                  <FaLanguage className="mr-3" /> Languages
                </h2>
                <div className="grid gap-6">
                  {languages.map((language, index) => (
                    <motion.div
                      key={language.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{language.name}</span>
                        <span className="text-gray-400">{language.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${language.level}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;