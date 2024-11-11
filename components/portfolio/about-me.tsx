"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Mail,
  Calendar,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";

const personalInfo = [
  { icon: MapPin, label: "Location", value: "Victoria, Philippines" },
  { icon: Mail, label: "Email", value: "renzpajarito08@gmail.com" },
  { icon: Calendar, label: "Birthday", value: "July 5, 2005" },
];

const socialMedia = [
  { icon: Github, label: "GitHub", href: "https://github.com/renzpajarito" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/renzpajarito",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/renz.codes",
  },
];

export default function Component() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <Card className="h-fit min-h-[740px] bg-[#ecf0f3] relative shadow-sm pt-10 sm:px-10 px-2 border-white">
      <CardContent className="p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg">
            <AvatarImage
              src="/renz-pajarito/me4.jpg"
              alt="Renz Pajarito"
              className="object-cover"
            />
            <AvatarFallback>RP</AvatarFallback>
          </Avatar>
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-700">
                Renz Pajarito
              </h1>
              <Badge
                variant="secondary"
                className="mt-2 text-sm font-medium bg-white hover:bg-white/30 rounded-full text-gray-700"
              >
                Software Engineer
              </Badge>
            </div>
            <p className="text-sm sm:text-base leading-relaxed opacity-90 text-gray-700">
              A passionate software engineer with a talent for crafting
              innovative web applications and enhancing digital user
              experiences. I specialize in building dynamic, visually engaging,
              and highly functional web solutions that prioritize both usability
              and performance. With a strong foundation in React, Next.js,
              Firebase, and TypeScript, I bring creativity and technical
              precision to each project, ensuring a seamless, user-friendly
              interface that meets modern standards. My work reflects a
              commitment to blending functionality with design, delivering
              scalable applications that connect with users and drive meaningful
              interactions.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {personalInfo.map((info) => (
            <div
              key={info.label}
              className="flex items-center gap-3 bg-white/10 border-white border rounded-lg p-3"
            >
              <info.icon className="w-5 h-5 opacity-70" />
              <div>
                <p className="text-xs font-medium opacity-70 text-gray-700">
                  {info.label}
                </p>
                <p className="text-sm text-gray-700">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-semibold mb-4 opacity-80 text-gray-700">
            Connect with me
          </h3>
          <div className="flex gap-4">
            {socialMedia.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 border-white border hover:bg-white/20 transition-colors"
                aria-label={`Visit my ${social.label} profile`}
                onMouseEnter={() => setHoveredSocial(social.label)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          {hoveredSocial && (
            <p className="mt-2 text-xs opacity-70 text-gray-700">
              Visit my {hoveredSocial} profile
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
