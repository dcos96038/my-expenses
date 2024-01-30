"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Expense } from "@/models/expense";

export const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "amount",
    header: "Amount",
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
    header: "Category",
  },
];
