// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-white">Dream 11 Builder</h2>
          <p className="text-sm text-slate-400 mt-2">
            Create your dream cricket team and compete with others.  
            Built with ❤️ using React & Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-300">Available Players</Link>
            </li>
            <li>
              <Link to="/selected" className="hover:text-yellow-300">Selected Team</Link>
            </li>
            <li>
              <a href="#newsletter" className="hover:text-yellow-300">Newsletter</a>
            </li>
          </ul>
        </div>

        {/* Contact / Copyright */}
        <div className="text-sm">
          <h3 className="font-semibold text-white mb-3">Contact</h3>
          <p>Email: support@dream11builder.com</p>
          <p className="mt-3 text-slate-500">
            © {new Date().getFullYear()} Dream 11 Builder.  
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
