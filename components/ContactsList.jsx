import { useContacts } from "../contexts/contacts-context"

export default function ContactsList() {
  const { contacts, filteredContacts } = useContacts()
  const contactsList = filteredContacts || contacts

  return (
    <table className="table-fixed w-full mt-6">
      <thead className="text-sm font-semibold uppercase text-gray-500 bg-gray-50">
        <tr>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">First name</div>
          </th>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">Last name</div>
          </th>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">Phone</div>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 text-gray-800 font-medium">
        {contactsList.map((item, index) => (
          <tr key={index}>
            <td className="w-1/2 p-2 break-all">{item.firstName}</td>
            <td className="w-1/3 p-2 break-all">{item.lastName}</td>
            <td className="w-1/3 p-2 break-words">{item.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
