
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      href: '#', // Add your LinkedIn URL
      description: 'Connect with me professionally'
    },
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      href: '#', // Add your GitHub URL
      description: 'Check out my code repositories'
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let&apos;s Connect</h2>
          <p className="text-gray-600">I&apos;d love to hear from you! Choose your preferred way to reach out.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Direct Contact Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xl font-semibold mb-2">
                <Mail className="h-5 w-5" />
                Direct Contact
              </div>
              <p className="text-gray-600 text-sm">
                Send me an email directly
              </p>
            </div>
            <div>
              <a 
                href="mailto:hageelorm@gmail.com"
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
              <p className="mt-4 text-sm text-gray-600">
                Or copy: hageelorm@gmail.com
              </p>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Social Profiles</h3>
              <p className="text-gray-600 text-sm">
                Connect with me on other platforms
              </p>
            </div>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                >
                  {link.icon}
                  <div className="flex-1">
                    <h3 className="font-medium">{link.name}</h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 mt-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Schedule a Meeting</h3>
            <p className="text-gray-600 text-sm">
              Book a time that works best for you
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              I&apos;m always open to scheduling virtual coffee chats or meetings to discuss potential collaborations, 
              opportunities, or just to network.
            </p>
            <button 
              className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md transition-colors"
              onClick={() => window.open('https://calendly.com/hageelorm', '_blank')} // Calendar booking link
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;