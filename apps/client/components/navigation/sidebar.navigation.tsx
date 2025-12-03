"use client";

import { defaultNavItems, NavItemsI } from "@/store/sidebar/sidebar.constants";
import useSidebarStore from "@/store/sidebar/sidebar.store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SidebarNavigation({
  children,
  navItems,
}: {
  children?: React.ReactNode;
  navItems?: NavItemsI;
}) {
  const { setNavItems, setChildren } = useSidebarStore();
  const pathname = usePathname();

  // Reset values
  useEffect(() => {
    return () => {
      console.log("Resetting sidebar navigation store");

      setNavItems(defaultNavItems);
      setChildren(null);
    };
  }, [pathname]);

  useEffect(() => {
    setChildren(children);
  }, [children, setChildren]);

  useEffect(() => {
    setNavItems(navItems || null);
  }, [navItems, setNavItems]);

  return null;
}
