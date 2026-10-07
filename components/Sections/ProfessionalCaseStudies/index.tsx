import SectionLayout from '@/components/Sections/SectionLayout';
import SchemaDrivenCaseStudy from './SchemaDrivenCaseStudy';
import ProductDeliveryCaseStudy from './ProductDeliveryCaseStudy';

const ProfessionalCaseStudies = () => {
  return (
    <SectionLayout
      id="experience"
      ariaLabelledBy="professional-case-studies-heading"
      eyebrow="01 / Professional Case Studies"
      title="Professional Case Studies"
      subtitle="Due to NDA restrictions, code and screenshots are not available."
      isSubtitleItalic
    >
      <div className="mt-6">
        <SchemaDrivenCaseStudy />
      </div>
      <div className="mt-10">
        <ProductDeliveryCaseStudy />
      </div>
    </SectionLayout>
  );
};

export default ProfessionalCaseStudies;
