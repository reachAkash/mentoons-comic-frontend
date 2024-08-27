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
import { Link, useNavigate } from "react-router-dom";

const DropdownMenu = () => {
  const navigate = useNavigate();
  return (
    <Menubar className="w-[31rem] flex items-center justify-between bg-primary border-none text-white text-base">
      <MenubarMenu>
        <Link to="/mentoons-comics">
          <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base">
            Comics
          </MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base whitespace-nowrap">
          Audio Comics
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Age Groups</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem
                onClick={() =>
                  navigate("/mentoons-comics/audio-comics?filter=groupSmall")
                }
              >
                6 - 12
              </MenubarItem>
              <MenubarItem
                onClick={() =>
                  navigate("/mentoons-comics/audio-comics?filter=groupMedium")
                }
              >
                13 - 19
              </MenubarItem>
              <MenubarItem
                onClick={() =>
                  navigate("/mentoons-comics/audio-comics?filter=groupLarge")
                }
              >
                20 +{" "}
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
        <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base">
          Workshops
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem
            onClick={() => navigate("/mentoons-workshops?workshop=buddy")}
          >
            Buddy Camp (6 - 12)
          </MenubarItem>
          <MenubarItem
            onClick={() => navigate("/mentoons-workshops?workshop=teen")}
          >
            Teen Camp (13 - 15)
          </MenubarItem>
          <MenubarItem
            onClick={() => navigate("/mentoons-workshops?workshop=family")}
          >
            Family Camp (20+)
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base whitespace-nowrap">
          Contact Us
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <a href="tel:+919036033300">Call Us : +91 90360 33300</a>
          </MenubarItem>
          <MenubarItem>
            <a href="mailto:www.mentormahesh.com">
              Email Us : www.mentormahesh.com
            </a>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <div className="invisible">Akash</div>
      </MenubarMenu>
    </Menubar>
  );
};

export default DropdownMenu;
