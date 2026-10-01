const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="px-3 py-6 font-sans md:p-8 lg:px-12 lg:pt-24 xl:px-0"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-x-2 sm:gap-x-4 lg:gap-x-8">
        <div className="col-span-12 min-w-0 md:col-span-7">
          <p className="whitespace-nowrap text-[clamp(0.625rem,3vw,1.5rem)] md:text-[clamp(0.75rem,1.5vw,2rem)] font-bold uppercase tracking-wider text-accent">
            Lead Frontend Engineer · React · Next.js · TypeScript
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-[clamp(1.75rem,8vw,4.25rem)] md:text-[clamp(2.25rem,4.5vw,3rem)] font-bold leading-[1.12] tracking-tight text-foreground lg:mt-10 lg:text-[clamp(3rem,5vw,4rem)]"
          >
            Engineering Frontend
            <br /> Systems That Scale
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
