
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { landingBg } from '../assets/images';

const About = () => {
  // Mouse position for 3D card effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform values for subtle 3D effect
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springConfig = { damping: 20, stiffness: 200 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inline-block">
              About Me
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 3D Image Card */}
            <motion.div
              className="relative perspective-1000"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transformStyle: "preserve-3d",
                rotateX: springRotateX,
                rotateY: springRotateY
              }}
            >
              <div className="relative group">
                <motion.div 
                  className="absolute -inset-1 rounded-2xl opacity-30 group-hover:opacity-70 transition duration-1000 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur"
                  animate={{ 
                    background: [
                      'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
                      'linear-gradient(to right, #8b5cf6, #ec4899, #3b82f6)',
                      'linear-gradient(to right, #ec4899, #3b82f6, #8b5cf6)'
                    ]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <div className="relative">
                  <img
                    src={landingBg}
                    alt="Doreen Wuaku"
                    className="rounded-2xl w-full object-cover shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <motion.h3 
                    className="text-2xl font-semibold text-blue-400"
                    whileInView={{ x: [-20, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    Hi there! 👋
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 leading-relaxed"
                    whileInView={{ y: [20, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    I&apos;m Doreen Wuaku, a Junior Frontend Developer with a unique blend of technical skills and marketing expertise. My journey in web development is driven by a passion for creating engaging digital experiences that not only look beautiful but also drive results.
                  </motion.p>
                  <motion.p 
                    className="text-gray-300 leading-relaxed"
                    whileInView={{ y: [20, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    With a background in Brand Strategy and Market Research, I bring a holistic approach to development, ensuring that every project not only meets technical requirements but also achieves business objectives.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;