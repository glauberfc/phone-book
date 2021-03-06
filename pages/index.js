import dynamic from "next/dynamic"
import Head from "next/head"
import ContactsList from "../components/ContactsList"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SearchForm from "../components/SearchForm"
import { APP_NAME } from "../constants"

const NewContactModal = dynamic(() => import("../components/NewContactModal"))

export default function Home() {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content="Save your favorite contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-screen">
        <NewContactModal />
        <Header />
        <main className="w-full max-w-screen-xl mx-auto mb-auto p-3">
          <SearchForm />
          <ContactsList />
        </main>
        <Footer />
      </div>
    </>
  )
}
