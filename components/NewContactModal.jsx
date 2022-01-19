import Link from "next/link"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useContacts } from "../contexts/contacts-context"
import { XIcon } from "@heroicons/react/solid"
import Modal from "react-modal"

Modal.setAppElement("#__next")

export default function NewContactModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    reValidateMode: "onSubmit",
    mode: "onSubmit",
  })
  const requiredFieldMessage = "This field is required"
  const { addNewContact } = useContacts()
  const router = useRouter()

  function onSubmit(data) {
    addNewContact(data)
    reset()
    toast.success("New contact added successfully", {
      position: "bottom-right",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    })
    router.push("/")
  }

  function closeModal() {
    reset()
    router.push("/")
  }

  return (
    <Modal
      isOpen={!!router.query["new-contact"]}
      onRequestClose={closeModal}
      contentLabel="Post modal"
      overlayClassName="absolute w-screen top-0 h-screen z-10 flex justify-center items-center bg-gray-900/75"
      className="w-full max-w-screen-md h-screen md:h-auto p-5 border md:my-10 border-gray-200 shadow bg-white md:rounded-lg"
    >
      <div className="mx-auto">
        <div className="flex justify-between pb-3 header-border">
          <h2 className="text-xl font-bold">Add a new contact</h2>
          <Link href="/">
            <a>
              <XIcon className="h-8 w-8 text-red-500" onClick={closeModal} />
            </a>
          </Link>
        </div>

        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            type="text"
            {...register("firstName", { required: requiredFieldMessage })}
          />
          {errors.firstName && (
            <span className="error-message">{errors.firstName.message}</span>
          )}
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            type="text"
            {...register("lastName", { required: requiredFieldMessage })}
          />
          {errors.lastName && (
            <span className="error-message">{errors.lastName.message}</span>
          )}
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            id="phoneNumber"
            type="tel"
            maxLength={15}
            {...register("phoneNumber", {
              required: requiredFieldMessage,
              onChange: (e) => {
                e.target.value = e.target.value.replace(/[^()\s\d+]/g, "")
              },
            })}
          />
          {errors.phoneNumber && (
            <span className="error-message">{errors.phoneNumber.message}</span>
          )}
          <button
            type="submit"
            className="block w-full mt-4 p-4 button button-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </Modal>
  )
}
