import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; //conditional classname rendering
export default function Home() {
  return (
    <div className="flex flex-col">
          <div className="text-3xl font-bold text-indigo-500">
            Protect Route
          </div>
    <Button variant={"destructive"}>Click me</Button>
    </div>

  );
}
