"use client";

import PageComponent from "@/components/layouts/root-layout";
import { cn } from "@/lib/utils";
import {
  CodeBracketIcon,
  PencilSquareIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Alert, Button } from "@heroui/react";
import Link from "next/link";

const dashboardTasks = [
  {
    id: 1,
    icon: PlusIcon,
    title: "Create a new waitlist",
    description: "Select a plan to start collecting signups.",
    href: "/dashboard/add/waitlist",
  },
  {
    id: 2,
    icon: PencilSquareIcon,
    title: "Check out our no-code guides",
    description:
      "Want to add your waitlist in HTML, React, Squarespace, Typedream, Webflow, Weebly or Wix? Check out our no-code guides.",
    href: "/docs",
  },
  {
    id: 3,
    icon: CodeBracketIcon,
    title: "Check out our API Documentation",
    description:
      "Want full control over your waitlist? Check out our API documentation.",
    href: "/docs",
  },
];

export default function Dashboard() {
  return (
    <>
      <PageComponent className="!py-0 text-sm">
        <div className="flex flex-col gap-4">
          <Alert
            color="primary"
            title={"Trial expired"}
            description={
              "Your trial has expired. Upgrade to continue accessing dashboard features. Waiter signups will continue to work normally."
            }
            variant="faded"
            isClosable
            endContent={
              <Button size="sm" className="mx-4" variant="faded">
                Upgrade now
              </Button>
            }
            className="mt-6"
          ></Alert>
        </div>

        <div className="flex flex-col my-10">
          <h2 className="text-lg">No active waitlist</h2>
          <h4 className="text-muted-foreground">
            Below are some tasks to get you started.
          </h4>
        </div>
      </PageComponent>
      <hr />

      <PageComponent className="flex flex-col">
        {dashboardTasks.map((task, index) => (
          <Link key={task.id} href={task.href}>
            <div className={`flex gap-4 ${index === 0 ? "pb-4" : "py-4"}`}>
              <div
                className={cn(
                  "size-10 rounded-md bg-default flex items-center justify-center",
                  index == 0 && "!bg-primary-200"
                )}
              >
                <task.icon className="size-5" />
              </div>
              <div className="flex flex-col">
                <p>{task.title}</p>
                <p className="text-muted-foreground">{task.description}</p>
              </div>
            </div>
            {index < dashboardTasks.length - 1 && <hr />}
          </Link>
        ))}
      </PageComponent>
    </>
  );
}
