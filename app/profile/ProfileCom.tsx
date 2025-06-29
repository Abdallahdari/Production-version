"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { toast, ToastContainer } from "react-toastify";
import Image from "next/image";
import { SignoutAction, UpdateUser } from "../_lib/actions";

// Form validation schema
const profileSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),

  Phone: z.string().optional(),

  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
});

type ProfileValues = z.infer<typeof profileSchema>;

// Password change schema

// Mock order data
type OrderStatus = "delivered" | "processing" | "shipped" | "cancelled";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: OrderStatus;
  items: OrderItem[];
  trackingNumber?: string;
}

export default function Profilecom({ user, updat, orders }) {
  const [isLoading, setIsLoading] = useState(false);
  const [setSelectedOrder] = useState<Order | null>(null);

  // Mock user data - in a real app, this would come from your backend
  const userData = user?.user;
  const {
    register,

    formState: { errors },
  } = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: userData.name,
      email: userData.email,
      street: updat.street,
      city: updat.city,
      state: updat.statE,
      postalCode: updat.postalCode,
      country: updat.country,
      Phone: updat.Phone,
    },
  });

  // Filter orders based on search query

  // Get status badge color

  // Format date

  const Handlesubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const fomrData = new FormData(e.target);
      await UpdateUser(fomrData);
      toast.success("Updated successfully", {
        autoClose: 1500,
        onClose: () => {
          window.location.reload();
        },
      });
    } catch (error) {
      console.log("error", error);
      return null;
    }
  };
  return (
    <div className="container mx-auto xl:max-w-[1200px] py-24 px-4">
      <ToastContainer />
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Profile Settings</h1>
          <p className="text-muted-foreground">
            Welcome mr {user.user.name} Manage your account settings and
            preferences
          </p>
        </div>
        <Button
          onClick={SignoutAction}
          variant="outline"
          className="mt-4 md:mt-0"
          size="sm"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:w-auto">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details here
                </CardDescription>
              </CardHeader>
              <form onSubmit={Handlesubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      readOnly
                      id="name"
                      {...register("name")}
                      className={`${
                        errors.name ? "border-destructive" : ""
                      } cursor-not-allowed`}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      readOnly
                      id="email"
                      type="email"
                      {...register("email")}
                      className={`${
                        errors.email ? "border-destructive" : ""
                      } cursor-not-allowed`}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2 pt-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="street">Phone Number</Label>
                        <Input
                          id="Phone"
                          {...register("Phone")}
                          className={errors.street ? "border-destructive" : ""}
                        />
                        {errors.street && (
                          <p className="text-sm text-destructive">
                            {errors.street.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="street">Street Address</Label>
                        <Input
                          id="street"
                          {...register("street")}
                          className={errors.street ? "border-destructive" : ""}
                        />
                        {errors.street && (
                          <p className="text-sm text-destructive">
                            {errors.street.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          {...register("city")}
                          className={errors.city ? "border-destructive" : ""}
                        />
                        {errors.city && (
                          <p className="text-sm text-destructive">
                            {errors.city.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State / Province</Label>
                        <Input
                          id="state"
                          {...register("state")}
                          className={errors.state ? "border-destructive" : ""}
                        />
                        {errors.state && (
                          <p className="text-sm text-destructive">
                            {errors.state.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal / ZIP Code</Label>
                        <Input
                          id="postalCode"
                          {...register("postalCode")}
                          className={
                            errors.postalCode ? "border-destructive" : ""
                          }
                        />
                        {errors.postalCode && (
                          <p className="text-sm text-destructive">
                            {errors.postalCode.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          {...register("country")}
                          className={errors.country ? "border-destructive" : ""}
                        />
                        {errors.country && (
                          <p className="text-sm text-destructive">
                            {errors.country.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="hover:bg-slate-950 transition-all duration-300"
                    disabled={isLoading || register === null}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      "Save changes"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>

            <Card className="h-max">
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={userData.image} alt={userData.name} />
                  <AvatarFallback className="text-3xl">
                    {userData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex gap-2"></div>
                <p className="text-xs text-center text-muted-foreground">
                  {userData.name}
                </p>
                <p className="text-xs text-center text-muted-foreground">
                  {userData.email}
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="orders">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View and track your orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.length > 0 ? (
                    orders.map((order) => (
                      <div
                        key={order.id}
                        className=" cursor-pointer flex-col items-start rounded-lg border p-4 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center sm:justify-between"
                        onClick={() => setSelectedOrder(order)}
                      >
                        <div className="mb-2 flex w-full flex-col gap-2 sm:mb-0 sm:w-auto">
                          {order.OrderItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center gap-4 w-full"
                            >
                              <Image
                                height={30}
                                width={30}
                                src={item.Product.image}
                                alt={item.Product.name}
                                className="w-12 h-12 rounded object-cover"
                              />
                              <div className="w-full  flex items-center justify-between">
                                <p className="font-medium">
                                  {item.Product.name}
                                </p>

                                <p className="text-sm">
                                  Quantity: {item.quatitiy}
                                </p>
                                <p className="text-sm">
                                  Price: ${item.Product.price}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No orders found.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
