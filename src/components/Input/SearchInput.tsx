"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export default function SearchInput({ name, q }: { name: string; q: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get(q) || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      if (query) {
        params.set(q, query);
      } else {
        params.delete(q);
      }
      router.replace(`?${params.toString()}`, { scroll: false });
    }, 100); // debounce for smoother updates

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <Input
      className="w-full md:w-[300px] text-white border border-[#494949]"
      placeholder={name}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
