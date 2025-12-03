import {
  ChartBarIcon,
  CursorArrowRippleIcon,
  GlobeAltIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";

export const defaultNavItems = [
  {
    href: "/app/dashboard",
    label: "Dashboard",
    icon: ChartBarIcon,
  },
  {
    href: "/app/google-search",
    label: "Google Search",
    icon: KeyIcon,
  },
  {
    href: "/app/landing-page",
    label: "Landing page",
    icon: GlobeAltIcon,
  },
  {
    href: "/app/waitlist",
    label: "WaitList",
    icon: CursorArrowRippleIcon,
  },
];

type navItemsType = typeof defaultNavItems;

export interface NavItemsI extends navItemsType {
  icon?: React.ForwardRefExoticComponent<any>;
}
