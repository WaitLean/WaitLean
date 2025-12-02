"use client";

import PageComponent from "@/components/layouts/page-component";
import { cn } from "@/lib/utils";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Alert, Button } from "@heroui/react";
import Link from "next/link";

const dashboardTasks = [
  {
    id: 1,
    icon: PlusCircleIcon,
    title: "Create new waitlist",
    description: "Select a plan to start collecting signups.",
    href: "/app/launch/waitlist",
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

        <div className="flex flex-col my-4">
          <h2 className="text-base">No active waitlist</h2>
          <h4 className="text-muted-foreground">
            Below are some tasks to get you started.
          </h4>
        </div>
      </PageComponent>
      <hr />

      <PageComponent className="flex flex-col">
        {dashboardTasks.map((task, index) => (
          <Link key={task.id} href={task.href}>
            <div
              className={`flex items-center gap-4 ${index === 0 ? "pb-4" : "py-4"}`}
            >
              <div
                className={cn(
                  "size-8 rounded-md bg-default flex items-center justify-center",
                  index == 0 && "!bg-primary-200"
                )}
              >
                <task.icon className="size-4" />
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
