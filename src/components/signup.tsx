"use client"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"


export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Logo Section */}
      <div className="p-10">
        <div className="flex items-center gap-4">
          <Image src="/assets/images/logo_with_text_cheemba.png" alt="Cheemba Logo" width={32} height={32} className="h-8 w-8" />
          <span className="text-black-xl font-roboto font-bold">Chee-<span className="text-blue-600 font-roboto font-bold">mba</span>
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex min-h-[calc(100vh-88px)] items-center justify-center px-4">
        <div className="grid w-full max-w-6xl gap-8 lg:grid-cols-2">
          {/* Left Section - Illustration */}
          <div className="relative hidden lg:block">
            <Image
              src="/assets/images/Frame 1000004347.png"
              alt="Login Illustration"
              width={600}
              height={600}
              className="h-auto w-full"
              priority
            />
          </div>

          {/* Right Section - Login Form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-manrope font-bold tracking-tight">Welcome, Cheemba</h1>
                <p className="font-spaceGrotesk">Welcome back! Please enter your details.</p>
              </div>

              <form className="space-y-6">
                <div className="space-y-4">
                  <input id="company" placeholder="Enter the company name" className="font-spaceGrotesk border-b border-gray-300 w-full py-2 bg-gray-100" />
                </div>

                <div className="space-y-4">
                  <input id="pincode" type="number" placeholder="Enter the pincode on the bin head" className="font-spaceGrotesk border-b border-gray-300 w-full py-2 bg-gray-100" />
                </div>

                <div className="space-y-4">
                  <input id="email" type="email" placeholder="Email" className="font-spaceGrotesk border-b border-gray-300 w-full py-2 bg-gray-100" />
                </div>

                <div className="space-y-4">
                  <input id="phone" type="tel" placeholder="Phone" className="font-spaceGrotesk border-b border-gray-300 w-full py-2 bg-gray-100" />
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="font-spaceGrotesk border-b border-gray-300 w-full py-2 bg-gray-100"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-2 py-2 hover:bg-transparent border-gray-300"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <EyeIcon className="h-4 w-4" aria-hidden="true" />
                        
                      ) : (

                        <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                        
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      className="font-spaceGrotesk border-b border-gray-300 w-full py-2 bg-gray-100"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-2 py-2 hover:bg-transparent border-gray-300"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                    >
                      {showConfirmPassword ? (
                        <EyeIcon className="h-4 w-4" aria-hidden="true" />
                        
                      ) : (

                        <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                        
                      )}
                      <span className="sr-only">{showConfirmPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </div>

               

                <Button className="h-11 w-full bg-black text-white hover:bg-black/90 font-spaceGrotesk">Sign up</Button>

                <p className="text-center text-sm font-spaceGrotesk">
                  Already have an account?{" "}
                  <Link href="/login" className="underline font-bold font-spaceGrotesk">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

