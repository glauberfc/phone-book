import { createContext, useContext, useState } from "react"
import { DEFAULT_CONTACTS } from "../constants"

const ContactsContext = createContext()

function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState(DEFAULT_CONTACTS)

  function addNewContact(newContact) {
    setContacts([...contacts, newContact])
  }

  return (
    <ContactsContext.Provider value={{ contacts, addNewContact }}>
      {children}
    </ContactsContext.Provider>
  )
}

function useContacts() {
  const context = useContext(ContactsContext)

  if (context === undefined) {
    throw new Error("useContacts must be used within a ContactsProvider")
  }

  return context
}

export { ContactsProvider, useContacts }
