import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="行业支持"
      subtitle="我们有多行业解决方案经验，为您的想法提供借鉴"
      button={
        <Link href="/solutions">
          <Button>查看已有解决方案</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
