"use client";
import PageComponent from "@/components/layouts/page-component";
import Type from "@/components/type";
import {
  FunnelIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";

import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@heroui/react";
import Link from "next/link";

export default function WaitListPage() {
  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];

  return (
    <PageComponent>
      <Type variant="h1" className="mb-4 font-medium">
        WaitList
      </Type>

      <Table
        aria-label="Waitlist Table"
        radius="sm"
        selectionMode="single"
        topContentPlacement="outside"
        bottomContentPlacement="inside"
        isVirtualized
        removeWrapper
        topContent={
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Input
                  placeholder="Search by name..."
                  variant="bordered"
                  startContent={
                    <MagnifyingGlassIcon className="text-default-300 size-5" />
                  }
                  size="sm"
                  isClearable
                  classNames={{
                    base: "max-w-sm",
                    inputWrapper: "border-1",
                  }}
                />

                <Button
                  size="sm"
                  variant="light"
                  className="min-w-max border border-dashed"
                >
                  <FunnelIcon className="size-4" />
                </Button>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="light" className="min-w-max">
                  <ViewColumnsIcon className="size-4" />
                </Button>
                <Button size="sm" variant="faded" className="min-w-max">
                  <ListBulletIcon className="size-4" />
                </Button>

                <Link href={"/app/launch/waitlist"}>
                  <Button
                    className="bg-primary hover:border-red-500 border-transparent border transition-none"
                    startContent={<PlusIcon className="size-5" />}
                    size="sm"
                    variant="shadow"
                  >
                    New Launch
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-default-400 text-small">
                Total 10 users
              </span>
              <label className="flex items-center text-default-400 text-small">
                Rows per page:
                <select className="bg-transparent outline-solid outline-transparent text-default-400 text-small">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </label>
            </div>
          </div>
        }
      >
        <TableHeader columns={columns}>
          {(column: any) => (
            <TableColumn allowsSorting allowsResizing key={column.key}>
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows} emptyContent={"No rows to display."}>
          {(item: any) => (
            <TableRow key={item.key}>
              {(columnKey: any) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </PageComponent>
  );
}
