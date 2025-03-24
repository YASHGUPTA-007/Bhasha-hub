'use client';

import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0f] border-t border-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-blue-400" />
              <div className="relative">
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-20 animate-glow" />
                <span className="relative text-xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text animate-glowing">
                  Bhasha Hub
                </span>
              </div>
            </div>
            <p className="text-gray-400">
              Empowering developers with next-generation tools and seamless collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                ring-1 ring-gray-800/60 hover:ring-blue-500/20 transition-all duration-300
                group hover:scale-110"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                ring-1 ring-gray-800/60 hover:ring-blue-500/20 transition-all duration-300
                group hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                ring-1 ring-gray-800/60 hover:ring-blue-500/20 transition-all duration-300
                group hover:scale-110"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              © {new Date().getFullYear()} Bhasha Hub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;