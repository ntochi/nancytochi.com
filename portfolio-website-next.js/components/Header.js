import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">
            My Website
          </Link>
        </div>
        
        <div className="flex space-x-4">
          <Link href="/about">
            About
          </Link>
          <Link href="/projects">
            Projects
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
