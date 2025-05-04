import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TypeSelector() {
  return (
    <Select>
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
