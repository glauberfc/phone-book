import { useContacts } from "../contexts/contacts-context"

export default function ContactsList() {
  const { contacts } = useContacts()

  return (
    <table className="table-auto w-full mt-6">
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
        {contacts.map((item, index) => (
          <tr key={index}>
            <td className="w-1/3 p-2 whitespace-nowrap">{item.firstName}</td>
            <td className="w-1/3 p-2 whitespace-nowrap">{item.lastName}</td>
            <td className="w-1/3 p-2 whitespace-nowrap">{item.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
