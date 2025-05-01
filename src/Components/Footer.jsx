import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0360D9] px-6 sm:px-8 md:px-16 text-white py-12">
      <div>
        <div className="lg:flex block space-y-8 md:space-y-0 justify-between py-6">
          <div className="">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="max-w-lg lg:mx-auto text-lg leading-relaxed">
              We are committed to providing quality healthcare and keeping you
              informed every step of the way. Follow us on social media,
              subscribe to our newsletter, or reach out directly for inquiries
              and support.
            </p>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold my-4">Quick Links</h1>
            <ul className=" gap-8 mb-4">
              <li>
                <a href="/about" className="text-white hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li className="py-2">
                <a href="/services" className="text-white hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-gray-400">
                  Contact
                </a>
              </li>
              <li className="py-2">
                <a href="/terms" className="text-white hover:text-gray-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-white hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-2xl font-bold my-4">Contact Us</h1>
            
            <a className="text-lg" href="mailto:obuekwekosi.com">Email</a>
            <div className="flex py-3 gap-4">
              {/* Social Media Icons */}
              <a
                href="https://www.facebook.com/kosi.obiekwe.7"
                className="text-white hover:text-blue-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/kositeli"
                className="text-white hover:text-blue-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/vivianojiteli/"
                className="text-white hover:text-blue-800"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/vivysfashionhouse/"
                className="text-white hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-center text-gray-400">
            &copy; {new Date().getFullYear()} MedMatch. All Rights Reserved.
          </p>
    </footer>
  );
  
};

export default Footer;
