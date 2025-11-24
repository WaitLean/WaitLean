"use client";

import { cn } from "@/lib/utils";
import {
  BookOpenIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  GlobeAltIcon,
  KeyIcon,
  PlusCircleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@heroui/react";

const navItems = [
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
    href: "/app/create/waitlist",
    label: "New Waitlist",
    icon: PlusCircleIcon,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="min-w-[250px] border-r min-h-[100vh] bg-[#0A0A0A] backdrop-blur-md flex flex-col">
      <div className="p-4 pt-12 pb-6 flex gap-2 items-center">
        <Image
          alt="Banner image"
          src={"/icons/clock-v.png"}
          width={25}
          height={25}
          className="w-[25px]"
        />
        <h2 className="text-xl italic font-medium">WaitLean</h2>
      </div>

      <div className="flex flex-col justify-between flex-1">
        <ul className="text-sm space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-2 py-1.5 px-5 h-[45px] text-muted-foreground hover:bg-default/60",
                    {
                      "text-white": isActive,
                    }
                  )}
                >
                  <Icon
                    className={cn("size-5", isActive && "text-primary-400")}
                  />{" "}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="w-full">
          <hr />

          <div className="my-4">
            <Link
              href={"/docs"}
              target="_blank"
              className={clsx(
                "flex items-center gap-2 py-1.5 px-5 h-[45px] text-muted-foreground hover:bg-default/60 text-sm"
              )}
            >
              <BookOpenIcon className={cn("size-5")} /> Docs
            </Link>

            <Dropdown
              showArrow
              classNames={{
                base: "before:bg-default-200", // change arrow background
                content:
                  "py-1 px-1 border border-default-200 bg-linear-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
              }}
              radius="sm"
            >
              <DropdownTrigger>
                <div className="flex items-center justify-between px-4 h-[45px] hover:bg-default/60">
                  <div className="flex w-full items-center gap-2 cursor-pointer ">
                    <div className="size-6 flex items-center justify-center bg-default rounded-full text-[9px] font-light text-muted-foreground">
                      AP
                    </div>
                    <div className="flex flex-col text-[12px] leading-3.5 font-light">
                      <p>Andre Ponce</p>
                      <p className="text-muted-foreground">Free</p>
                    </div>
                  </div>

                  {/* <Button
                    size="sm"
                    variant="ghost"
                    radius="full"
                    className="px-5 text-muted-foreground h-[29px] py-2 text-[12px]"
                  >
                    Upgrade
                  </Button> */}
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dropdown menu with description">
                <DropdownSection title="User configuration" showDivider>
                  <DropdownItem
                    className="!transition-none"
                    key="theme"
                    isReadOnly
                    shortcut={"T"}
                    startContent={<SunIcon className="size-4" />}
                    // endContent={
                    //   <select
                    //     className="z-10 outline-solid outline-transparent w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                    //     id="theme"
                    //     name="theme"
                    //   >
                    //     <option>System</option>
                    //     <option>Dark</option>
                    //     <option>Light</option>
                    //   </select>
                    // }
                  >
                    Theme
                  </DropdownItem>

                  <DropdownItem
                    className="!transition-none"
                    key="language"
                    startContent={<GlobeAltIcon className="size-4" />}
                  >
                    Language
                  </DropdownItem>

                  <DropdownItem
                    className="!transition-none"
                    key="billing"
                    startContent={<CreditCardIcon className="size-4" />}
                  >
                    Billing
                  </DropdownItem>

                  <DropdownItem
                    className="!transition-none"
                    key="settings"
                    startContent={<Cog6ToothIcon className="size-4" />}
                  >
                    Settings
                  </DropdownItem>
                </DropdownSection>

                <DropdownSection>
                  <DropdownItem
                    key="help_and_feedback"
                    className="!transition-none"
                  >
                    Help & Feedback
                  </DropdownItem>

                  <DropdownItem className="!transition-none" key="logout">
                    Logout
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
