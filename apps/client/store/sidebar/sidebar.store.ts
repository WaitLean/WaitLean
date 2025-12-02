import { create } from "zustand";
import { defaultNavItems, NavItemsType } from "./sidebar.constants";

interface SidebarStateI {
  navItems: NavItemsType;
  setNavItems: (navItems: NavItemsType) => void;
}

const useSidebarStore = create<SidebarStateI>((set) => ({
  navItems: defaultNavItems,
  setNavItems: (navItems) => {
    set({ navItems });
  },
}));

export default useSidebarStore;
