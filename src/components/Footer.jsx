import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import googleplay from "../../public/gplay.png";
import appleplay from "../../public/aplay.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#003363] to-[#012242] text-white py-12 px-4">
      <div className="w-full md:w-9/12 mx-auto px-4 md:px-0">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              CareerFinder AU is one of Australia's leading healthcare and
              domestic educational service platforms. We provide full outsourced
              business services to help job seekers find the right
              opportunities.
            </p>
          </div>

          {/* Utility Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Utility Pages</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://api.carerfinderau.com/about"
                  target="_blank"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="https://api.carerfinderau.com/privacy"
                  target="_blank"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://api.carerfinderau.com/terms"
                  target="_blank"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-sm text-gray-300 mb-1">Email us</p>
            <a
              href="mailto:contact@careerfinder.au"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              contact@careerfinder.au
            </a>
            <p>
              <a
                href="https://api.carerfinderau.com/delete-instructions"
                target="_blank"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Delete Instructions
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="CareerFinder AU Logo"
              width={180}
              height={60}
              className="w-full h-auto"
            />
          </div>

          {/* Store Buttons */}
          <div className="flex gap-4">
            <Link href="#" className="block">
              <Image
                src={googleplay}
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <Link href="#" className="block">
              <Image
                src={appleplay}
                alt="Download on the App Store"
                width={135}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
