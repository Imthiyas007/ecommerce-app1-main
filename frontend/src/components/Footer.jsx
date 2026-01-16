import { assets } from '../assets/assets'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCreditCard, FaTruck, FaShieldAlt, FaHeadset } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gray-50'>
      {/* Main Footer Content */}
      <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-8 sm:gap-12 lg:gap-16 my-10 mt-40 text-sm px-4 sm:px-8 lg:px-16'>

        {/* Company Info */}
        <div className='flex flex-col gap-6'>
            <img src={assets.logo} className='mb-5 w-32' alt="Shop from Home Logo" />
            <p className='w-full md:w-2/3 text-gray-600 leading-relaxed'>
            Discover premium fashion and lifestyle products at Shop from Home. We offer secure online shopping with fast delivery, easy returns, and exceptional customer service. Your trusted destination for quality fashion and accessories.
            </p>

            {/* Trust Badges */}
            <div className='flex flex-wrap gap-4 mt-4'>
              <div className='flex items-center gap-2 text-green-600'>
                <FaShieldAlt className='text-lg' />
                <span className='text-sm font-medium'>Secure Payment</span>
              </div>
              <div className='flex items-center gap-2 text-blue-600'>
                <FaTruck className='text-lg' />
                <span className='text-sm font-medium'>Fast Delivery</span>
              </div>
              <div className='flex items-center gap-2 text-purple-600'>
                <FaHeadset className='text-lg' />
                <span className='text-sm font-medium'>24/7 Support</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className='flex gap-4 mt-4'>
              <a href="https://facebook.com/shopfromhome" className='bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors' aria-label="Facebook">
                <FaFacebookF className='text-sm' />
              </a>
              <a href="https://instagram.com/shopfromhome" className='bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors' aria-label="Instagram">
                <FaInstagram className='text-sm' />
              </a>
              <a href="https://twitter.com/shopfromhome" className='bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors' aria-label="Twitter">
                <FaTwitter className='text-sm' />
              </a>
              <a href="https://youtube.com/shopfromhome" className='bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors' aria-label="YouTube">
                <FaYoutube className='text-sm' />
              </a>
              <a href="https://linkedin.com/company/shopfromhome" className='bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors' aria-label="LinkedIn">
                <FaLinkedinIn className='text-sm' />
              </a>
            </div>
        </div>

        {/* Quick Links */}
        <div>
            <p className='text-xl font-medium mb-5'>QUICK LINKS</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li><a href="/" className='hover:text-black transition-colors'>Home</a></li>
                <li><a href="/collection" className='hover:text-black transition-colors'>Shop</a></li>
                <li><a href="/about" className='hover:text-black transition-colors'>About Us</a></li>
                <li><a href="/contact" className='hover:text-black transition-colors'>Contact</a></li>
                <li><a href="/orders" className='hover:text-black transition-colors'>Track Order</a></li>
                <li><a href="/login" className='hover:text-black transition-colors'>Login</a></li>
            </ul>
        </div>

        {/* Customer Service */}
        <div>
            <p className='text-xl font-medium mb-5'>CUSTOMER SERVICE</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li><a href="/faq" className='hover:text-black transition-colors'>FAQ</a></li>
                <li><a href="/shipping" className='hover:text-black transition-colors'>Shipping Info</a></li>
                <li><a href="/returns" className='hover:text-black transition-colors'>Returns & Exchanges</a></li>
                <li><a href="/size-guide" className='hover:text-black transition-colors'>Size Guide</a></li>
                <li><a href="/privacy-policy" className='hover:text-black transition-colors'>Privacy Policy</a></li>
                <li><a href="/terms" className='hover:text-black transition-colors'>Terms of Service</a></li>
            </ul>
        </div>

        {/* Contact Info */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-3 text-gray-600'>
                <li className='flex items-center gap-2'>
                  <FaMapMarkerAlt className='text-gray-400 flex-shrink-0' />
                  <span>123 Fashion Street, Style City, SC 12345</span>
                </li>
                <li className='flex items-center gap-2'>
                  <FaPhone className='text-gray-400 flex-shrink-0' />
                  <a href="tel:+919876543210" className='hover:text-black transition-colors'>+91 98765 43210</a>
                </li>
                <li className='flex items-center gap-2'>
                  <FaEnvelope className='text-gray-400 flex-shrink-0' />
                  <a href="mailto:support@shopfromhome.com" className='hover:text-black transition-colors'>support@shopfromhome.com</a>
                </li>
            </ul>

            {/* Payment Methods */}
            <div className='mt-6'>
              <p className='text-sm font-medium mb-3 text-gray-800'>WE ACCEPT</p>
              <div className='flex items-center gap-2'>
                <FaCreditCard className='text-gray-400' />
                <span className='text-sm text-gray-600'>All Major Credit Cards</span>
              </div>
              <div className='flex items-center gap-2 mt-1'>
                <span className='text-xs bg-blue-600 text-white px-2 py-1 rounded'>UPI</span>
                <span className='text-xs bg-green-600 text-white px-2 py-1 rounded'>COD</span>
                <span className='text-xs bg-purple-600 text-white px-2 py-1 rounded'>Net Banking</span>
              </div>
            </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className='bg-gray-900 text-white py-8 px-4 sm:px-8 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <p className='text-sm text-gray-400 text-center md:text-left'>
              © {new Date().getFullYear()} Shop from Home. All Rights Reserved.
            </p>
            <div className='flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6 text-sm'>
              <a href="/sitemap" className='text-gray-400 hover:text-white transition-colors'>Sitemap</a>
              <span className='text-gray-600 hidden md:block'>|</span>
              <a href="/accessibility" className='text-gray-400 hover:text-white transition-colors'>Accessibility</a>
              <span className='text-gray-600 hidden md:block'>|</span>
              <span className='text-gray-400 text-center md:text-right'>Made with ❤️ for Fashion Lovers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
