export function HeadingComponent() {
  return (
    <>
      <div className="flex justify-center h-full px-4 sm:px-6 lg:px-8 pt-8">
        <div className="w-full max-w-4xl">
          <h1 className="text-[#070707] text-3xl sm:text-4xl md:text-5xl font-semibold font-['Inter'] leading-tight sm:leading-tight md:leading-[1.2] text-center pt-16 sm:pt-24 md:pt-32">
            Frequently asked questions
          </h1>
          <p className="text-[#070707] text-lg sm:text-xl md:text-2xl font-normal font-['Inter'] leading-normal sm:leading-relaxed md:leading-9 text-center mt-4 sm:mt-6">
            Everything you need to know about FreeWater.
          </p>
        </div>
      </div>
    </>
  );
}
