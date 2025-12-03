import { create } from "zustand";
import { defaultNavItems, NavItemsI } from "./sidebar.constants";

interface SidebarStateI {
  navItems?: NavItemsI | null;
  children?: React.ReactNode | null;
  setNavItems: (navItems: NavItemsI | null) => void;
  setChildren: (children: React.ReactNode | null) => void;
}

const useSidebarStore = create<SidebarStateI>((set) => ({
  navItems: defaultNavItems,
  setNavItems: (navItems) => {
    set({ navItems });
  },
  setChildren: (children) => {
    set({ children });
  },
}));

export default useSidebarStore;
