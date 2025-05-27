import React from "react";

const Footer = () => (
  <footer className="w-full py-4 mt-8 bg-gray-100 text-center text-gray-600 shadow-inner">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Keeper App. All rights reserved.
    </p>
  </footer>
);

export default Footer;