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

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Certificate</DialogTitle>
        </DialogHeader>

        <Image
          src={certificate}   
          width={600}
          height={400}        
          alt="certificate"
          className="rounded-md"
        />
      </DialogContent>
    </Dialog>
  )
}
