import Sidebar from "@/components/Sidebar/Sidebar";
import Notes from "@/components/Notes";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex w-full my-5">
      <Sidebar />

      <div className="ml-[300px] w-ful">{children}</div>
      <Notes />
    </main>
  );
}
