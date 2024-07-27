import Field from "../Field";
import FieldSet from "../FieldSet";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import NumberInput from "../NumberInput";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
    reset
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });
  const submitForm = (FormData) => {
    console.log(FormData);
    reset()
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter your Basic Details">

        <Field label="Picture" error={errors.picture}>
            <input
              {...register("picture", { required: "Picture is Required" })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.email ? "border-red-500 " : "border-gray-200"
              }`}
              type="file"
              name="picture"
              id="picture"
              
            />
          </Field>
          <Field label="email" error={errors.email}>
            <input
              {...register("email", { required: "Email has Required" })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.email ? "border-red-500 " : "border-gray-200"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email Address"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 8,
                  message: "Must Password at Least 8 Character",
                },
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.email ? "border-red-500 " : "border-gray-200"
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </Field>
          <Field label="Full Name" error={errors.fname}>
            <input
              {...register("fname", { required: "Full Name is Required" })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.fname ? "border-red-500 " : "border-gray-200"
              }`}
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter Full Name"
            />
          </Field>
          <Field label="Age" error={errors.age}>
            {/* <input {...register("age",{required:"Age is Required",
                max:{
                    value:100,
                    message:"Age Must be between 0-100"
                }
                      
                })}
               className={`p-2 border box-border w-[300px] rounded-md ${!!errors.age ? "border-red-500 " : "border-gray-200"}`}
                type="number"
                name="age"
                id="age"
                placeholder="Enter Your Age"
                 /> */}

            <Controller
              name="age"
              control={control}
              render={({ field: { ref, ...field } }) => (
                <NumberInput
                  id="age"
                  className={`p-2 border box-border w-[300px] rounded-md ${
                    !!errors.age ? "border-red-500 " : "border-gray-200"
                  }`}
                  {...field}
                />
              )}
              rules={{
                max: {
                  value: 100,
                  message: "Age can be Between 0 to 100",
                },
              }}
            />
          </Field>
        </FieldSet>
        <FieldSet label="Enter Social Handles">
          {fields.map((field, index) => {
            return (
              <div
                key={field.id}
                className="flex justify-between items-center w-max"
              >
                <Field label="Social Name">
                  <input
                    className="p-2 border box-border w-full rounded-md"
                    type="text"
                    {...register(`socials[${index}].name`)}
                    id={`socials[${index}].name`}
                    name={`socials[${index}].name`}
                  />
                </Field>

                <Field label="Social URL">
                  <input
                    className="p-2 border box-border w-full rounded-md"
                    type="text"
                    {...register(`socials[${index}].url`)}
                    id={`socials[${index}].url`}
                    name={`socials[${index}].url`}
                  />
                </Field>
              </div>
            );
          })}
          <button
            className="mt-8 text-md text-white cursor-pointer border rounded-lg bg-gray-500 p-1 m-auto"
            onClick={() => append({ name: "", url: "" })}
          >
            Add a Social Handle
          </button>
        </FieldSet>
        <Field>
          <button className="text-md text-white cursor-pointer p-1 border rounded-lg bg-purple-500 m-auto ">
            Register
          </button>
        </Field>
        <div>{errors?.root?.random?.message}</div>
      </form>
    </div>
  );
};

export default RegistrationForm;
