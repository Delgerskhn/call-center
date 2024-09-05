"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SVGProps, useState } from "react";

export default function Component() {
  const router = useRouter();
  const [number, setNumber] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="bg-card rounded-lg shadow-lg p-6">
        <div className="mb-6 flex justify-stretch text-3xl bg-foreground/5 rounded-md p-1">
          <div className="flex justify-center w-full">{number}_</div>
          <div className="flex">
            <button
              onClick={() => setNumber("")}
              className="rounded-full bg-card-foreground/10 px-4 text-sm"
            >
              x
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => setNumber(`${number}` + num)}
              className="bg-card-foreground text-card rounded-full w-12 h-12 flex items-center justify-center text-2xl font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {num}
            </button>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <button
            key={0}
            onClick={() => setNumber(`${number}` + 0)}
            className="bg-card-foreground text-card rounded-full w-12 h-12 flex items-center justify-center text-2xl font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {0}
          </button>
        </div>
        <div className="mt-6 flex justify-center">
          <Link
            href={{
              pathname: "/call",
              query: {
                number: number,
              },
            }}
            className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary/90 transition-colors"
          >
            <PhoneIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
