import Link from "next/link"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useContacts } from "../contexts/contacts-context"
import CloseIcon from "./CloseIcon"

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
  const { addNewContact } = useContacts()
  const router = useRouter()

  function onSubmit(data) {
    addNewContact(data)
    reset({
      firstName: "",
      lastName: "",
      phoneNumber: "",
    })
    toast.success("New contact added successfully", {
      position: "bottom-right",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    })
    router.push("/")
  }

  return (
    <div className="mx-auto">
      <div className="flex justify-between pb-3 header-border">
        <h2 className="text-xl font-bold">Add a new contact</h2>
        <Link href="/">
          <a>
            <CloseIcon />
          </a>
        </Link>
      </div>

      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          type="text"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <span className="error-message">This field is required</span>
        )}

        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          type="text"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <span className="error-message">This field is required</span>
        )}

        <label htmlFor="phoneNumber">Phone number</label>
        <input
          id="phoneNumber"
          type="tel"
          maxLength={14}
          {...register("phoneNumber", {
            required: true,
            pattern: /^\d+$/i,
            onChange: (e) => {
              e.target.value = e.target.value.replace(/[^\d+]/g, "")
            },
          })}
        />
        {errors.phoneNumber && (
          <span className="error-message">This field is required</span>
        )}

        <input type="submit" className="block w-full mt-4 p-4 button" />
      </form>
    </div>
  )
}
