import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 px-6 sm:px-10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2fr] gap-x-20 gap-y-14">


                {/* LEFT SECTION */}
                <div>
                    <Image
                        src="/brandLogoWhite.png"
                        alt="ARGM Logo"
                        width={140}
                        height={70}
                        className="mb-6"
                    />

                    <p className="text-sm leading-relaxed text-gray-400">
                        Driven by a passion for design, we create spaces that inspire and endure,
                        blending innovative solutions with timeless elegance. Our expertise spans
                        architectural design, interior styling, and sustainable practices,
                        ensuring every project reflects our client’s vision and values.
                    </p>
                </div>

                {/* MIDDLE SECTION */}
                <div className="">
                    <h3 className="text-white font-medium mb-5">Company</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/about" className="hover:text-white">Our Story</Link></li>
                        <li><Link href="/projects" className="hover:text-white">Project Highlights</Link></li>
                        <li><Link href="/collaborations" className="hover:text-white">Collaborations</Link></li>
                        <li><Link href="/global-reach" className="hover:text-white">Global Reach</Link></li>
                        <li><Link href="/career" className="hover:text-white">Join Our Team</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Get in Touch</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-medium mb-5">Company</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/about" className="hover:text-white">Our Story</Link></li>
                        <li><Link href="/projects" className="hover:text-white">Project Highlights</Link></li>
                        <li><Link href="/collaborations" className="hover:text-white">Collaborations</Link></li>
                        <li><Link href="/global-reach" className="hover:text-white">Global Reach</Link></li>
                        <li><Link href="/career" className="hover:text-white">Join Our Team</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Get in Touch</Link></li>
                    </ul>
                </div>

                {/* RIGHT SECTION */}
                <div>
                    <h3 className="text-white font-medium mb-5">Sign Up</h3>

                    <p className="text-sm text-gray-400 mb-6">
                        Sign up to Techco weekly newsletter to get the latest updates.
                    </p>

                    {/* Newsletter */}
                    <div className="flex items-center bg-white rounded-full px-3 py-1">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-3 py-2 text-sm text-black outline-none bg-transparent"
                        />
                        <button className="bg-black text-white px-5 py-2 rounded-full text-sm">
                            Send
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6">
                        <Link href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                            <Facebook className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                            <Twitter className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                            <Instagram className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-gray-800 mt-14 pt-6 text-center text-sm text-gray-500">
                Copyright © 2026 ARGM, All rights reserved.
            </div>
        </footer>
    );
}
