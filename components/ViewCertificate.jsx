import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Eye } from "lucide-react"
import Image from "next/image"

export function ViewCertificate({ certificate }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <Eye size={20} strokeWidth={1.25} className="text-muted-foreground" />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[800px] w-[95vw]">
        <DialogHeader>
          <DialogTitle>Certificate</DialogTitle>
        </DialogHeader>

        <div className="relative w-full h-[400px] sm:h-[600px]">
          <Image
            src={certificate}   
            fill
            alt="certificate"
            className="rounded-md object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
