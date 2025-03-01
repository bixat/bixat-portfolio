import { ThemeSwitch } from "./ThemeSwitch";

export const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Navigation Links
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2"
              >
                Contact
              </a>
            </div>
          </div> */}

          {/* Theme Toggle */}
          <div className="flex items-center">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
};
