import SelectedCandidatesList from "@/components/candidates/SelectedCandidatesList";
import TypeSelector from "@/components/candidates/TypeSelector";
import FilterBanner from "@/components/candidates/FilterBanner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="text-2xl font-bold mb-14 p-8 text-white">
        Young Webmaster Camp 20
      </header>
      <div className="max-w-[95%] sm:max-w-[80%] w-full">
        <TypeSelector />
        <FilterBanner />
        <SelectedCandidatesList />
      </div>
    </div>
  );
}
