import { useState } from "react"
import { defaultContacts } from "../constants"

export default function ContactsList() {
  const [contacts, setContacts] = useState(defaultContacts)

  return (
    <table className="table-auto w-full mt-6">
      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
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
      <tbody className="text-sm divide-y divide-gray-100">
        {contacts.map((item, index) => (
          <tr key={index}>
            <td className="p-2 whitespace-nowrap">
              <div className="font-medium text-gray-800">{item.firstName}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="font-medium text-left">{item.lastName}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left font-medium text-green-500">
                {item.phone}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
