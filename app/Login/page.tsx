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
// import { Checkbox } from "@/components/ui/checkbox";
// import Link from "next/link";

// // Form validation schema
// const loginSchema = z.object({
//   email: z.string().email({ message: "Please enter a valid email address" }),
//   password: z.string().min(1, { message: "Password is required" }),
//   rememberMe: z.boolean().optional(),
// });

// type LoginValues = z.infer<typeof loginSchema>;

// export default function LoginForm() {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);
//   const [authError, setAuthError] = useState<string | null>(null);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//     watch,
//   } = useForm<LoginValues>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//       rememberMe: false,
//     },
//   });

//   // Watch the rememberMe value to update it when the checkbox changes
//   const rememberMe = watch("rememberMe");

//   async function onSubmit(data: LoginValues) {
//     setIsLoading(true);
//     setAuthError(null);

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     // For demo purposes, let's simulate a successful login
//     // In a real app, you would validate credentials with your backend

//     // Uncomment to simulate an auth error
//     // setAuthError("Invalid email or password")
//     // setIsLoading(false)
//     // return

//     setIsLoading(false);
//     // Redirect to dashboard
//     // router.push("/dashboard")
//   }

//   return (
//     <div className="flex h-screen items-center justify-center p-4">
//       <Card className="w-full max-w-md shadow-lg">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
//           <CardDescription>
//             Enter your credentials to access your account
//           </CardDescription>
//         </CardHeader>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <CardContent className="space-y-4">
//             {authError && (
//               <div className="rounded-md bg-destructive/15 p-3">
//                 <p className="text-sm font-medium text-destructive">
//                   {authError}
//                 </p>
//               </div>
//             )}
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
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="password">Password</Label>
//                 <a href="#" className="text-xs text-primary hover:underline">
//                   Forgot password?
//                 </a>
//               </div>
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
//             <div className="flex items-center space-x-2">
//               <Checkbox
//                 id="rememberMe"
//                 checked={rememberMe}
//                 onCheckedChange={(checked) => {
//                   setValue("rememberMe", checked === true);
//                 }}
//               />
//               <Label
//                 htmlFor="rememberMe"
//                 className="text-sm font-normal cursor-pointer"
//               >
//                 Remember me
//               </Label>
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
//                     Logging in...
//                   </>
//                 ) : (
//                   <>
//                     Log in
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </>
//                 )}
//               </Button>
//             </div>
//           </CardContent>
//         </form>
//         <CardFooter className="flex justify-center border-t p-4">
//           <div className="text-center text-sm">
//             Don't have an account?{" "}
//             <Link
//               href={"/signup"}
//               className="font-medium text-primary hover:underline"
//             >
//               Sign up
//             </Link>
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
