"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Facebook, Github, Linkedin, Mail, Send } from "lucide-react";
import Header from "@/components/portfolio/header";
import Footer from "@/components/portfolio/footer";
import { SocialLink } from "@/types/types";

export default function PortfolioContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "82030deb-431b-4d5a-8633-a78ac2d25076",
        name: name,
        email: email,
        message: message,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  const skills: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "React",
    "Firebase",
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/renzpajarito",
      isEmail: false,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/renzpajarito",
      isEmail: false,
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/renz.codes",
      isEmail: false,
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:renzpajarito08@gmail.com",
      isEmail: true,
    },
  ];

  return (
    <div className="min-h-screen p-3 mx-auto space-y-2 bg-[#ecf0f3]">
      <Header />
      <div className="container mx-auto sm:px-4 px-0 pt-2 pb-2 sm:py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-700">
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-[#ecf0f3] shadow-sm border-white">
            <CardHeader>
              <CardTitle className="text-gray-700">Contact Me</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-8">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                    Thank you for your message!
                  </h2>
                  <p className="text-gray-700">
                    I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="mt-1 border-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-1 border-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="mt-1 resize-none border-white"
                      rows={12}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gray-800">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-[#ecf0f3] shadow-sm border-white">
              <CardHeader>
                <CardTitle className="text-gray-700">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage
                      src="/renz-pajarito/me2.jpg"
                      alt="Renz Pajarito profile picture"
                      className="object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                    <AvatarFallback>RP</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-700">
                      Renz Pajarito
                    </h2>
                    <p className="text-muted-foreground text-gray-700">
                      Software Engineer
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-gray-700">
                  A skilled software engineer passionate about creating dynamic,
                  user-focused web applications. I deliver visually appealing,
                  functional designs that enhance user engagement. My work
                  balances technical precision with creativity to build
                  scalable, user-friendly solutions that meet modern web
                  standards.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.isEmail ? undefined : "_blank"}
                      rel={social.isEmail ? undefined : "noopener noreferrer"}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <social.icon className="h-6 w-6" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#ecf0f3] shadow-sm border-white">
              <CardHeader>
                <CardTitle className="text-gray-700">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
