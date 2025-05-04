"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TypeSelector() {
  const router = useRouter();
  const [type, setType] = useState("content");

  const handleTypeSelect = (value: string) => {
    setType(value);
    const params = new URLSearchParams(window.location.search);
    params.set("type", value);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Select onValueChange={handleTypeSelect} value={type}>
      <SelectTrigger className="w-[100%] md:w-[50%] lg:w-[25%] mb-4 text-white border-[#494949] bg-[#0a0a0a] hover:bg-[#101010]">
        <SelectValue placeholder="Select a Candidate Type" />
      </SelectTrigger>
      <SelectContent className="bg-[#0a0a0a] text-white">
        <SelectGroup>
          <SelectLabel className="text-white border-b border-[#494949] pb-2 mb-2">
            Candidate Type
          </SelectLabel>
          <SelectItem value="content" className="text-white hover:bg-gray-800">
            Content
          </SelectItem>
          <SelectItem value="design" className="text-white hover:bg-gray-800">
            Design
          </SelectItem>
          <SelectItem
            value="marketing"
            className="text-white hover:bg-gray-800"
          >
            Marketing
          </SelectItem>
          <SelectItem
            value="programming"
            className="text-white hover:bg-gray-800"
          >
            Programming
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
