import { Link } from "react-router-dom";
export default function About() {
  return (
    
    <main className="min-h-screen bg-[#fffaf5] text-[#24150f]">

      {/* HERO */}
      <section id="About" className="bg-[#24150f] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4aa68]">
            Our Story
          </p>

          <h1 className="font-serif text-5xl leading-tight text-white md:text-7xl">
            More Than Just a Bakery,
            <br />
            <span className="italic text-[#d4aa68]">
              It's a Feeling.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#e8ddd4]">
            A little corner of joy where fresh bakes, beautiful moments,
            and a whole lot of love come together.
          </p>

        </div>
      </section>


      {/* STORY */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/CEOIMG.jpeg"
              alt="Baking Bliss bakery"
              className="h-auto w-full object-contain"
            />
          </div>


          {/* TEXT */}
          <div>

            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b58a4a]">
              The Beginning
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Baked with love,
              <br />
              made for bliss.
            </h2>

            <div className="mt-6 space-y-5 leading-7 text-[#756861]">

              <p>
                Baking Bliss started with a simple love for baking and
                a dream of creating a Bakery where people could slow down,
                celebrate, and enjoy something delicious.
              </p>

              <p>
                What began as a dream grew into a bakery
                filled with cakes, cupcakes, cookies, pastries, and
                unforgettable moments.
              </p>

              <p>
                Today, every treat we make is still prepared with the
                same care, creativity, and attention to detail that
                inspired us from the beginning.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* VALUES */}
      <section className="bg-[#f3e9df] px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b58a4a]">
              What We Believe
            </p>

            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Made for life's sweetest moments
            </h2>
          </div>


          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-xl bg-[#fffaf5] p-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#b58a4a] font-serif text-xl text-[#b58a4a]">
                01
              </div>

              <h3 className="font-serif text-2xl">
                Quality
              </h3>

              <p className="mt-4 leading-7 text-[#756861]">
                We use carefully selected ingredients to create
                treats that taste as beautiful as they look.
              </p>
            </div>


            <div className="rounded-xl bg-[#fffaf5] p-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#b58a4a] font-serif text-xl text-[#b58a4a]">
                02
              </div>

              <h3 className="font-serif text-2xl">
                Creativity
              </h3>

              <p className="mt-4 leading-7 text-[#756861]">
                Every creation is an opportunity to bring something
                special, beautiful, and memorable to the table.
              </p>
            </div>


            <div className="rounded-xl bg-[#fffaf5] p-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#b58a4a] font-serif text-xl text-[#b58a4a]">
                03
              </div>

              <h3 className="font-serif text-2xl">
                Love
              </h3>

              <p className="mt-4 leading-7 text-[#756861]">
                From our Bakery to your table, every bake is made
                with care and a little extra love.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* IMAGE + QUOTE */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div className="order-2 md:order-1">

            <p className="text-xs uppercase tracking-[0.3em] text-[#b58a4a]">
              Baking Bliss
            </p>

            <blockquote className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
              “Every cake tells a story,
              <span className="italic text-[#b58a4a]">
                {" "}and every bite creates a memory.”
              </span>
            </blockquote>

            <div className="mt-8 h-px w-20 bg-[#b58a4a]" />

            <p className="mt-5 text-sm tracking-wide text-[#756861]">
              Sweetness in every bite.
            </p>

          </div>


          <div className="order-1 overflow-hidden rounded-2xl md:order-2">
            <img
              src="/images/menuhero.jpeg"
              alt="Freshly baked treats"
              className="h-112.5 w-full object-cover"
            />
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-[#24150f] px-6 py-20 text-center">

        <p className="text-xs uppercase tracking-[0.3em] text-[#d4aa68]">
          Come Visit Us
        </p>

        <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
          Let's make something
          <span className="italic text-[#d4aa68]">
            {" "}sweet together.
          </span>
        </h2>
        <a href="/contact">
        <button className="mt-7 rounded-md bg-[#d4aa68] px-7 py-3 text-sm text-[#24150f]">
          Contact Us →
        </button>
        </a>
        

      </section>

    </main>
  );
}