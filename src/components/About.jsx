
import { motion } from 'framer-motion';
import { landingBg } from '../assets/images';

const About = () => {
  const skills = [
    {
      category: "Development",
      items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Marketing",
      items: ["Brand Strategy", "Market Research", "Digital Marketing", "Content Strategy"]
    }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inline-block">
              About Me
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
              <div className="relative">
                <img
                  src={landingBg}
                  alt="Doreen Wuaku"
                  className="rounded-2xl w-full object-cover shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-400">Hi there!</h3>
                <p className="text-gray-300 leading-relaxed">
                  I&apos;m Doreen Wuaku, a Junior Frontend Developer with a unique blend of technical skills and marketing expertise. My journey in web development is driven by a passion for creating engaging digital experiences that not only look beautiful but also drive results.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With a background in brand strategy and market research, I bring a holistic approach to development, ensuring that every project not only meets technical requirements but also achieves business objectives.
                </p>
              </div>

              {/* Skills Section */}
              <div className="space-y-6">
                {skills.map((skillSet, index) => (
                  <motion.div 
                    key={skillSet.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <h4 className="text-lg font-medium text-purple-400 mb-3">
                      {skillSet.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skillSet.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300"
              >
                View My Work
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;