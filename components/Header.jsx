import Link from "next/link"
import { APP_NAME } from "../constants"

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 header-border">
      <h1 className="text-2xl font-bold text-gray-800">{APP_NAME}</h1>
      <Link href="/?new-contact=true" as="/new-contact" passHref>
        <a id="add-new-contact" className="button button-primary p-3">
          Add a new contact
        </a>
      </Link>
    </header>
  )
}
