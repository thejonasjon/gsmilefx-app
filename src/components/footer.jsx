import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import GsmileFLogo from '/logo/gsmile_logo_white.png'

export default function Footer() {
  return (
    <footer className="relative w-full py-16 bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,83,0.05),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="relative h-12 w-36">
              <img
                src={GsmileFLogo}
                alt="GsmileFX Logo"
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 max-w-xs">
              Expert trading training and mentorship to help you succeed in the financial markets.
            </p>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-green-500 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                to="#"
                className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-green-500 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                to="#"
                className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-green-500 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                to="#"
                className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-green-500 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Forex Trading Class
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-green-500 transition-colors">
                1-on-1 Mentorship
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Account Management
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Trading Psychology | Tips
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">47, Babalola Street,</li>
              <li className="text-gray-400">Lagos, Nigeria 100211</li>
              <li className="text-gray-400">info@gsmilefx.com</li>
              <li className="text-gray-400">+234 7038250033</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&COPY; {new Date().getFullYear()} Gsmile Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg hover:brightness-110 transition-all z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  );
}