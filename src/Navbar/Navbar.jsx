import { useState } from "react";
import Link from "./Link";
import { RiMenu2Line } from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home", exact: true },
    { id: 2, path: "/about", name: "About", exact: true },
    { id: 3, path: "/services", name: "Services", exact: true },
    { id: 4, path: "/contact", name: "Contact", exact: true },
    { id: 5, path: "/profile/:userId", name: "Profile", exact: false },
  ];
  return (
    <div>
      <div className="md:hidden bg-yellow-200 " onClick={() => setOpen(!open)}>
        {open === true ? (
          <FaWindowClose className="text-4xl "></FaWindowClose>
        ) : (
          <RiMenu2Line className="text-4xl "></RiMenu2Line>
        )}
      </div>

      <ul
        className={`md:flex bg-yellow-400 duration-1000 absolute  md:static px-10 ${
          open ? "left-9" : "-left-60"
        }  shadow-lg `}
      >
        {routes.map((router) => (
          <Link key={router.id} router={router}></Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
