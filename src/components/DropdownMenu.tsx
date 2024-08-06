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

const DropdownMenu = () => {
  return (
    <Menubar className="w-[32rem] flex items-center justify-between bg-primary border-none text-white text-base">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer hover:text-white hover:bg-red-500 h-[4.5rem] px-6 text-base">
          Comics
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Morals</MenubarItem>
          <MenubarItem>Character</MenubarItem>
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
              <MenubarItem>6 - 12</MenubarItem>
              <MenubarItem>13 - 19</MenubarItem>
              <MenubarItem>20 + </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Elders</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Parents</MenubarItem>
              <MenubarItem>Guardians</MenubarItem>
              <MenubarItem>Carers</MenubarItem>
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
