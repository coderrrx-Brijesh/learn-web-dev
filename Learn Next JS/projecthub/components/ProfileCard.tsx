import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import ProfileLogo from "../../public/profile_logo.png"
export default function EvervaultCardDemo() {
  return (
    <div
      className="border border-black/[0.2] dark:border-white/[0.2]
    items-center flex flex-col max-w-sm mx-auto p-4 relative h-[35rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard />

      <h2 className="dark:text-white text-black mt-4 text-lg font-bold items-center">
        NAME LASTNAME
      </h2>
      <p
        className="text-sm border font-semibold line-clamp-2 text-center 
       dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black 
       dark:text-white px-2 mx-2 py-0.5 pb-3"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        exercitationem, modi, fugit maxime excepturi nisi maiores voluptatibus
        nobis explicabo ea perspiciatis assumenda eius odit nemo ratione qui?
        Incidunt animi dolores, qui culpa temporibus similique reprehenderit
        magnam tenetur nemo quis exercitationem.
      </p>
    </div>
  );
}
