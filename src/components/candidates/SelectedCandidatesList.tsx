"use client";
import { useState, useEffect } from "react";
import { MoreHorizontal } from "lucide-react";
import getCandidate from "@/lib/Candidates/getCandidates";
import { Candidate } from "../../../interface";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
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
  const router = useRouter();
  const searchParams = useSearchParams();

  const [contentCandidates, setContentCandidates] = useState<Candidate[]>();
  const [designCandidates, setDesignCandidates] = useState();
  const [marketingCandidates, setMarketingCandidates] = useState();
  const [progCandidates, setProgCandidates] = useState();
  const [loading, setLoading] = useState(true);

  const [currentCandidates, setCurrentCandidates] = useState<Candidate[]>();

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await getCandidate();
        setContentCandidates(data.content);
        setDesignCandidates(data.design);
        setMarketingCandidates(data.marketing);
        setProgCandidates(data.programming);

        setCurrentCandidates(data.content);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };
    const params = new URLSearchParams(window.location.search);
    params.set("type", "content");
    router.replace(`?${params.toString()}`, { scroll: false });

    fetchCandidates();
  }, []);

  useEffect(() => {
    const currentType = searchParams.get("type");
    const currentFirstname = searchParams.get("firstname");
    const currentLastname = searchParams.get("lastname");
    const currentInterviewRefNo = searchParams.get("interviewRefNo");

    const filteredCandidates = () => {
      var curentTypeCandidates: Candidate[] = [];
      if (currentType === "content") {
        curentTypeCandidates = contentCandidates || [];
      } else if (currentType === "design") {
        curentTypeCandidates = designCandidates || [];
      } else if (currentType === "marketing") {
        curentTypeCandidates = marketingCandidates || [];
      } else if (currentType === "programming") {
        curentTypeCandidates = progCandidates || [];
      }

      curentTypeCandidates = curentTypeCandidates.filter((candidate) => {
        // Check First Name
        if (
          currentFirstname &&
          !candidate.firstName
            .toLowerCase()
            .includes(currentFirstname.toLowerCase())
        ) {
          return false;
        }
        // Check Last Name
        if (
          currentLastname &&
          !candidate.lastName
            .toLowerCase()
            .includes(currentLastname.toLowerCase())
        ) {
          return false;
        }
        // Check Interview Ref No
        if (
          currentInterviewRefNo &&
          !candidate.interviewRefNo
            .toLowerCase()
            .includes(currentInterviewRefNo.toLowerCase())
        ) {
          return false;
        }
        return true;
      });
      return curentTypeCandidates;
    };
    const actualfilteredCandidates = filteredCandidates();
    setCurrentCandidates(actualfilteredCandidates);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex justify-center mt-40">
        <CircularProgress style={{ color: "var(--background2)" }} />
      </div>
    );
  }

  return (
    <div className="border border-[#494949] rounded-md mb-10">
      <Table className="text-white">
        <TableHeader>
          <TableRow className="border-[#494949] hover:bg-white/10 w-full">
            <TableHead className="w-[30%] text-gray-500 text-sm border-[#494949] pl-4 md:w-[20%]">
              Interview No
            </TableHead>
            <TableHead className="w-[30%] text-gray-500 text-sm pl-4 md:w-[20%]">
              First Name
            </TableHead>
            <TableHead className="w-[30%] text-gray-500 text-sm pl-4">
              Last Name
            </TableHead>
            <TableHead className="text-gray-500 text-sm pl-4 hidden md:table-cell">
              Major
            </TableHead>
            <TableHead className="text-gray-500 text-sm pl-4 float-right mr-2"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentCandidates &&
            currentCandidates.map((candidate: Candidate) => (
              <TableRow
                key={candidate.interviewRefNo}
                className="border-[#494949] hover:bg-white/10"
              >
                <TableCell className="font-medium text-white p-4 ">
                  {candidate.interviewRefNo}
                </TableCell>
                <TableCell className="font-medium text-white p-4 ">
                  {candidate.firstName}
                </TableCell>
                <TableCell className="text-white p-4">
                  {candidate.lastName}
                </TableCell>
                <TableCell className="text-white p-4 hidden md:table-cell">
                  {candidate.major}
                </TableCell>
                <TableCell className="text-white py-4 px-0 float-right mr-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0 text-white  "
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="bg-[#0a0a0a] text-white border border-[#494949] rounded-md shadow-lg"
                    >
                      <DropdownMenuLabel className="text-white border-b border-[#494949] pb-2 mb-2">
                        Actions
                      </DropdownMenuLabel>
                      <DropdownMenuItem className="text-white hover:bg-gray-800">
                        Copy Email
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="border-t border-[#494949]" />
                      <DropdownMenuItem className="text-white hover:bg-gray-800">
                        View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-white hover:bg-gray-800">
                        Remove
                      </DropdownMenuItem>
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
