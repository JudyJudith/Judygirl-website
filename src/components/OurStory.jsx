
export default function OurStory() {
  return (
    <section
      
      className="bg-[#FBF7F1] py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-295 grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-0">

        {/* IMAGE */}
        <div className="relative h-95 overflow-hidden rounded-md sm:h-107.5">

          <img
            src="/images/ourstory.jpeg"
            alt="Baking Bliss bakery"
            className="h-full w-full object-cover brightness-[0.72]"
          />

          
        </div>

        {/* TEXT */}
        <div className="relative">

          <div className="mb-4 flex items-center gap-4">
            <span className="text-[9px] font-semibold tracking-[3px] text-[#B9894C]">
              OUR STORY
            </span>

            <span className="h-px w-12 bg-[#DEC7A2]" />
          </div>

          <h2 className="font-serif text-[38px] font-medium leading-[1.05] sm:text-[45px]">
            More Than Just a Bakery,
            <br />
            <span className="italic text-[#C49B60]">
              It's a Feeling.
            </span>
          </h2>

          <p className="mt-7 max-w-125 text-[11px] leading-loose text-[#51473F]">
            At Baking Bliss, we believe that every bake tells
            a story — of love, care and happiness. What started
            as a small dream has grown into a little corner of
            joy, where we create fresh, handcrafted treats for
            every occasion.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex h-10.75 items-center gap-2 rounded-sm bg-[#241710] px-6 text-[10px] font-medium text-white transition hover:-translate-y-1"
          >
            Learn More→
        
          </a>

          <span className="absolute -bottom-12 right-0 hidden font-serif text-[100px] text-[#DCC49D]/50 lg:block">
            ❧
          </span>

        </div>
      </div>
    </section>
  );
}
