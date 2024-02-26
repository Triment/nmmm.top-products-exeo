import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="价值"
    description="我们秉承时间就是金钱的价值观，效率即价值，表格助手可以为您提供物超所值的价值"
  >
    <VerticalFeatureRow
      title="提升工作效率"
      description="exeo软件能够快速处理大量表格数据，自动化重复性任务，从而大幅提升工作效率。用户可以将更多的时间和精力投入到更有意义的工作中，提升工作质量和效率"
      image="/assets/images/feature.svg"
      imageAlt="提升工作效率"
    />
    <VerticalFeatureRow
      title="减少错误率"
      description="通过exeo软件的智能脚本引擎和高度定制化功能，用户可以避免手动处理表格数据时容易出现的错误和漏洞，保证数据处理的准确性和可靠性，提高工作效率。"
      image="/assets/images/feature2.svg"
      imageAlt="减少错误率"
      reverse
    />
    <VerticalFeatureRow
      title="持续更新和技术支持"
      description="作为exeo软件的用户，你将享受到持续更新和优质的技术支持服务。我们会定期发布新版本，增加新功能和优化用户体验，并提供及时的技术支持，帮助用户解决使用过程中遇到的问题和困难。"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
