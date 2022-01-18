import { ToastContainer } from "react-toastify"
import { ContactsProvider } from "../contexts/contacts-context"
import "../styles/globals.css"
import "react-toastify/dist/ReactToastify.min.css"

function MyApp({ Component, pageProps }) {
  return (
    <ContactsProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </ContactsProvider>
  )
}

export default MyApp
