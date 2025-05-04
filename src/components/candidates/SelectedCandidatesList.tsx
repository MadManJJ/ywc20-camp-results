"use client";
import { Candidates } from "@/data/candidates";
import { useState, useEffect, use } from "react";
import { MoreHorizontal } from "lucide-react";
import getCandidate from "@/lib/Candidates/getCandidates";
import { CandidateType, Candidate } from "../../../interface";
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
  const [contentCandidates, setContentCandidates] = useState<Candidate[]>();
  const [designCandidates, setDesignCandidates] = useState();
  const [marketingCandidates, setMarketingCandidates] = useState();
  const [progCandidates, setProgCandidates] = useState();
  // const [candidateType, setCandidateType] = useState<CandidateType>(
  //   CandidateType.content
  // );

  const [currentCandidates, setCurrentCandidates] = useState<Candidate[]>();

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await getCandidate();
        setContentCandidates(data.content);
        setDesignCandidates(data.design);
        setMarketingCandidates(data.marketing);
        setProgCandidates(data.candidate);

        setCurrentCandidates(data.content);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <div className="border border-[#494949] rounded-md mb-10">
      <Table className="text-white">
        <TableHeader>
          <TableRow className="border-[#494949] hover:bg-white/10 bg-[#0f0f0f] w-full">
            <TableHead className=" text-gray-500 text-sm border-[#494949] pl-4">
              First Name
            </TableHead>
            <TableHead className="w-[30%] text-gray-500 text-sm pl-4">
              Last Name
            </TableHead>
            <TableHead className="w-[30%] text-gray-500 text-sm pl-4">
              Major
            </TableHead>
            <TableHead className="text-gray-500 text-sm pl-4"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentCandidates &&
            currentCandidates.map((candidate: Candidate) => (
              <TableRow
                key={candidate.interviewRefNo}
                className="border-[#494949] hover:bg-white/10 bg-[#0f0f0f]"
              >
                <TableCell className="font-medium text-white p-4 ">
                  {candidate.firstName}
                </TableCell>
                <TableCell className="text-white p-4">
                  {candidate.lastName}
                </TableCell>
                <TableCell className="text-white p-4">
                  {candidate.major}
                </TableCell>
                <TableCell className="text-white py-4 px-0">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
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
