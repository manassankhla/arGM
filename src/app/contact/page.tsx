import Container from "@/components/container";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <main className="bg-[#f5f5f5]">
            <section className="relative h-[65vh] flex items-center justify-center text-center">

              <Image
              src="/universalHeroImage.jpg"
              alt="Contact"
              fill
              className="object-cover"
              />

                <div className="relative z-10 px-6">
                    <h1 className="text-6xl md:text-7xl text-white font-heading italic tracking-wide mb-6">
                        Contact Us
                    </h1>
                </div>
            </section>

            {/* ================= TOP SECTION ================= */}
            <section className="py-24">
                <Container>

                    <div className="grid md:grid-cols-2 gap-16 items-start">

                        {/* ================= LEFT ================= */}
                        <div>

                            <p className="text-sm text-gray-500 mb-6">/ get in touch /</p>

                            <h1 className="text-4xl md:text-5xl font-heading italic leading-tight mb-8">
                                We are always ready
                                <br />
                                to help you and
                                <br />
                                answer your
                                <br />
                                questions
                            </h1>

                            <p className="text-gray-500 mb-12 max-w-md">
                                Reach out to us today to discuss your project. Creating spaces
                                that inspire and deliver impact.
                            </p>



                            {/* Contact Info */}
                            <div className="grid grid-cols-2 gap-y-10 text-sm">

                                <div>
                                    <p className="font-heading italic mb-2">Call Center</p>
                                    <p className="text-gray-500">+91 98765 43210</p>
                                    <p className="text-gray-500">+0123 456 789</p>
                                </div>

                                <div>
                                    <p className="font-heading italic mb-2">Our Location</p>
                                    <p className="text-gray-500">Jodhpur, Rajasthan</p>
                                    <p className="text-gray-500">India</p>
                                </div>

                                <div>
                                    <p className="font-heading italic mb-2">Email</p>
                                    <p className="text-gray-500"><a
                                        href="https://mail.google.com/mail/?view=cm&to=contact@example.com"
                                        target="_blank"
                                    >
                                        contact@example.com
                                    </a>
                                    </p>
                                </div>

                                <div>
                                    <p className="font-heading italic mb-2">Social network</p>
                                    <div className="flex gap-4 text-gray-500">
                                        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">
                                            <Facebook className="w-4 h-4" />
                                        </div>
                                        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">
                                            <Linkedin className="w-4 h-4" />
                                        </div>
                                        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">
                                            <Twitter className="w-4 h-4" />
                                        </div>
                                        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">
                                            <Instagram className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>



                        {/* ================= RIGHT FORM ================= */}
                        <div className="bg-white rounded-2xl p-10 shadow-md">

                            <h3 className="text-lg font-heading italic mb-2">Get in Touch</h3>

                            <p className="font-body text-gray-500 text-sm mb-8">
                                Feel free to get in touch anytime. We’re here and ready to help your business.
                            </p>

                            <form className="space-y-6">

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="font-body w-full border-b border-gray-300 outline-none py-3 focus:border-black transition"
                                />

                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="font-body w-full border-b border-gray-300 outline-none py-3 focus:border-black transition"
                                />

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="font-body w-full border-b border-gray-300 outline-none py-3 focus:border-black transition"
                                />

                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    className="font-body w-full border-b border-gray-300 outline-none py-3 focus:border-black transition resize-none"
                                />



                                {/* Button */}
                                <button
                                    className="
                    inline-flex items-center
                    h-[56px]
                    px-[32px]
                    rounded-full
                    bg-black text-white
                    border border-transparent
                    hover:bg-white hover:text-black hover:border-black
                    transition-all duration-300
                  "
                                >
                                    Send a message
                                </button>

                            </form>

                        </div>

                    </div>
                </Container>
            </section>



            {/* ================= MAP SECTION ================= */}
            <section className="w-full h-[320px]">

                <iframe
                    src="https://maps.google.com/maps?q=jodhpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full grayscale"
                    loading="lazy"
                />

            </section>

        </main>
    );
}
