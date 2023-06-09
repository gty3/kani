import Image from "next/image"
import Link from "next/link"
import ChatBubble from "../favicon.ico"

export default function Header() {
  return (
    <div className="flex justify-between my-6">
      <Link href="/" className=""><Image className="" src={ChatBubble} width={18} alt="logo" /></Link>
      <div className="space-x-8 text-end">
        <Link href="/blog" className="">
          Blog
        </Link>
        <button className="">About</button>
      </div>
    </div>
  )
}
