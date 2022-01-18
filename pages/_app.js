import { ContactsProvider } from "../contexts/contacts-context"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <ContactsProvider>
      <Component {...pageProps} />
    </ContactsProvider>
  )
}

export default MyApp
