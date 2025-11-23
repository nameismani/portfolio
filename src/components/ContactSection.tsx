"use client";
import clsx from "clsx";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Section } from "@/components/common";

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success(
      "Message sent! Thank you for your message. I'll get back to you soon."
    );
    reset();
  };

  return (
    <Section id="contact" className="bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Get In <span className="text-primary"> Touch</span>
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'm always open to discussing new opportunities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">{/* Contact info ... */}</div>

        <div className="bg-card p-8 rounded-lg shadow-xs">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Pedro Machado..."
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="john@gmail.com"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                {...register("message", {
                  required: "Message is required",
                })}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Hello, I'd like to talk about..."
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={clsx(
                "cosmic-button w-full flex items-center justify-center gap-2"
              )}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
