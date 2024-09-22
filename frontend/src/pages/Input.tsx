import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 bg-card rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-card-foreground text-center">Enter Unique Code</h2>
        <form className="space-y-6">
          <div>
            <Input
              type="text"
              placeholder="Enter your unique code"
              className="w-full text-center"
            />
          </div>
          <Button type="submit" className="w-full">
            Submit Code
          </Button>
        </form>
      </div>
    </div>
  )
}