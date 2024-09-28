import PlaceholderImage from "../assets/images/placeholder-image.png";

const OurStaff = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section id="hero" className="scroll-mt-30 md:py-24 min-h-screen">
        <div className="w-full lg:container mx-auto py-8  lg:px-24 px-6">
          <h1 className="font-bold text-3xl text-primary">Meet Our Staff</h1>
        </div>

        <div className="text-center md:text-left w-full lg:container mx-auto flex flex-col sm:flex-row md:gap-24 justify-center py-8 pt-12 px-6">
          <div
            data-aos="fade-right"
            className="lg:max-w-md md:max-w-lg text-center"
          >
            <div className="w-[300px] mx-auto">
              <img src={PlaceholderImage} className="w-full rounded-full" />
            </div>
          </div>

          <div data-aos="fade-left" className="md:w-1/2 pt-4 md:pt-8">
            <figure>
              <blockquote className="pl-8 pr-8 py-12 relative">
                <p className="text-left mt-2 text-primary before:content-['\201C'] before:text-[35px] after:text-[35px] before:font-serif before:absolute before:top-4 before:left-0 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-1 after:right-7 after:transform after:-translate-x-2 after:-translate-y-2">
                  We aim to improve school quality by supporting pupils in line
                  with Ethiopian Education and Training Policy. We aim to
                  improve school quality by supporting pupils in line with
                  Ethiopian Education and Training Policy.
                </p>
              </blockquote>
              <figcaption className="italic text-right mt-2 text-primary">
                &#8212;Alexander the first.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="text-center mt-4 md:text-left w-full lg:container mx-auto flex flex-col-reverse sm:flex-row md:gap-24 justify-center py-8 pt-12 px-6">
          <div data-aos="fade-right" className="md:w-1/2 pt-4 md:pt-8">
            <figure>
              <blockquote className="pl-8 pr-8 py-12 relative">
                <p className="text-left mt-2 text-primary before:content-['\201C'] before:text-[35px] after:text-[35px] before:font-serif before:absolute before:top-4 before:left-0 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-1 after:right-7 after:transform after:-translate-x-2 after:-translate-y-2">
                  We aim to improve school quality by supporting pupils in line
                  with Ethiopian Education and Training Policy. We aim to
                  improve school quality by supporting pupils in line with
                  Ethiopian Education and Training Policy.
                </p>
              </blockquote>
              <figcaption className="italic text-right mt-2 text-primary">
                &#8212;Alexander the first.
              </figcaption>
            </figure>
          </div>
          <div
            data-aos="fade-left"
            className="lg:max-w-md md:max-w-lg text-center"
          >
            <div className="w-[300px] mx-auto">
              <img src={PlaceholderImage} className="w-full rounded-full" />
            </div>
          </div>
        </div>

        <div className="text-center mt-4 md:text-left w-full lg:container mx-auto flex flex-col sm:flex-row md:gap-24 justify-center py-8 pt-12 px-6">
          <div
            data-aos="fade-right"
            className="lg:max-w-md md:max-w-lg text-center"
          >
            <div className="w-[300px] mx-auto">
              <img src={PlaceholderImage} className="w-full rounded-full" />
            </div>
          </div>
          <div data-aos="fade-left" className="md:w-1/2 pt-4 md:pt-8">
            <figure>
              <blockquote className="pl-8 pr-8 py-12 relative">
                <p className="text-left mt-2 text-primary before:content-['\201C'] before:text-[35px] after:text-[35px] before:font-serif before:absolute before:top-4 before:left-0 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-1 after:right-7 after:transform after:-translate-x-2 after:-translate-y-2">
                  We aim to improve school quality by supporting pupils in line
                  with Ethiopian Education and Training Policy. We aim to
                  improve school quality by supporting pupils in line with
                  Ethiopian Education and Training Policy.
                </p>
              </blockquote>
              <figcaption className="italic text-right mt-2 text-primary">
                &#8212;Alexander the first.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="text-center mt-4 md:text-left w-full lg:container mx-auto flex flex-col-reverse sm:flex-row md:gap-24 justify-center py-8 pt-12 px-6">
          <div data-aos="fade-right" className="md:w-1/2 pt-4 md:pt-8">
            <figure>
              <blockquote className="pl-8 pr-8 py-12 relative">
                <p className="text-left mt-2 text-primary before:content-['\201C'] before:text-[35px] after:text-[35px] before:font-serif before:absolute before:top-4 before:left-0 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-1 after:right-7 after:transform after:-translate-x-2 after:-translate-y-2">
                  We aim to improve school quality by supporting pupils in line
                  with Ethiopian Education and Training Policy. We aim to
                  improve school quality by supporting pupils in line with
                  Ethiopian Education and Training Policy.
                </p>
              </blockquote>
              <figcaption className="italic text-right mt-2 text-primary">
                &#8212;Alexander the first.
              </figcaption>
            </figure>
          </div>

          <div
            data-aos="fade-left"
            className="lg:max-w-md md:max-w-lg text-center"
          >
            <div className="w-[300px] mx-auto">
              <img src={PlaceholderImage} className="w-full rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurStaff;
