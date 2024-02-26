import Image from 'next/image';

import { Section } from '@/layout/Section';
import React from 'react';
import { Button, Card, CardFooter } from '@nextui-org/react';

const Sponsors = () => (
  <Section
    title="优势"
    description="exeo拥有多项优异特性"
  >
    <div className='flex'>
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="https://nextui.org/images/hero-card.jpeg"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button>
      </CardFooter>
    </Card>
    </div>
    {/* <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
              target="_blank"
            >
              <Image
                src="/assets/images/sentry-dark.png"
                alt="Sentry"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
              target="_blank"
            >
              <Image
                src="/assets/images/better-stack-dark.png"
                alt="Better Stack"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://nextlessjs.com">
              <Image
                src="/assets/images/nextlessjs.png"
                alt="React SaaS Boilerplate Next.js"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate"
              target="_blank"
            >
              <Image
                src="/assets/images/clerk.png"
                alt="Clerk – Authentication & User Management for Next.js"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://turso.tech/?utm_source=nextjsstarterbp"
              target="_blank"
            >
              <Image
                src="/assets/images/turso.png"
                alt="SQLite Developer Experience"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://l.crowdin.com/next-js" target="_blank">
              <Image
                src="https://support.crowdin.com/assets/logos/core-logo/svg/crowdin-core-logo-cDark.svg"
                alt="Crowdin"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table> */}
  </Section>
);
type IFeatureProps = {
  title: string,
  content: React.ReactNode,

}
const Feature = ()=>{

}

export { Sponsors };
