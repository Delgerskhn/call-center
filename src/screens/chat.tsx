/**
 * v0 by Vercel.
 * @see https://v0.dev/t/949Kd2ZDtqx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex items-center gap-4 px-4 py-3 bg-card shadow">
        <Avatar className="w-8 h-8 border">
          <AvatarImage src="/placeholder-user.jpg" alt="Chatbot" />
          <AvatarFallback>CB</AvatarFallback>
        </Avatar>
        <div className="text-sm font-medium">Chatbot</div>
      </header>
      <div className="flex-1 overflow-auto p-4 space-y-4">
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-3 max-w-[70%]">
            <p>Hi there! Can you explain what causes airplane turbulence?</p>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
          <div className="bg-primary rounded-lg p-3 max-w-[70%] text-primary-foreground">
            <p>
              Airplane turbulence happens when the plane encounters pockets of air that are moving differently. It's
              like sailing a boat on choppy water - the air pockets can make the plane feel like it's bouncing or
              shaking a bit. It's completely normal and usually not dangerous at all.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-3 max-w-[70%]">
            <p>I see, that makes sense. Thanks for the explanation!</p>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
          <div className="bg-primary rounded-lg p-3 max-w-[70%] text-primary-foreground">
            <p>You're welcome! Let me know if you have any other questions.</p>
          </div>
        </div>
      </div>
      <div className="bg-card p-4 flex gap-2">
        <Textarea
          placeholder="Type your message..."
          className="flex-1 rounded-lg border border-input p-2 focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <Button type="submit" className="rounded-lg px-4 bg-primary text-primary-foreground">
          Send
        </Button>
      </div>
    </div>
  )
}