/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AL7ncr2BUbO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { useRouter } from "next/router";
import { JSX, SVGProps } from "react"

export default function Component() {
    const router = useRouter();

  const navigateToChat = () => {
    router.push('/chat');
  };
    
  return (
    <div className="flex flex-col h-screen bg-background text-card-foreground">
      <div className="flex-1 flex flex-col items-center justify-center gap-6 p-4">
        <div className="w-full h-16 bg-muted rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-pulse" />
        </div>
        <div className="text-2xl font-bold">Calling...</div>
      </div>
      <div className="border-t border-muted p-4">
        <Button onClick={navigateToChat} variant="destructive" className="w-full">
          <PhoneCallIcon className="h-5 w-5 mr-2" />
          End Call
        </Button>
      </div>
    </div>
  )
}

function PhoneCallIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M14.05 2a9 9 0 0 1 8 7.94" />
      <path d="M14.05 6A5 5 0 0 1 18 10" />
    </svg>
  )
}