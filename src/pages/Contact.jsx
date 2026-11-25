import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#2b1b14]">

      {/* ================= HERO ================= */}
      <section
        id="/contact"
        className="relative min-h-117.5 overflow-hidden"
      >
        {/* Background cake image */}
        <img
          src="/images/cupcakes3.jpeg"
          alt="Baking Bliss chocolate cupcake"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#170d08]/95 via-[#24140d]/75 to-[#170d08]/20" />

        {/* Hero content */}
        <div className="relative mx-auto flex min-h-117.5 max-w-300 items-center px-6 lg:px-10">
          <div className="max-w-137.5 text-white">

            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#d9a86d]">
              Get In Touch
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-[70px]">
              We’d Love to
              <br />
              Hear From{" "}
              <span className="italic text-[#d4a265]">
                You
              </span>
            </h1>

            <p className="mt-7 max-w-125 text-[16px] leading-7 text-[#f3eee7]">
              Have a question, a special request, or just want to say hello?
              We’re here for you. Fill out the form or reach out to us
              directly — we’d love to help!
            </p>
          </div>
        </div>
      </section>


      {/* ================= CONTACT + FORM ================= */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-275 gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* CONTACT INFORMATION */}
          <div className="border-r-0 lg:border-r lg:border-[#e5d9ca] lg:pr-16">

            <p className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-[#b77c40]">
              Contact Information
            </p>

            <div className="space-y-8">

              {/* Location */}
              <div className="flex gap-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8c89e] text-xl text-black">
                  <i class="fa-solid fa-location-dot"></i>
                </div>

                <div>
                  <h3 className="font-medium">Our Location</h3>
                  <p className="mt-1 text-sm leading-6 text-[#705f55]">
                    Osina Estate, Monarch Avenue
                    <br />
                    Enugu, Nigeria
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-black text-xl bg-[#e8c89e]">
                  <i class="fa-solid fa-phone"></i>
                </div>

                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="mt-1 text-sm leading-6 text-[#705f55]">
                     <a href="tel:+2347012251988">
                      +234 701 225 1988
                     </a>
                    <br />
                    Mon - Sun, 6am - 10pm
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c9955d] text-black text-xl">
                  <i class="fa-solid fa-envelope"></i>
                </div>

                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="mt-1 text-sm leading-6 text-[#705f55]">
                    susanagu@gmail.com
                    <br />
                    We reply within 24 hours
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c9955d] text-black text-xl">
                 <i class="fa-brands fa-instagram"></i>
                </div>

                <div>
                  <h3 className="font-medium">Follow Us</h3>
                  <p className="mt-1 text-sm leading-6 text-[#705f55]">
                   <a href="https://www.instagram.com/baking_bliss_ng_bliss_events?stkn=ZTU4ZWFrNHhqdnpx" target="blank">
                    @baking_bliss_ng_bliss_events
                    </a>
                    <br />
                    For updates, new treats & more!
                  </p>
                </div>
              </div>

            </div>


            {/* Small cupcake picture */}
            <div className="mt-14 flex items-center gap-6">

              <div className="max-w-47.5 font-serif text-3xl italic leading-tight text-[#b77c40]">
                Good things
                <br />
                are always
                <br />
                baked with love
                <div className="mt-2 text-2xl">♡</div>
              </div>

              <div className="rotate-[-5deg] bg-white p-2 shadow-lg">
                <img
                  src="/images/newcake5.jpeg"
                  alt="Fresh cupcakes"
                  className="h-40 w-32 object-cover"
                />
              </div>

            </div>
          </div>


          {/* MESSAGE FORM */}
          <div>

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#b77c40]">
              Send Us a Message
            </p>

            <h2 className="font-serif text-5xl leading-tight">
              Drop Us a{" "}
              <span className="italic text-[#b77c40]">
                Note
              </span>
            </h2>

            <p className="mt-4 max-w-137.5 text-sm leading-6 text-[#705f55]">
              Whether it’s a custom order, a partnership, or just a friendly
              hello — we’re all ears!
            </p>


            <form className="mt-8 space-y-4">

              <input
                type="text"
                placeholder="Name *"
                className="h-14 w-full rounded-lg border border-[#e2d6c8] bg-[#f4ede4] px-5 text-sm outline-none transition focus:border-[#b9854b]"
              />

              <input
                type="email"
                placeholder="Email *"
                className="h-14 w-full rounded-lg border border-[#e2d6c8] bg-[#f4ede4] px-5 text-sm outline-none transition focus:border-[#b9854b]"
              />

              <select
                className="h-14 w-full rounded-lg border border-[#e2d6c8] bg-[#f4ede4] px-5 text-sm text-[#705f55] outline-none focus:border-[#b9854b]"
              >
                <option>Subject</option>
                <option>Custom Cake</option>
                <option>Cupcakes</option>
                <option>Pastries</option>
                <option>General Question</option>
              </select>

              <textarea
                placeholder="Message *"
                rows="6"
                className="w-full resize-none rounded-lg border border-[#e2d6c8] bg-[#f4ede4] px-5 py-4 text-sm outline-none transition focus:border-[#b9854b]"
              />

              <button
                type="button"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-[#c58f52] text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#a8733d]"
              >
                Send Message
                
              </button>

            </form>
          </div>

        </div>
      </section>


      {/* ================= LOCATION SECTION ================= */}
      <section className="border-t border-[#e8dfd2] bg-[#f7f1e9] px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-275 items-center gap-12 lg:grid-cols-2">

          {/* Map */}
          <div className="relative h-82.5 overflow-hidden rounded-lg bg-[#e8e1d6]">

            {/* Fake map background */}
            <div className="absolute inset-0 opacity-60">
              <div className="absolute left-0 top-20 h-px w-full rotate-12 bg-[#c8c0b4]" />
              <div className="absolute left-0 top-40 h-px w-full -rotate-6 bg-[#c8c0b4]" />
              <div className="absolute left-40 top-0 h-full w-px rotate-15 bg-[#c8c0b4]" />
              <div className="absolute left-72 top-0 h-full w-px -rotate-[20deg]' bg-[#c8c0b4]" />
              <div className="absolute right-10 top-0 h-full w-14 rounded-full bg-[#d3dfcb]" />
            </div>

            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3a2116] text-white shadow-lg">
                
              </div>

              <span className="mt-2 rounded bg-white px-3 py-1 text-sm shadow">
                Baking Bliss
              </span>

            </div>

            <button className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
              
            </button>
          </div>


          {/* Bakery information */}
          <div>

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b77c40]">
              Visit Us
            </p>

            <h2 className="mt-3 font-serif text-5xl">
              Our Bakery
            </h2>

            <p className="mt-5 max-w-125 text-sm leading-7 text-[#705f55]">
              We’d love to welcome you in person! Stop by our bakery and enjoy
              the freshest bakes, made daily with love.
            </p>

            <div className="my-7 h-px bg-[#ddd0c1]" />

            <div className="flex gap-4">
              

              <div>
                <h3 className="font-medium">
                  Opening Hours
                </h3>

                <div className="mt-2 grid grid-cols-[1fr_auto] gap-x-8 gap-y-2 text-sm text-[#705f55]">
                  <span>Monday - Saturday</span>
                  <span>6:00 AM - 10:00 PM</span>

                  <span>Sunday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= FOLLOW US BANNER ================= */}
      <section className="relative overflow-hidden bg-[#2b170e] px-6 py-14 text-white lg:px-10">

        <div className="mx-auto flex max-w-275 flex-col items-center justify-between gap-8 lg:flex-row">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4a265]">
              Let’s Stay Connected
            </p>

            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Follow Our Journey
              <span className="ml-3 italic text-[#c9965d]">♡</span>
            </h2>
          </div>

          <div className="flex items-center gap-8">

            <p className="hidden max-w-260 text-sm leading-6 text-[#e2d6cb] md:block">
              Be the first to know about new menus, special offers and sweet
              updates.
            </p>

            <button className="flex items-center gap-3 rounded-full border border-[#bd8b54] px-7 py-3 text-xs uppercase tracking-[0.2em] text-[#e0b77e] transition hover:bg-[#bd8b54] hover:text-white">
             <a href="https://www.instagram.com/baking_bliss_ng_bliss_events?stkn=ZTU4ZWFrNHhqdnpx" target="blank">
              Follow Us
            </a>
            </button>

          </div>

        </div>
      </section>


    </div>
  );
}