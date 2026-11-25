
export default function Footer() {
  return (
    <footer
      className="bg-[#1A100B] pt-16 text-[#D4C9C0]"
    >
      <div className="mx-auto grid max-w-295 grid-cols-1 gap-10 px-5 pb-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-0">

        {/* BRAND */}
        <div>
          <img
            src="/images/BBLogo.jpeg"
            alt="Baking Bliss"
            className="h-25 w-auto object-contain object-left"
          />
        </div>

        {/* LINKS */}
        <div>
          <h3 className="mb-5 text-[10px] font-medium uppercase tracking-wider text-white">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-[9px]">
            <a href="/" className="hover:text-[#DDB873]">
              Home
            </a>

            <a href="/menu" className="hover:text-[#DDB873]">
              Menu
            </a>

            <a href="/about" className="hover:text-[#DDB873]">
              About
            </a>

            <a href="/contact" className="hover:text-[#DDB873]">
              Contact
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="mb-5 text-[10px] font-medium uppercase tracking-wider text-white">
            Get In Touch
          </h3>

          <div className="space-y-3 text-[9px]">

            <p className="flex items-start gap-2">
              
              +234 7012251988
            </p>

            <p className="flex items-start gap-2">
              
              susanagu@gmail.com
            </p>

            <p className="flex items-start gap-2">

              Monarch Avenue Enugu State.
            </p>

          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="mb-4 text-[10px] font-medium text-white">
            Join Our Newsletter
          </h3>

          <p className="mb-4 max-w-62.5 text-[9px] leading-6">
            Be the first to know about new treats,
            special offers and more!
          </p>

          <form className="flex h-9 max-w-67.5">
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 rounded-l-sm border-0 px-3 bg-[#f9f2ee] text-[9px] text-[#241710] outline-none"
            />

            <button
              type="submit"
              className="flex w-11 items-center justify-center rounded-r-sm bg-[#DDB873] text-[#4C351D] transition hover:bg-[#E7C88D]"
            >→
              
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex min-h-17.5 max-w-295 items-center justify-between px-5 sm:px-8 lg:px-0">

          <p className="text-[8px]">
            © 2026 Baking Bliss. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}