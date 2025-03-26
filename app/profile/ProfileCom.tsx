"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ChevronRight, Loader2, LogOut, Package } from "lucide-react";

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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { toast, ToastContainer } from "react-toastify";
import { Getorders } from "../_lib/dataService";
import Image from "next/image";
import { SignoutAction } from "../_lib/actions";

// Form validation schema
const profileSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  bio: z
    .string()
    .max(160, { message: "Bio must not exceed 160 characters" })
    .optional(),
  location: z.string().optional(),
  website: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .optional()
    .or(z.literal("")),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
});

type ProfileValues = z.infer<typeof profileSchema>;

// Password change schema
const passwordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, { message: "Current password is required" }),
    newPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type PasswordValues = z.infer<typeof passwordSchema>;

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

const mockOrders: Order[] = [
  {
    id: "ORD-12345",
    date: "2023-12-15",
    total: 129.99,
    status: "delivered",
    trackingNumber: "TRK-9876543",
    items: [
      {
        id: "ITEM-1",
        name: "Wireless Headphones",
        price: 79.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: "ITEM-2",
        name: "Phone Case",
        price: 24.99,
        quantity: 2,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  {
    id: "ORD-12346",
    date: "2024-01-05",
    total: 349.99,
    status: "shipped",
    trackingNumber: "TRK-9876544",
    items: [
      {
        id: "ITEM-3",
        name: "Smart Watch",
        price: 349.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  {
    id: "ORD-12347",
    date: "2024-02-20",
    total: 59.97,
    status: "processing",
    items: [
      {
        id: "ITEM-4",
        name: "T-Shirt",
        price: 19.99,
        quantity: 3,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  {
    id: "ORD-12348",
    date: "2024-01-10",
    total: 89.99,
    status: "cancelled",
    items: [
      {
        id: "ITEM-5",
        name: "Bluetooth Speaker",
        price: 89.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
];

export default function Profilecom({ data, user }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock user data - in a real app, this would come from your backend
  const userData = user?.user ?? "bdalla";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: userData.name,
      email: userData.email,
      bio: userData.bio,
      location: userData.location,
      website: userData.website,
      street: userData.street,
      city: userData.city,
      state: userData.state,
      postalCode: userData.postalCode,
      country: userData.country,
    },
  });

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
    reset: resetPassword,
  } = useForm<PasswordValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onProfileSubmit(data: ProfileValues) {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("updated");
    setIsLoading(false);
  }
  async function DEletetAccount() {
    toast.success("Delete your account");
  }

  async function onPasswordSubmit(data: PasswordValues) {
    setIsPasswordLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("password Update");
    resetPassword();
    setIsPasswordLoading(false);
  }

  // Filter orders based on search query
  const filteredOrders = data;

  // Get status badge color
  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case "delivered":
        return "bg-green-500";
      case "processing":
        return "bg-blue-500";
      case "shipped":
        return "bg-yellow-500";
      case "cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
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
              <form onSubmit={handleSubmit(onProfileSubmit)}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      readOnly
                      id="name"
                      {...register("name")}
                      className={errors.name ? "border-destructive" : ""}
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
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2 pt-4">
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
                  <Button type="submit" disabled={isLoading}>
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

        <TabsContent value="account">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your password here</CardDescription>
              </CardHeader>
              <form onSubmit={handlePasswordSubmit(onPasswordSubmit)}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      {...registerPassword("currentPassword")}
                      className={
                        passwordErrors.currentPassword
                          ? "border-destructive"
                          : ""
                      }
                    />
                    {passwordErrors.currentPassword && (
                      <p className="text-sm text-destructive">
                        {passwordErrors.currentPassword.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      {...registerPassword("newPassword")}
                      className={
                        passwordErrors.newPassword ? "border-destructive" : ""
                      }
                    />
                    {passwordErrors.newPassword && (
                      <p className="text-sm text-destructive">
                        {passwordErrors.newPassword.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      {...registerPassword("confirmPassword")}
                      className={
                        passwordErrors.confirmPassword
                          ? "border-destructive"
                          : ""
                      }
                    />
                    {passwordErrors.confirmPassword && (
                      <p className="text-sm text-destructive">
                        {passwordErrors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isPasswordLoading}>
                    {isPasswordLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      "Update password"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                  <CardDescription>
                    Manage your email notification preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketing">Marketing emails</Label>
                      <p className="text-xs text-muted-foreground">
                        Receive emails about new products, features, and more.
                      </p>
                    </div>
                    <Switch id="marketing" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="security">Security emails</Label>
                      <p className="text-xs text-muted-foreground">
                        Receive emails about your account security.
                      </p>
                    </div>
                    <Switch id="security" defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Management</CardTitle>
                  <CardDescription>
                    Manage your account settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    onClick={DEletetAccount}
                    variant="destructive"
                    className="w-full"
                  >
                    Delete Account
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </p>
                </CardContent>
              </Card>
            </div>
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
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex cursor-pointer flex-col items-start rounded-lg border p-4 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center sm:justify-between"
                        onClick={() => setSelectedOrder(order)}
                      >
                        <div className="mb-2 flex w-full items-center gap-4 justify-between sm:mb-0 sm:w-auto">
                          <div className="flex items-center gap-2">
                            <img
                              src={order.orderImage}
                              alt={order.status}
                              className="w-12 h-12 "
                            />
                            <div className="flex items-center gap-3">
                              <p className="font-medium">{order.id}</p>
                              <p className="font-medium">{order.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {formatDate(order.created_at)}
                              </p>
                            </div>
                          </div>
                          <Badge
                            className={`${getStatusColor(
                              order.status
                            )} sm:hidden`}
                          >
                            {order.status.charAt(0).toUpperCase() +
                              order.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="flex w-full items-center justify-between gap-4 sm:w-auto">
                          <div className="flex items-center gap-2">
                            <p className="font-medium">${order.order_Price}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              className={`${getStatusColor(
                                order.status
                              )} hidden sm:inline-flex`}
                            >
                              {order.status.charAt(0).toUpperCase() +
                                order.status.slice(1)}
                            </Badge>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                      <Package className="mb-2 h-8 w-8 text-muted-foreground" />
                      <h3 className="mb-1 font-medium">No orders found</h3>
                      <p className="text-sm text-muted-foreground">
                        {searchQuery
                          ? `No orders matching "${searchQuery}"`
                          : "You haven't placed any orders yet"}
                      </p>
                      {searchQuery && (
                        <Button
                          variant="link"
                          className="mt-2"
                          onClick={() => setSearchQuery("")}
                        >
                          Clear search
                        </Button>
                      )}
                    </div>
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
