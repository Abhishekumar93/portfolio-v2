import Image from "next/image";
import heroPortrait from "@/public/images/profile/abhishek-hero.png";

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="px-3 py-6 font-sans md:p-8 lg:px-12 lg:pt-24 xl:px-0"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-x-2 gap-y-8 sm:gap-x-4 lg:gap-x-8">
        <div className="col-span-12 min-w-0 md:col-span-7">
          <p className="whitespace-nowrap text-[clamp(0.575rem,2.9vw,1.5rem)] md:text-[clamp(0.75rem,1.5vw,2rem)] font-bold uppercase tracking-wider text-accent">
            Lead Frontend Engineer · React · Next.js · TypeScript
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-[clamp(1.75rem,8vw,4.25rem)] md:text-[clamp(2.25rem,4.5vw,3rem)] font-bold leading-[1.12] tracking-tight text-foreground lg:mt-10 lg:text-[clamp(3rem,5vw,4rem)]"
          >
            Engineering Frontend
            <br /> Systems That Scale
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-text-secondary md:text-lg lg:mt-8">
            I lead front-end architecture for complex products, improving
            performance, quality, and the way teams build.
          </p>
        </div>
        <div className="col-span-12 min-w-0 md:col-span-5">
          <div className="relative mx-auto aspect-438/548 w-full max-w-109.5 overflow-hidden rounded-2xl border border-border bg-portrait-panel shadow-lg shadow-foreground/10 md:mr-0 dark:shadow-none">
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
      </div>
    </section>
  );
};

export default Hero;
