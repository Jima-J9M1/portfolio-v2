"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MessageSquare, Send } from "lucide-react"
import { FadeIn } from "../animations/FadeIn"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { z } from "zod"
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify
import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";


const UserSchema = z.object({
  fullname: z.string().min(1).max(35),
  email: z.string().email(),
  phone: z.string(),
  message: z.string({
    required_error: "required field",
  }),
});

interface contactProp {
  fullname: string;
  email: string;
  phone: string;
  message: string;
}

interface formDataProps {
  fullname: string;
  email: string;
  phone: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<formDataProps>({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setError] = useState<contactProp>({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [responseError, setResponseError] = useState<String>("");

  useEffect(() => {
    setError({
      fullname: "",
      email: "",
      phone: "",
      message: "",
    });
  }, [formData]);

  const postData = async (formData: formDataProps) => {
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        toast.success(
          <div className="pl-2">
            <span className="font-inter font-medium text-[#111827] text-sm">
              Message sent!
            </span>
            <br />
            <span className="font-normal text-sm text-[#6B7280] ">
              Thanks for reaching out.
            </span>
          </div>
        );

        setFormData({
          fullname: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((err) => {
        setResponseError("Opps! Something Occurs.Try again");
      });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {

      UserSchema.parse(formData);
      formData && postData(formData);
    } catch (error: any) {
      error.errors.map((er: any) =>
        setError({
          ...errors,
          [er.path.length > 0 && er.path[0]]: er.message,
        })
      );
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-center text-muted-foreground md:text-lg">
            Have a project in mind? Let's work together!
          </p>
        </FadeIn>

        <div className="grid gap-8 mt-16 md:grid-cols-2">
          {/* Contact Information */}
          <FadeIn delay={0.2}>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Let's Connect
              </h3>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I'm currently open for freelance projects and full-time positions.
                  Feel free to reach out if you have any questions or just want to say hi!
                </p>

                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <a
                    href="mailto:jimadube100@example.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jimadube100@example.com
                  </a>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://github.com/Jima-J9M1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://linkedin.com/in/jima-dube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.4}>
            <Card className="p-6">
              <ToastContainer />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="fullname"
                      name="fullname"
                      placeholder="John Doe"
                      required
                      onChange={handleChange}
                      value={formData.fullname}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jimadube100@example.com"
                      required
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Phone
                  </label>
                  <PhoneInput
                    className="form-input px-4 py-3 border outline-none border-slate-300 rounded-md"
                    defaultCountry="ET"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={(value) =>
                      setFormData({
                        ...formData,
                        phone: value || "",
                      })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={5}
                    required
                    onChange={handleChange}
                    value={formData.message}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}