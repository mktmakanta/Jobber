"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/lib/zod";
// import { handleCredentialsSignIn } from "@/app/actions/authActions";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    setError("");
    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        username: values.email,
        password: values.password,
      });

      if (!result?.ok) {
        setError(result?.error || "Invalid credentials.");
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen">
      {/* Left Section (Image) */}
      <div
        className="hidden lg:flex w-2/3 h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/login-image.jpg')", // Replace with the actual path to your image
        }}
      ></div>

      {/* Right Section (Form) */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 ">
            <h1 className="text-xl text-green-700 font-semibold">Jobber</h1>
            <a
              href="/signup"
              className="text-sm font-medium text-gray-500 hover:underline hover:text-green-600"
            >
              Create an account
            </a>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          {/* Welcome Section */}
          <div className="mb-8 text-center mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome back
            </h2>
            <p className="text-sm text-gray-500">
              Enter your Untitled account details.
            </p>
          </div>

          {/* Social Sign-In Buttons */}
          <div className="space-y-4 mb-6 ">
            <button className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md border border-gray-300">
              <img
                src="/icons/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Log in with Google
            </button>
            <button
              onClick={() => signIn("github")}
              className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md border border-gray-300"
            >
              <img
                src="/icons/github.svg"
                alt="GitHub"
                className="w-5 h-5 mr-2"
              />
              Log in with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="h-px w-full bg-gray-300"></div>
            <span className="mx-4 text-sm text-gray-500">OR</span>
            <div className="h-px w-full bg-gray-300"></div>
          </div>

          {/* Form */}
          <Card className="w-full bg-white">
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email or username</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            {...field}
                            className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Password Field */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            autoComplete="off"
                            {...field}
                            className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Remember Me and Forgot Password */}
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="mx-2 size-4  rounded-sm  accent-green-600   border-green-600"
                      />
                      <span className="text-gray-500">Keep me signed in</span>
                    </label>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-black x underline"
                    >
                      Forgot password
                    </a>
                  </div>
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow-md focus:ring-2 focus:ring-black focus:outline-none"
                  >
                    {isLoading ? "Signing in..." : "Sign in"}
                  </button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Trouble Signing In */}
          <p className="text-sm text-center text-gray-500 mt-6">
            Trouble signing in?{" "}
            <a href="#" className="text-black hover:underline">
              Get help
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
