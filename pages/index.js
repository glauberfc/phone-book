import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import Modal from "react-modal"
import ContactsList from "../components/ContactsList"
import Footer from "../components/Footer"
import NewContactModal from "../components/NewContactModal"
import SearchForm from "../components/SearchForm"

Modal.setAppElement("#__next")

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Modal
        isOpen={!!router.query["new-contact"]}
        onRequestClose={() => router.push("/")}
        contentLabel="Post modal"
        overlayClassName="absolute w-screen top-0 h-screen z-10 flex justify-center items-center bg-gray-900/75"
        className="w-full max-w-screen-md h-screen md:h-auto p-5 border md:my-10 border-gray-200 shadow bg-white md:rounded-lg"
      >
        <NewContactModal />
      </Modal>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center p-4 header-border">
        <h1 className="text-2xl font-bold text-gray-800">Phone Book</h1>
        <Link href="/?new-contact=true" as="/new-contact" passHref>
          <a className="button button-primary p-3">Add a new contact</a>
        </Link>
      </header>

      <main className="w-full max-w-screen-xl mx-auto">
        <div className="p-3">
          <SearchForm />
          <ContactsList />
        </div>
      </main>

      <Footer />
    </>
  )
}
