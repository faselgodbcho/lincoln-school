import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="bg-white">
      <section className="sm:px-6 py-12 sm:p-24 bg-white container mx-auto ">
        <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-12 md:gap-16 sm:px-4 justify-center md:px-0 sm:justify-center">
          <ul className="text-primary text-sm">
            <li className="font-bold mb-2">School Info</li>
            <li className="mb-1">
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Our Goals</Link>
            </li>
          </ul>

          <ul className="text-primary text-sm">
            <li className="font-bold mb-2">Location</li>
            <li className="mb-1">
              <Link to="/">CA, USA</Link>
            </li>
          </ul>

          <ul className="text-primary text-sm">
            <li className="font-bold mb-2">Mobile App</li>
            <li className="mb-1">
              <Link to="/">iOS & Android</Link>
            </li>
          </ul>

          <ul className="text-primary text-sm">
            <li className="font-bold mb-2">Get in Touch</li>
            <li className="mb-1">
              <Link to="/">+1 (123) 456-7890</Link>
            </li>
            <li className="mb-1">
              <Link to="/">CA USA</Link>
            </li>
            <li className="mb-1">
              <Link to="/">iOS & Android</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="container flex justify-between items-center py-4 px-8">
          <p className="max-sm:text-sm">&copy; copyright 2024</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
