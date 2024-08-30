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
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        console.log("User logged out");
        navigate("/auth"); 
    };

    return (
        <div className="w-full min-h-fit bg-primary flex items-center justify-around px-4 lg:py-5 fixed z-[9999]" style={{boxShadow:' rgba(0, 0, 0, 0.2) 0px 20px 30px'}}>
            <div className="flex-1 flex justify-start">
                <Menubar className="hidden lg:flex bg-transparent border-0">
                    <MenubarMenu>
                        <NavLink to="/mentoons-comics">
                            <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base">
                                <span className="bg-white text-primary rounded-full py-1 px-3 text-sm font-semibold shadow-md whitespace-nowrap">
                                    {date}
                                </span>
                            </MenubarTrigger>
                        </NavLink>
                    </MenubarMenu>
                    <MenubarMenu>
                        <a href="tel:+919036033300" className="no-underline">
                            <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base">
                                <span className="bg-white text-primary rounded-full py-1 px-3 text-sm font-semibold shadow-md whitespace-nowrap">
                                    Call us: +91 90360 33300
                                </span>
                            </MenubarTrigger>
                        </a>
                    </MenubarMenu>
                    <MenubarMenu>
                        <NavLink to="/hiring">
                            <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base whitespace-nowrap text-white font-semibold">
                                Join Us
                            </MenubarTrigger>
                        </NavLink>
                    </MenubarMenu>
                    <MenubarMenu>
                        <NavLink to="/auth">
                            <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base text-white font-semibold">
                                Sign up
                            </MenubarTrigger>
                        </NavLink>
                    </MenubarMenu>
                </Menubar>
            </div>
            <div className="relative flex-1">
                <NavLink to='/'>
                    <figure className="w-[5rem] h-[5rem] lg:h-[10rem] lg:w-[10rem] absolute bg-primary rounded-full top-[-2.3rem] lg:top-[-6rem] left-1/2 transform -translate-x-1/2 z-40">
                        <img src="/assets/images/logo.png" alt="mentoonsLogo" className="h-full w-full object-contain lg:mt-4" />
                    </figure>
                </NavLink>
            </div>
            <div className="flex-1 flex justify-end lg:justify-start">
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
                    className={`${menuOpen ? "flex" : "hidden"} z-10 lg:flex flex-col lg:flex-row items-center justify-between bg-[#f0ebe5] lg:bg-transparent border-none text-[#989ba2] lg:text-white text-base lg:static absolute top-12 right-0 w-full lg:w-auto p-4 lg:p-0 h-80`}
                >
                  <MenubarMenu>
                        <NavLink to="/mentoons-comics">
                            <MenubarTrigger className="cursor-pointer lg:hover:text-white lg:hover:bg-red-500 h-[2.5rem] lg:h-[4.5rem] px-6 text-base font-semibold">
                                Comics
                            </MenubarTrigger>
                        </NavLink>
                    </MenubarMenu>
                    <MenubarMenu>
                        <NavLink to="/mentoons-podcast">
                            <MenubarTrigger className="cursor-pointer lg:hover:text-white lg:hover:bg-red-500 h-[2.5rem] lg:h-[4.5rem] px-6 text-base font-semibold">
                                Podcast
                            </MenubarTrigger>
                        </NavLink>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer lg:hover:text-white lg:hover:bg-red-500 h-[2.5rem] lg:h-[4.5rem] px-6 text-base whitespace-nowrap font-semibold">
                            Audio Comics
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarSub>
                                <MenubarSubTrigger>Age Groups</MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem
                                        onClick={() =>
                                            navigate(
                                                "/mentoons-comics/audio-comics?filter=groupSmall"
                                            )
                                        }
                                    >
                                        Age 6 - 12
                                    </MenubarItem>
                                    <MenubarItem
                                        onClick={() =>
                                            navigate(
                                                "/mentoons-comics/audio-comics?filter=groupMedium"
                                            )
                                        }
                                    >
                                        Age 13 - 19
                                    </MenubarItem>
                                    <MenubarItem
                                        onClick={() =>
                                            navigate("/mentoons-comics/audio-comics?filter=groupLarge")
                                        }
                                    >
                                        Age 20+
                                    </MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>
                            <MenubarSub>
                                <MenubarItem
                                    onClick={() =>
                                        navigate("/mentoons-comics/audio-comics?filter=groupLarge")
                                    }
                                >
                                    Family
                                </MenubarItem>
                            </MenubarSub>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer lg:hover:text-white lg:hover:bg-red-500 h-[2.5rem] lg:h-[4.5rem] px-6 text-base font-semibold">
                            Workshops
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem
                                onClick={() => navigate("/mentoons-workshops?workshop=buddy")}
                            >
                                Buddy Camp (Age 6 - 12)
                            </MenubarItem>
                            <MenubarItem
                                onClick={() => navigate("/mentoons-workshops?workshop=teen")}
                            >
                                Teen Camp (Age 13 - 15)
                            </MenubarItem>
                            <MenubarItem
                                onClick={() => navigate("/mentoons-workshops?workshop=family")}
                            >
                                Family Camp (Age 20+)
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <NavLink to="/hiring">
                            <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base whitespace-nowrap text-white font-semibold lg:hidden">
                                Join Us
                            </MenubarTrigger>
                        </NavLink>
                    </MenubarMenu>

                    {/* Profile Icon and Submenu */}
                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer lg:hover:text-white lg:hover:bg-red-500 h-[2.5rem] lg:h-[4.5rem] px-6 text-base font-semibold flex items-center">
                            <FaUserCircle className="text-2xl lg:text-3xl mr-2" />
                            <span className="hidden lg:block">Profile</span>
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem onClick={() => navigate("/profile")}>
                                My Profile
                            </MenubarItem>
                            <MenubarItem onClick={handleLogout}>
                                Logout
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </div>
    );
};

export default Header;
