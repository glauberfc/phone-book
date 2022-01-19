import Head from "next/head"
import ContactsList from "../components/ContactsList"
import Footer from "../components/Footer"
import Header from "../components/Header"
import NewContactModal from "../components/NewContactModal"
import SearchForm from "../components/SearchForm"
import { APP_NAME } from "../constants"

export default function Home() {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={`${APP_NAME | Home}`} />
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
