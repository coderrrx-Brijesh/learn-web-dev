import { Boxes } from '@/components/ui/background-boxes';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import React from 'react';
import project_logo_1 from '../../../../public/project_logo_1.png';
import logo from '../../../../public/logo.png';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <div
        className="h-[530px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center
        justify-center rounded-lg"
      >
        <div
          className="absolute inset-0 w-full h-full z-20 
          [mask-image:radial-gradient(transparent,white)] pointer-events-none"
        />
        <Boxes />
        <p className="tag relative">28 December 2004</p>
        <h1 className="heading relative">Project is Awesome</h1>
        <p className="sub-heading !max-w-3xl relative line-clamp-3">
          This is a nice Project description...
        </p>
      </div>

      <section className="section_container">
        <Image
          src={project_logo_1}
          alt="Project Logo"
          className="w-full h-auto rounded-xl"
        />

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex flex-between gap-5">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image
                src={logo}
                alt="Author Avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="text-20-semibold">AUTHOR NAME</p>
                <p className="text-16-medium !text-black-300">@USERNAME</p>
              </div>
            </Link>
            <p className='category-tag'>IMFORMATION TECHNOOGY</p>
          </div>
          <h1>Project Details</h1>
          <p className='no-result'>No details provided</p>
        </div>
        <hr className='devider'/>
      </section>
    </>
  );
};

export default page;
