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
      <SelectTrigger className="w-[100%] md:w-[50%] lg:w-[25%] mb-4 text-white border-[#494949]">
        <SelectValue placeholder="Select a Candidate Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Candidate Type</SelectLabel>
          <SelectItem value="content">Content</SelectItem>
          <SelectItem value="design">Design</SelectItem>
          <SelectItem value="marketing">Marketing</SelectItem>
          <SelectItem value="programming">Programming</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
