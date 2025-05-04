import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[25%] mb-4 text-[#494949] border-[#494949]">
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
