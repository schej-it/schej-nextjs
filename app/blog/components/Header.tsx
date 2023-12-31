import MuiComponent from "@/components/MuiComponent"
import { Button } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import schejLogo from "@/public/schej_logo_with_text.png"

export default function Header() {
  return (
    <div className="flex items-center gap-4 mb-16">
      <Link href="/">
        <div className="relative w-[70px] sm:w-[90px]">
          <Image src={schejLogo} alt="Schej logo" />
        </div>
      </Link>
      <div className="flex-grow" />
      <Link href="/#how-it-works">
        <MuiComponent component={Button} variant="text">
          How it works
        </MuiComponent>
      </Link>
      <Link href="/blog">
        <MuiComponent component={Button} variant="text">
          Blog
        </MuiComponent>
      </Link>
      <Link href="/">
        <MuiComponent component={Button} variant="contained" color="primary">
          Sign in
        </MuiComponent>
      </Link>
    </div>
  )
}
