"use client";

import {
  LoungeResponse,
  LoungeResponseDataObject
} from "@/data/api/documentation";
import useAllLoungesTable from "@/hooks/useAllLoungesTable";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/react";
import { flexRender } from "@tanstack/react-table";

type AllLoungesTableProps = {
  lounges: LoungeResponseDataObject[];
};

const AllLoungesTable = ({ lounges }: AllLoungesTableProps) => {
  const { table } = useAllLoungesTable(lounges);
  const headerGroup = table.getHeaderGroups()[0];

  return (
    <Table>
      <TableHeader>
        {headerGroup.headers.map((header) => (
          <TableColumn key={header.id}>
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
          </TableColumn>
        ))}
      </TableHeader>

      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={table.getAllColumns().length}
              className="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default AllLoungesTable;
