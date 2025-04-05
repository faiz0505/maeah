import footerLinks from "@/app/utils/footer";
import Link from "next/link";
import { Facebook, Instagram, Music, Twitter, Linkedin } from "lucide-react";

import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 paddings bg-muted-gray/15 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {footerLinks.map((category, index) => (
        <aside key={index}>
          {/* Section Title */}
          <h2 className="md:font-semibold font-bold text-lg text-dark-gray mb-3">
            {category.title}
          </h2>

          {/* Links */}
          <ul className="space-y-2 max-w-[80%]">
            {category.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link
                  href={link.url}
                  className="text-medium-gray hover:text-dark-gray transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ))}
      <aside className="text-center md:text-start col-span-full md:col-span-1">
      {/* Business Name (Placeholder for Logo) */}
      <h2 className="text-dark-purple text-xl font-semibold">Maeah business</h2>

      {/* Social Media Links with Lucide Icons */}
      <div className="flex md:justify-start justify-center space-x-4 mt-4">
        <Facebook className="w-6 h-6 text-dark-purple" />
        <Instagram className="w-6 h-6 text-dark-purple" />
        <Music className="w-6 h-6 text-dark-purple" /> {/* TikTok alternative */}
        <Twitter className="w-6 h-6 text-dark-purple" />
        <Linkedin className="w-6 h-6 text-dark-purple" />
      </div>

      {/* Address */}
      <p className="mt-4 text-gray-700">
        990 Villa St.
        <br />
        Mountain View, CA 94041
      </p>

      {/* Crisis Help Message */}
      <p className="mt-4 text-gray-600 text-sm">
        If you are in a crisis or any other person may be in danger - don't use this site.
        <a href="/" className="text-green-700 underline"> These resources </a>
        can provide you with immediate help.
      </p>
    </aside>
    </footer>
  );
};

export default Footer;
