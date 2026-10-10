import Image from 'next/image';
import heroPortrait from '@/public/images/profile/abhishek-hero.png';
import HeroActions from './HeroActions';

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="px-3 py-6 font-sans md:p-6 xl:px-0"
    >
      <div className="mx-auto grid grid-cols-12 gap-y-4 md:grid-rows-[auto_1fr] md:gap-y-8 lg:gap-x-8">
        <div className="col-span-12 md:col-span-7">
          <p className="whitespace-nowrap text-[clamp(0.575rem,2.9vw,1.5rem)] md:text-[clamp(0.75rem,1.5vw,2rem)] xl:text-[clamp(1rem,1.25vw,1.25rem)] font-bold uppercase tracking-wider text-accent">
            Lead Frontend Engineer · React · Next.js · TypeScript
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-[clamp(1.75rem,8vw,4.25rem)] md:text-[clamp(2.25rem,4.5vw,3rem)] font-bold leading-[1.12] tracking-tight text-foreground lg:mt-10 lg:text-[clamp(3rem,5vw,4rem)]"
          >
            Engineering Frontend
            <br /> Systems That Scale
          </h1>
          <p className="mt-4 text-[clamp(0.875rem,3.75vw,1.5rem)] text-text-secondary md:text-lg lg:mt-8">
            I lead frontend architecture for complex products, improving
            performance, engineering quality, and delivery.
          </p>
        </div>
        <div className="col-span-12 md:col-span-5 md:row-span-2 md:row-start-1">
          <div className="relative mx-auto aspect-438/548 w-full overflow-hidden rounded-2xl border border-border bg-portrait-panel shadow-lg shadow-foreground/10 md:mr-0 dark:shadow-none">
            <div className="absolute inset-x-0 bottom-0 h-[90.5%]">
              <Image
                src={heroPortrait}
                alt="Portrait of Abhishek Kumar"
                fill
                sizes="(min-width: 1280px) 438px, (min-width: 768px) 40vw, (min-width: 486px) 438px, calc(100vw - 48px)"
                className="object-cover object-[54%_center]"
                loading="eager"
              />
            </div>
          </div>
        </div>
        <HeroActions />
      </div>
    </section>
  );
};

export default Hero;
