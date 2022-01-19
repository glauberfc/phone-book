import { useForm } from "react-hook-form"
import { useContacts } from "../contexts/contacts-context"

export default function SearchForm() {
  const { register, handleSubmit, reset } = useForm()
  const { filterContacts } = useContacts()

  function onSubmit() {
    return undefined
  }

  function resetForm() {
    reset({ searchTerm: undefined })
    filterContacts(undefined)
  }

  return (
    <form
      id="search-form"
      className="flex justify-between items-center h-12"
      onSubmit={handleSubmit(onSubmit)}
      onChange={(event) => {
        filterContacts(event.target.value)
      }}
    >
      <input
        className="w-full h-full mr-2 bg-gray-100 text-base border-gray-300 "
        type="text"
        placeholder="Search by name"
        {...register("searchTerm")}
      />
      <button
        type="reset"
        className="button h-full py-3 px-5 bg-gray-300 hover:bg-gray-400 active:bg-gray-400"
        onClick={resetForm}
      >
        Clear
      </button>
    </form>
  )
}
