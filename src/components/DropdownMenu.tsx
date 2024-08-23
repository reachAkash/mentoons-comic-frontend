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
        <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base">
          Audio Comics
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Age Groups</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem
                onClick={() => navigate("/comics-list?filter=groupSmall")}
              >
                6 - 12
              </MenubarItem>
              <MenubarItem
                onClick={() => navigate("/comics-list?filter=groupMedium")}
              >
                13 - 19
              </MenubarItem>
              <MenubarItem
                onClick={() => navigate("/comics-list?filter=groupLarge")}
              >
                20 +{" "}
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Elders</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem
                onClick={() => navigate("/comics-list?filter=groupXLarge")}
              >
                Parents
              </MenubarItem>
              <MenubarItem
                onClick={() => navigate("/comics-list?filter=groupXLarge")}
              >
                Guardians
              </MenubarItem>
              <MenubarItem
                onClick={() => navigate("/comics-list?filter=groupXLarge")}
              >
                Carers
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          onClick={() => navigate("/mentoons-workshops")}
          className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base"
        >
          Workshops
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>How to draw characters (6 - 12)</MenubarItem>
          <MenubarItem>How to make your own comic (13 - 15)</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <div className="invisible">Akash</div>
      </MenubarMenu>
    </Menubar>
  );
};

export default DropdownMenu;
