import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaXmark, FaBars, FaCartShopping } from "react-icons/fa6";
import logo from "../assets/logo2.png";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions.js";

const NavBar = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/Home" },
    { link: "Shop", path: "/" },
    { link: "Services", path: "/services" },
    { link: "About", path: "/about" },
    { link: "Testimonials", path: "/testimonials" },
    { link: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-14 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={logo} className="w-20 inline-block items-center" />
          </a>

          {/* Nav items for large screen */}
          <ul className="md:flex space-x-12 hidden font-bold">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block text-base text-grey900 hover:text-brandPrimary first:font-bold"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* buttons items for large screen */}
          <div className="space-x-12 hidden lg:flex items-center">
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <NavDropdown.Item>
                  <Nav.Link as={Link} to="/profile" className="text-dark">
                    <i className="fa fa-user"> </i> Profile
                  </Nav.Link>
                </NavDropdown.Item>{" "}
                <NavDropdown.Item onClick={logoutHandler}>
                  <i className="fa fa-sign-out"> </i> Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <a
                href="/login"
                className="hidden lg:flex items-center text-amber-400 hover:text-gray900"
              >
                Login
              </a>
            )}

            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Panel" id="adminmenu">
                <NavDropdown.Item>
                  <Nav.Link
                    as={Link}
                    to="/admin/userlist"
                    className="text-dark"
                  >
                    <i className="fas fa-users"> </i> Users
                  </Nav.Link>
                </NavDropdown.Item>{" "}
                <NavDropdown.Item>
                  <Nav.Link
                    as={Link}
                    to="/admin/productlist"
                    className="text-dark"
                  >
                    <i className="fas fa-store"> </i> Products
                  </Nav.Link>
                </NavDropdown.Item>{" "}
                <NavDropdown.Item>
                  <Nav.Link
                    as={Link}
                    to="/admin/orderlist"
                    className="text-dark"
                  >
                    <i className="fas fa-shopping-basket"> </i> Orders
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            )}

            <Link to="/Cart">
              <button className="bg-amber-400 text-white py-2 px-3 transition-all duration-300 rounded-full hover:bg-neutralDGray">
                <FaCartShopping className="inline-block " />
              </button>
            </Link>
          </div>

          {/* menu for small screen */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGray focus:outline-none focus:text-gray-500 "
            >
              {isMenuOpen ? (
                <FaXmark className="text-neutralDGray h-6 w-6 " />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>

        {/* Nav items for small screen */}
        <div
          className={`space-y-4 px-4 mt-20 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              key={path}
              className="block text-base text-white hover:text-neutralDGray first:font-medium"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
