import { Signup } from "../_lib/dataService";
import SignUpFormClient from "./SignUpFormClient";

async function handleSignUp(data: {
  name: string;
  email: string;
  password: string;
}) {
  "use server";

  const response = await Signup({
    // Make sure `Signup` is correctly defined
    name: data.name,
    email: data.email,
    password: data.password,
  });

  if (!response.ok) {
    throw new Error("Failed to create an account. Please try again.");
  }
}

export default function SignUpForm() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4 mt-24">
      <div className="w-full max-w-md shadow-lg p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Create an account</h2>
        <p className="text-gray-500">
          Enter your information below to create your account
        </p>
        <SignUpFormClient onSubmit={handleSignUp} />
      </div>
    </div>
  );
}
