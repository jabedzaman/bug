import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrgjnrgk");

  if (state.succeeded) {
    return (
      <p className="lg:text-4xl text-2xl italic flex justify-center font-semibold">
        Thanks for your submission!
      </p>
    );
  }

  return (
    <div>
      <div className="text-2xl lg:text-4xl font-semibold italic flex justify-center mb-10 mt-20">
        Drop your mail and I will get to you asap!
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center space-x-5"
      >
        <div className="my-4 flex flex-col justify-center items-center">
          <label
            htmlFor="email"
            className="block text-gray-100 text-sm font-bold mb-2"
          >
            Email :
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="shadow appearance-none border rounded w-full lg:w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />{" "}
          <br />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 py-2 px-4 rounded m-5"
        >
          Submit
        </button>
        </div>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
}
