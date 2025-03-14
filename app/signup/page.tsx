// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { ArrowRight, Loader2 } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Link from "next/link";

// // Form validation schema
// const signUpSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters" }),
//   email: z.string().email({ message: "Please enter a valid email address" }),
//   password: z
//     .string()
//     .min(8, { message: "Password must be at least 8 characters" }),
// });

// type SignUpValues = z.infer<typeof signUpSchema>;

// export default function SignUpForm() {
//   // const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SignUpValues>({
//     resolver: zodResolver(signUpSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//     },
//   });

//   async function onSubmit(data: SignUpValues) {
//     setIsLoading(true);

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     // Success notification

//     setIsLoading(false);
//     // Redirect to dashboard or login page
//     // router.push("/dashboard")
//   }

//   return (
//     <div className="flex min-h-[80vh] items-center justify-center p-4 mt-24">
//       <Card className="w-full max-w-md shadow-lg">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl font-bold">
//             Create an account
//           </CardTitle>
//           <CardDescription>
//             Enter your information below to create your account
//           </CardDescription>
//         </CardHeader>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <CardContent className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">Full Name</Label>
//               <Input
//                 id="name"
//                 placeholder="John Doe"
//                 {...register("name")}
//                 className={errors.name ? "border-destructive" : ""}
//               />
//               {errors.name && (
//                 <p className="text-sm text-destructive">
//                   {errors.name.message}
//                 </p>
//               )}
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="john@example.com"
//                 {...register("email")}
//                 className={errors.email ? "border-destructive" : ""}
//               />
//               {errors.email && (
//                 <p className="text-sm text-destructive">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 {...register("password")}
//                 className={errors.password ? "border-destructive" : ""}
//               />
//               {errors.password && (
//                 <p className="text-sm text-destructive">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>
//             <div className="pt-2">
//               <Button
//                 type="submit"
//                 className="w-full transition-all"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     Creating account...
//                   </>
//                 ) : (
//                   <>
//                     Sign Up
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </>
//                 )}
//               </Button>
//             </div>
//           </CardContent>
//         </form>
//         <CardFooter className="flex flex-col space-y-4 border-t px-6 py-4">
//           <div className="text-center text-sm text-muted-foreground">
//             By creating an account, you agree to our{" "}
//             <a
//               href="#"
//               className="underline underline-offset-4 hover:text-primary"
//             >
//               Terms of Service
//             </a>{" "}
//             and{" "}
//             <a
//               href="#"
//               className="underline underline-offset-4 hover:text-primary"
//             >
//               Privacy Policy
//             </a>
//             .
//           </div>
//           <div className="text-center text-sm">
//             Already have an account?{" "}
//             <Link
//               href="/Login"
//               className="font-medium text-primary hover:underline"
//             >
//               Sign in
//             </Link>
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
