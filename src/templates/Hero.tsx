import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AiOutlineDownload } from "react-icons/ai";
import { BsApple, BsWindows } from "react-icons/bs";
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            产品
          </Link>
        </li>
        <li>
          <Link href="/">登录</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'exeo表格助手\n'}
            <span className="text-primary-500">快、准、稳</span>
          </>
        }
        description="轻松处理表格、拒绝重复劳动、走向效率巅峰"
        button={
          <div className='flex justify-center gap-x-2'>
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>WIN客户端 <BsWindows size={24} className='inline self-center'/></Button>
          </Link>
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>MAC客户端 <BsApple size={24} className='inline self-center'/></Button>
          </Link>
          </div>
        }
      />
    </Section>
  </Background>
);

export { Hero };
