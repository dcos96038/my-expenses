"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Expense } from "@/models/expense";

import { Button } from "../ui/button";
import { DataTableColumnHeader } from "./table-column-header";

export const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: (props) => {
      const parsedAmount = props.row.original.amount.toLocaleString("es-ar", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 2,
      });

      return <span>{parsedAmount}</span>;
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
  },
];
