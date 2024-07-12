import { ToolList } from "@/components/AppPages/Home/ToolList";

export default async function AppHome() {
    return (
        <main className="min-h-[75svh] items-center flex justify-center">
            <ToolList />
        </main>
    );
}