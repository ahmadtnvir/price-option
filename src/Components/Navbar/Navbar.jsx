import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "ProductDetails", path: "/products/:id" },
    { id: 5, name: "Contact", path: "/contact" },
  ];
  return (
    <div>
      <nav>
        <ul className="md:flex">
          {routes.map((route) => <Link key={route.id} route={route}></Link>)
          }
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
