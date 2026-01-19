import { assets } from '../assets/assets'
import {
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn,
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaCreditCard,
  FaTruck, FaShieldAlt, FaHeadset
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 text-sm text-gray-600">
      {/* Main Footer Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <p className="leading-relaxed">
              Discover premium fashion and lifestyle products at Shop from Home. We offer secure online shopping with fast delivery, easy returns, and exceptional customer service.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-green-600">
                <FaShieldAlt className="text-lg" aria-hidden="true" />
                <span className="font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <FaTruck className="text-lg" aria-hidden="true" />
                <span className="font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600">
                <FaHeadset className="text-lg" aria-hidden="true" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mt-3">
              <a href="https://facebook.com/shopfromhome" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/shopfromhome" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/shopfromhome" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition">
                <FaTwitter />
              </a>
              <a href="https://youtube.com/shopfromhome" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">
                <FaYoutube />
              </a>
              <a href="https://linkedin.com/company/shopfromhome" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-black transition">Home</a></li>
              <li><a href="/collection" className="hover:text-black transition">Shop</a></li>
              <li><a href="/about" className="hover:text-black transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-black transition">Contact</a></li>
              <li><a href="/orders" className="hover:text-black transition">Track Order</a></li>
              <li><a href="/login" className="hover:text-black transition">Login</a></li>
            </ul>
          </nav>

          {/* Customer Service */}
          <nav aria-label="Customer Service">
            <h2 className="text-lg font-semibold mb-3">Customer Service</h2>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:text-black transition">FAQ</a></li>
              <li><a href="/shipping" className="hover:text-black transition">Shipping Info</a></li>
              <li><a href="/returns" className="hover:text-black transition">Returns & Exchanges</a></li>
              <li><a href="/size-guide" className="hover:text-black transition">Size Guide</a></li>
              <li><a href="/privacy-policy" className="hover:text-black transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-black transition">Terms of Service</a></li>
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic">
            <h2 className="text-lg font-semibold mb-3">Get in Touch</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>123 Fashion Street, Style City, SC 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-gray-400" />
                <a href="tel:+919876543210" className="hover:text-black transition">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-gray-400" />
                <a href="mailto:support@shopfromhome.com" className="hover:text-black transition">support@shopfromhome.com</a>
              </li>
            </ul>

            {/* Payment Methods */}
            <div className="mt-4">
              <p className="font-medium mb-2 text-gray-800">We Accept</p>
              <div className="flex items-center gap-2">
                <FaCreditCard className="text-gray-400" />
                <span>All Major Credit Cards</span>
              </div>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">UPI</span>
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">COD</span>
                <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">Net Banking</span>
              </div>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black text-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-center md:text-left text-gray-400">
            © {currentYear} Shop from Home. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
            <a href="/sitemap" className="text-gray-400 hover:text-white">Sitemap</a>
            <a href="/accessibility" className="text-gray-400 hover:text-white">Accessibility</a>
            <span className="text-gray-400">Made with ❤️ for Fashion Lovers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer