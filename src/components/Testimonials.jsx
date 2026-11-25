import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "UA",
    name: "Uju Anita.",
    text: "The best cake I've ever had! Moist, flavorful and absolutely beautiful.",
  },
  {
    initials: "JJ",
    name: "Judy Judith.",
    text: "Baking Bliss never disappoints. Their cupcakes are pure perfection!",
  },
  {
    initials: "KP",
    name: "Kennneth Peter.",
    text: "Fresh, delicious and delivered on time. Truly a blissful experience!",
  },
  {
    initials: "HP",
    name: "Henry Paul.",
    text: "Quick response, Perfectly curated and decorated Room service!",
  },
  {
    initials: "EE",
    name: "Emmanuel Emeka.",
    text: "best plug!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F8EEE4] py-16">
      <div className="mx-auto max-w-295 px-5 sm:px-8 lg:px-0">

        {/* HEADING */}
        <div className="text-center">

          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-px w-11 bg-[#DEC7A2]" />

            <p className="text-[9px] font-semibold tracking-[3px] text-[#B9894C]">
              KIND WORDS
            </p>

            <span className="h-px w-11 bg-[#DEC7A2]" />
          </div>

          <h2 className="font-serif text-[34px] font-medium">
            What Our Customers Say
          </h2>
        </div>

        {/* TESTIMONIALS */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">

          {testimonials.map((review, index) => (
            <article
              key={review.name}
              className={`flex gap-4 md:px-7 ${
                index !== 2
                  ? "md:border-r md:border-[#DED4CA]"
                  : ""
              }`}
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#241710] font-serif text-sm font-semibold text-white">
                {review.initials}
              </div>

              <div>
                <p className="text-[9px] leading-[1.7] text-[#665B53]">
                  "{review.text}"
                </p>

                <p className="mt-2 text-[9px] font-semibold">
                  {review.name}
                </p>

                <div className="mt-1 flex gap-0.5 text-[#C79A51]">
                  
                </div>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}