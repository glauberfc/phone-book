import Link from "next/link"
import { useForm } from "react-hook-form"
import CloseIcon from "./CloseIcon"

export default function NewContactModal() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

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
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  )
}
