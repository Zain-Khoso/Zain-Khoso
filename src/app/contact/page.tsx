"use client";

// Lib Imports.
import { motion } from "motion/react";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Components.
import Highlighter from "@/components/Highlighter";
import { Button } from "@/components/Button";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef<null | HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
      )
      .then(
        () => {
          setSuccess(true);
          form.current?.reset();
        },
        () => {
          setError(true);
        },
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <section className="flex h-full flex-col px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
        <article className="flex h-1/2 items-center justify-center text-6xl lg:h-full lg:w-1/2">
          <h4 className="text-6xl">Say Hello! 🙂</h4>
        </article>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="flex h-1/2 flex-col justify-center gap-8 rounded-xl bg-amber-50 p-24 text-xl lg:h-full lg:w-1/2"
        >
          <span>
            Dear <Highlighter>Zain Ul Abdin</Highlighter>,
          </span>
          <textarea
            required
            name="message"
            rows={6}
            className="resize-none border-b-2 border-b-black bg-transparent outline-none"
          />

          <span>My mail address is:</span>
          <input
            type="email"
            name="user_email"
            required
            className="border-b-2 border-b-black bg-transparent outline-none"
          />

          <span>Regards</span>

          <Button type="submit" variant="ghost">
            Send
          </Button>

          {success && (
            <span className="font-semibold text-green-600">
              Your message has been sent successfully!
            </span>
          )}

          {error && (
            <span className="font-semibold text-red-600">
              Something went wrong!
            </span>
          )}
        </form>
      </section>
    </motion.div>
  );
}
