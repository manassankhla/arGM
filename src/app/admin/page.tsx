"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Field,
    FieldLabel,
    FieldGroup,
    FieldDescription,
} from "@/components/ui/field";
import Image from "next/image";

export default function AdminLogin() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white px-4">
            {/* Background Graphic (optional usage like portfolio) */}
            <div className="absolute top-0 right-0 z-0 opacity-10 pointer-events-none w-1/2 h-full hidden lg:block">
                <Image
                    src="/brandLogoGray.png" // Reusing brand logo as subtle BG
                    alt="Background"
                    fill
                    className="object-contain object-right"
                />
            </div>

            <div className="w-full max-w-md space-y-8 z-10">
                <div className="text-center">
                    <h1 className="font-heading italic text-4xl sm:text-5xl text-black">
                        Admin Login
                    </h1>
                    <p className="mt-2 text-sm text-gray-500 font-body">
                        Please enter your credentials to access the dashboard.
                    </p>
                </div>

                <form className="mt-8 space-y-6">
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="email">Email address</FieldLabel>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="h-12 border-gray-300 focus:border-black focus:ring-black rounded-lg"
                                placeholder="admin@example.com"
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="password">Password</FieldLabel>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="h-12 border-gray-300 focus:border-black focus:ring-black rounded-lg"
                                placeholder="••••••••"
                            />
                        </Field>
                    </FieldGroup>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-black hover:text-gray-700 underline underline-offset-4"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <Button
                            type="submit"
                            className="
                group relative flex w-full justify-center
                rounded-[100px] bg-black px-8 py-4 text-sm font-semibold text-white
                hover:bg-white hover:text-black border border-black
                transition-all duration-300 h-[56px]
              "
                        >
                            Sign in
                            {/* Arrow Icon matching other buttons */}
                            <span className="ml-2 transition-transform duration-300 group-hover:rotate-45">
                                ↗
                            </span>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
