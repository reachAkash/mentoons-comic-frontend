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
import { useNavigate } from "react-router-dom";

const DropdownMenu = () => {
  const navigate = useNavigate();
  return (
    <Menubar className="w-[32rem] flex items-center justify-between bg-primary border-none text-white text-base">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base">
          Comics
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => navigate("/comics-list?filter=morals")}>
            Morals
          </MenubarItem>
          <MenubarItem
            onClick={() => navigate("/comics-list?filter=character")}
          >
            Character
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base">
          Latest
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base">
          Audio Comics
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Age Groups</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem onClick={() => navigate("/comics-list?filter=6-12")}>
                6 - 12
              </MenubarItem>
              <MenubarItem
                onClick={() => navigate("/comics-list?filter=13-19")}
              >
                13 - 19
              </MenubarItem>
              <MenubarItem onClick={() => navigate("/comics-list?filter=20+")}>
                20 +{" "}
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Elders</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem
                onClick={() => navigate("/comics-list?filter=parents")}
              >
                Parents
              </MenubarItem>
              <MenubarItem
                onClick={() => navigate("/comics-list?filter=guardians")}
              >
                Guardians
              </MenubarItem>
              <MenubarItem
                onClick={() => navigate("/comics-list?filter=carers")}
              >
                Carers
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base">
          Workshops
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>How to draw characters (6 - 12)</MenubarItem>
          <MenubarItem>How to make your own comic (13 - 15)</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default DropdownMenu;
