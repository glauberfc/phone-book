import { createContext, useContext, useState } from "react"
import { DEFAULT_CONTACTS } from "../constants"

const ContactsContext = createContext()

function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState(DEFAULT_CONTACTS)
  const [filteredContacts, setFilteredContacts] = useState(DEFAULT_CONTACTS)

  function addNewContact(newContact) {
    setContacts([...contacts, newContact])
  }

  function filterContacts(query) {
    if (!!query) {
      return setFilteredContacts(
        contacts.filter(
          (contact) =>
            contact.firstName.toLowerCase().includes(query.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(query.toLowerCase()) ||
            contact.phoneNumber.toLowerCase().includes(query.toLowerCase()),
        ),
      )
    }

    return setFilteredContacts(undefined)
  }

  return (
    <ContactsContext.Provider
      value={{ contacts, addNewContact, filteredContacts, filterContacts }}
    >
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
