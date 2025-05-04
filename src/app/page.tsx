import SelectedCandidatesList from "@/components/candidates/SelectedCandidatesList";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center text-white">
      <header className="text-2xl font-bold mb-14 p-8">
        Young Webmaster Camp 20
      </header>
      <SelectedCandidatesList />
    </div>
  );
}
