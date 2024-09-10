import { date } from "@/constant/websiteConstants";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
// import { FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // const handleLogout = () => {
  //     console.log("User logged out");
  //     setMenuOpen(false)
  //     navigate("/auth");
  // };

  return (
    <div
      className="w-full min-h-fit bg-primary flex items-center justify-around px-4 lg:py-5 fixed z-[9999] gap-[6rem]"
      style={{ boxShadow: " rgba(0, 0, 0, 0.2) 0px 20px 30px" }}
    >
      <div className="flex-1 flex lg:justify-end">
        <Menubar className="lg:hidden bg-transparent border-0">
          <MenubarMenu>
            <NavLink to="/">
              <figure className="h-[1.5rem] w-[1.5rem]">
                <img
                  src="/assets/home/home-icn.png"
                  alt="home icon"
                  className="h-full w-full object-cover"
                />
              </figure>
            </NavLink>
          </MenubarMenu>
        </Menubar>
        <Menubar className="hidden lg:flex bg-transparent border-0 justify-between w-full">
          <MenubarMenu>
            <div>
              <span className="bg-white text-primary rounded-full py-1 px-3 text-sm font-semibold shadow-md whitespace-nowrap">
                {date}
              </span>
            </div>
          </MenubarMenu>
          <MenubarMenu>
            <a href="tel:+919036033300" className="no-underline">
              <span className="bg-white text-primary rounded-full py-1 px-3 text-sm font-semibold shadow-md whitespace-nowrap">
                Call us: +91 90360 33300
              </span>
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <NavLink to="/hiring" onClick={() => setMenuOpen(false)}>
              <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] text-base whitespace-nowrap text-white font-semibold ">
                Join Us
              </MenubarTrigger>
            </NavLink>
          </MenubarMenu>
          <MenubarMenu>
            <NavLink to="/auth" onClick={() => setMenuOpen(false)}>
              <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] text-base text-white font-semibold whitespace-nowrap ">
                Sign up
              </MenubarTrigger>
            </NavLink>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="relative flex-1 max-w-[7em]">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <figure className="w-[5rem] h-[5rem] lg:h-[10rem] lg:w-[10rem] absolute bg-primary rounded-full top-[-2.3rem] lg:top-[-6rem] left-1/2 transform -translate-x-1/2 z-40">
            <img
              src="/assets/images/logo.png"
              alt="mentoonsLogo"
              className="h-full w-full object-contain lg:mt-4"
            />
          </figure>
        </NavLink>
      </div>
      <div className="flex-1 flex justify-end lg:justify-between">
        <div className="lg:hidden">
          {menuOpen ? (
            <MdOutlineClose
              className="text-3xl text-white my-3"
              onClick={handleMenuToggle}
            />
          ) : (
            <GiHamburgerMenu
              className="text-3xl text-white my-3"
              onClick={handleMenuToggle}
            />
          )}
        </div>
        <Menubar
          className={`${
            menuOpen ? "flex" : "hidden"
          }  z-10 lg:flex flex-col lg:flex-row items-center justify-between bg-[#f0ebe5] lg:bg-transparent border-none text-[#989ba2] lg:text-white text-base lg:static absolute top-12 right-0 w-full lg:w-full p-4 lg:p-0  h-80 lg:h-10`}
        >
          <MenubarMenu>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              <MenubarTrigger className="cursor-pointer lg:hover:text-white lg:hover:bg-red-500 h-[2.5rem] lg:h-[4.5rem] text-base font-semibold lg:hidden">
                Home
              </MenubarTrigger>
            </NavLink>
          </MenubarMenu>
          <MenubarMenu>
            <NavLink to="/mentoons-comics" onClick={() => setMenuOpen(false)}>
              <MenubarTrigger className="cursor-pointer lg:hover:text-white lg:hover:bg-red-500 h-[2.5rem] lg:h-[4.5rem] text-base font-semibold">
                Comics
              </MenubarTrigger>
            </NavLink>
          </MenubarMenu>
          <MenubarMenu>
            <NavLink to="/mentoons-podcast" onClick={() => setMenuOpen(false)}>
              <MenubarTrigger className="cursor-pointer lg:hover:text-white lg:hover:bg-red-500 h-[2.5rem] lg:h-[4.5rem] text-base font-semibold">
                Podcasts
              </MenubarTrigger>
            </NavLink>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer lg:hover:text-white lg:hover:bg-red-500 h-[2.5rem] lg:h-[4.5rem] text-base whitespace-nowrap font-semibold hidden lg:block">
              Audio Comics
            </MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>Age Groups</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem
                    onClick={() => {
                      navigate(
                        "/mentoons-comics/audio-comics?filter=groupSmall"
                      );
                      setMenuOpen(false);
                    }}
                  >
                    Age 6 - 12
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => {
                      navigate(
                        "/mentoons-comics/audio-comics?filter=groupMedium"
                      );
                      setMenuOpen(false);
                    }}
                  >
                    Age 13 - 19
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => {
                      navigate(
                        "/mentoons-comics/audio-comics?filter=groupLarge"
                      );
                      setMenuOpen(false);
                    }}
                  >
                    Age 20+
                  </MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarItem
                  onClick={() => {
                    navigate("/mentoons-comics/audio-comics?filter=groupLarge");
                    setMenuOpen(false);
                  }}
                >
                  Family
                </MenubarItem>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer lg:hover:text-white lg:hover:bg-red-500 h-[2.5rem] lg:h-[4.5rem] text-base font-semibold hidden lg:block">
              Workshops
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem
                onClick={() => {
                  navigate("/mentoons-workshops?workshop=buddy");
                  setMenuOpen(false);
                }}
              >
                Buddy Camp (Age 6 - 12)
              </MenubarItem>
              <MenubarItem
                onClick={() => {
                  navigate("/mentoons-workshops?workshop=teen");
                  setMenuOpen(false);
                }}
              >
                Teen Camp (Age 13 - 15)
              </MenubarItem>
              <MenubarItem
                onClick={() => {
                  navigate("/mentoons-workshops?workshop=family");
                  setMenuOpen(false);
                }}
              >
                Family Camp (Age 20+)
              </MenubarItem>
              <MenubarItem
                onClick={() => {
                  navigate("/mentoons-workshops?workshop=comic");
                  setMenuOpen(false);
                }}
              >
                How to make your own Comics
              </MenubarItem>
              <MenubarItem
                onClick={() => {
                  navigate("/mentoons-workshops?workshop=character");
                  setMenuOpen(false);
                }}
              >
                How to make your own Character
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <NavLink
              to="/mentoons-comics/audio-comics"
              onClick={() => setMenuOpen(false)}
            >
              <MenubarTrigger className="cursor-pointer lg:hover:text-white lg:hover:bg-red-500 h-[2.5rem] lg:h-[4.5rem] text-base font-semibold lg:hidden">
                Audio Comics
              </MenubarTrigger>
            </NavLink>
          </MenubarMenu>
          <MenubarMenu>
            <NavLink
              to="/mentoons-workshops"
              onClick={() => setMenuOpen(false)}
            >
              <MenubarTrigger className="cursor-pointer lg:hover:text-white lg:hover:bg-red-500 h-[2.5rem] lg:h-[4.5rem] text-base font-semibold lg:hidden">
                Workshops
              </MenubarTrigger>
            </NavLink>
          </MenubarMenu>
          <MenubarMenu>
            <NavLink to="/hiring" onClick={() => setMenuOpen(false)}>
              <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-full text-base whitespace-nowrap text-[#989ba2] lg:text-white font-semibold lg:hidden">
                Join Us
              </MenubarTrigger>
            </NavLink>
          </MenubarMenu>
          {/* <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer lg:hover:text-white lg:hover:bg-red-500 h-[2.5rem] lg:h-[4.5rem] text-base font-semibold flex items-center">
                            <FaUserCircle className="text-2xl lg:text-3xl mr-2" />
                            <span className="hidden lg:block">Profile</span>
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem onClick={() => {
                                setMenuOpen(false)
                                navigate("/profile")
                            }}>
                                My Profile
                            </MenubarItem>
                            <MenubarItem onClick={handleLogout}>
                                Logout
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu> */}
        </Menubar>
      </div>
    </div>
  );
};

export default Header;
