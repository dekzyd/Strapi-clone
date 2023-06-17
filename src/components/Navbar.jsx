import { useGlobalContext } from "../GlobalContext";
import { FaBars } from "react-icons/fa";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    // set pageId to null on nav elements except on elements with class nav-link
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button type="button" onClick={openSidebar} className="toggle-btn">
          <FaBars />
        </button>
        {/* nav links later */}
        <Navlinks />
      </div>
    </nav>
  );
};

export default Navbar;
