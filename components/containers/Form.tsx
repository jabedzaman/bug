import { useForm, ValidationError } from "@formspree/react";
import { Textarea } from "@nextui-org/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrgjnrgk");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div>
        <div className="text-2xl lg:text-4xl font-semibold italic flex justify-center mb-10 mt-20">
            Feel free to contact :) 
        </div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center space-x-5">
        <div className="my-4">
        <label htmlFor="email" className="block text-gray-100 text-sm font-bold mb-2">Email :</label>
        <input id="email" type="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/> <br />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="my-4">
        <label className="block text-gray-100 text-sm font-bold mb-2">Message:</label>
        <Textarea id="message" name="message" className="h-100" minRows={1}
          maxRows={100} />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br />
        </div>
        <button type="submit" disabled={state.submitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5 my-5">
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
}
