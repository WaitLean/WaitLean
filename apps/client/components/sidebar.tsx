"use client";

import { cn } from "@/lib/utils";
import {
  BookOpenIcon,
  BuildingOfficeIcon,
  HomeIcon,
  PlusIcon,
  UserIcon,
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
  User,
} from "@heroui/react";

const navItems = [
  {
    href: "/dashboard",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "/organization",
    label: "My Organization",
    icon: BuildingOfficeIcon,
  },
  {
    href: "/account",
    label: "My account",
    icon: UserIcon,
  },
  {
    href: "/dashboard/add/waitlist",
    label: "New Waitlist",
    icon: PlusIcon,
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
                <div className="flex w-full px-4 h-[45px] items-center gap-2 cursor-pointer hover:bg-default/60">
                  <div className="size-6 flex items-center justify-center bg-secondary rounded-full text-[9px] font-light text-foreground/80">
                    AP
                  </div>
                  <div className="flex flex-col text-[12px] leading-3.5 font-light">
                    <p>Andre Ponce</p>
                    <p className="text-muted-foreground">asponceg@gmail.com</p>
                  </div>
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dropdown menu with description">
                <DropdownItem
                  key="profile"
                  isReadOnly
                  className="h-14 gap-2 opacity-100"
                >
                  <User
                    avatarProps={{
                      size: "sm",
                      className: "hidden",
                    }}
                    classNames={{
                      name: "text-default-600",
                      description: "text-default-500",
                    }}
                    description="@asponceg@gmail.com"
                    name="Andre Ponce"
                  />
                </DropdownItem>
                <DropdownSection title="User configuration ">
                  <DropdownItem className="!transition-none" key="settings">
                    Settings
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
