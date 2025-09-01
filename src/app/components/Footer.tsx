import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#c5050c] text-white py-8 px-4 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6">
        {/* Social links */}
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <a
            href="https://www.instagram.com/badgerproductclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/badger-product-club-60299b2b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Contact */}
        <div className="text-center md:text-right text-white font-medium">
          <span className="block">Questions or concerns?</span>
          <a
            href="mailto:uwproductmanagement@gmail.com"
            className="underline hover:text-gray-200 transition"
          >
            badgerproductclub@gmail.com
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-white/80 mt-6">
        &copy; {new Date().getFullYear()} Product Management Club @ UW–Madison. All rights reserved.
      </div>
    </footer>
  );
}
