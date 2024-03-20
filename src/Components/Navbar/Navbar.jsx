import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "ProductDetails", path: "/products/:id" },
    { id: 5, name: "Contact", path: "/contact" },
  ];
  // const handleMenuIcon = () => setOpen(!open); 
  // console.log(open);
  return (
    <div>
      <nav>
        {/* <div className=" md:hidden text-2xl" onClick={handleMenuIcon}></div> */}
        <div className=" md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {
          
            open === true ? <ImCross /> : <HiMenuAlt1/>
          }
        </div>
        <ul className={`md:flex duration-1000 absolute md:static ${open ? 'top-8' : '-top-60'}`}>
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
