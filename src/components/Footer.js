import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 px-10 md:px-20 pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <h2 className="text-3xl font-serif text-center mb-16">
          Ready to turn dreams to <span className="text-[#90C418]">reality</span>
        </h2>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-xl font-bold mb-4 block">
              LOGO
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              At system India Private Limited, we provide a comprehensive range of boiler water.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-gray-600 hover:text-[#90C418]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-[#90C418]">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-[#90C418]">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="font-bold mb-4">Pages</h3>
            <div className="space-y-2">
              <Link to="/" className="text-gray-600 hover:text-[#90C418] block">
                Home
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-[#90C418] block">
                About
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-[#90C418] block">
                Services
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-[#90C418] block">
                Contact
              </Link>
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <div className="space-y-2">
              <Link to="/boiler" className="text-gray-600 hover:text-[#90C418] block">
                Boiler Treatment Chemicals
              </Link>
              <Link to="/cooling" className="text-gray-600 hover:text-[#90C418] block">
                Cooling Treatment Chemicals
              </Link>
              <Link to="/ro" className="text-gray-600 hover:text-[#90C418] block">
                RO Treatment Chemicals
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-600">
              <p>123 Street Delhi, India</p>
              <p>info@email.com</p>
              <p>+91 123456789</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t pt-8 text-center text-sm text-gray-600">
          <p>Privacy Policy and Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}