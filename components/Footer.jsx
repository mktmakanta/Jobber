import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-white py-10 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {/* Product Section */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li>Overview</li>
            <li>Features</li>
            <li>
              <span className="inline-block relative">
                Solutions
                <span className="ml-2 bg-blue-500 text-xs text-white px-2 py-1 rounded-full">
                  New
                </span>
              </span>
            </li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="font-semibold mb-4">Social</h3>
          <ul className="space-y-2">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* App Links */}
        <div>
          <h3 className="font-semibold mb-4">Get the app</h3>
          <div className="flex flex-col space-y-3">
            <button className="flex items-center justify-center space-x-2 bg-gray-800 py-2 px-4 rounded-md text-white hover:bg-gray-700">
              <FaApple />
              <span>App Store</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-gray-800 py-2 px-4 rounded-md text-white hover:bg-gray-700">
              <FaGooglePlay />
              <span>Google Play</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 flex justify-between items-center text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <span className="rounded-full w-3 h-3 bg-gradient-to-br from-blue-500 to-green-500"></span>
          <span>Jobber Company</span>
        </div>
        <p>&copy; {currentYear} Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
}
