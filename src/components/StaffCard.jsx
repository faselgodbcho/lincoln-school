import PlaceholderImage from "../assets/images/placeholder-image.webp";
import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const StaffCard = () => {
  return (
    <div className="flex p-6 rounded bg-black bg-opacity-5 flex-col gap-4 max-w-[300px] mb-4 sm:mb-0 text-primary">
      <div>
        <img src={PlaceholderImage} className="w-100 rounded" />
      </div>

      <div>
        <p className="text-2xl font-bold mb-4">John Doe</p>
        <p>
          We aim to improve school quality by supporting pupils in line with
          Ethiopian Education.
        </p>
      </div>

      <div className="flex items-center gap-3 px-2">
        <a href="tel:+123456789">
          <FaPhone size="1em" />
        </a>
        <a href="tel:+123456789">
          <FaTelegramPlane size="1.3em" />
        </a>
      </div>
    </div>
  );
};

export default StaffCard;
