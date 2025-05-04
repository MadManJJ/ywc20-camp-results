"use client";
import { Candidates } from "@/data/candidates";
import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const SelectedCandidatesList = () => {
  const [candidates, setCandidates] = useState(Candidates);

  return (
    <div className="border border-[#494949] rounded-md max-w-[100%] sm:max-w-[80%] w-full">
      <Table className="text-white">
        <TableHeader>
          <TableRow className="border-[#494949] hover:bg-white/10 bg-[#0f0f0f] w-full">
            <TableHead className=" text-gray-500 text-sm border-[#494949] pl-4">
              Email
            </TableHead>
            <TableHead className="w-[30%] text-gray-500 text-sm pl-4">
              First Name
            </TableHead>
            <TableHead className="w-[30%] text-gray-500 text-sm pl-4">
              Last Name
            </TableHead>
            <TableHead className="text-gray-500 text-sm pl-4"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {candidates.map((candidate) => (
            <TableRow
              key={candidate.id}
              className="border-[#494949] hover:bg-white/10 bg-[#0f0f0f]"
            >
              <TableCell className="font-medium text-white p-4 ">
                {candidate.email}
              </TableCell>
              <TableCell className="text-white p-4">
                {candidate.firstname}
              </TableCell>
              <TableCell className="text-white p-4">
                {candidate.lastname}
              </TableCell>
              <TableCell className="text-white py-4 px-0">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      {/* <span className="sr-only">Open menu</span>⋮ */}
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Copy Email</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Remove</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SelectedCandidatesList;
