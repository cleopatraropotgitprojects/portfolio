"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

interface ReviewCardProps {
  name: string;
  role?: string;
  image?: string;
  review: string;
  linkedin?: string;
  project?: string;
}

export function ReviewCard({
  name,
  role,
  image,
  review,
  linkedin,
  project,
}: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false);

  const MAX_LENGTH = 200;
  const isLong = review.length > MAX_LENGTH;
  const displayedText = expanded ? review : review.slice(0, MAX_LENGTH);

  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={name} className="object-contain" />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-1 flex-col justify-start gap-1">
        {project && (
          <p className="text-xs italic text-muted-foreground">
            Worked together at {project}
          </p>
        )}
        <div className="flex items-center gap-2">
          <h2 className="font-semibold leading-none">{name}</h2>
          {linkedin && (
            <Link href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-4 h-4 text-blue-600 hover:text-blue-700" />
            </Link>
          )}
        </div>

        {role && <p className="text-sm text-muted-foreground">{role}</p>}

        <p className="prose dark:prose-invert text-sm text-muted-foreground mt-1">
          {displayedText}
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-1 text-xs text-blue-600 underline hover:text-blue-700"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </p>
      </div>
    </li>
  );
}
