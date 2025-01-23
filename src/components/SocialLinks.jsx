import React from 'react';
import { content } from "../Content";

export default function SocialLinks() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-black">
          Trusted by the world’s most innovative teams
        </h2>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {content.socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 cursor-pointer transform transition-transform duration-200 hover:scale-105"
            >
              <img
                src={social.imgSrc}
                alt={social.altText}
                width={158}
                height={48}
                className="w-full h-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
