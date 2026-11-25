
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-155 overflow-hidden bg-[#21150F]"
    >
      {/* HERO IMAGE */}
      <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-right"
        style={{
          backgroundImage:
            "url('/images/HOMECAKE.jpeg')",
            backgroundPosition: "center right",
        }}
      />

      {/* DARK LUXURY OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-[#120B07]/95 via-[#120B07]/80 to-[#120B07]/10" />

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-155 max-w-295 items-center px-5 sm:px-8 lg:px-0">
        <div className="max-w-140 text-white">

          <p className="mb-5 text-[10px] font-semibold tracking-[4px] text-[#D7AD6B]">
            PREMIUM BAKED GOODS
          </p>

          <h1 className="font-serif text-[58px] font-medium leading-[0.94] tracking-[-1px] sm:text-[70px]">
            Baked with love,
            <br />
            made for{" "}
            <span className="italic text-[#DDB873]">
              bliss.
            </span>
          </h1>

          <p className="mt-7 max-w-112.5 text-[11px] leading-loose text-[#E4DDD7]">
            From classic favorites to handcrafted creations,
            we bring you the finest bakes, made with premium
            ingredients and a whole lot of love.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="/contact"
              className="inline-flex h-11.25 items-center justify-center gap-2 rounded-sm bg-[#DDB873] px-7 text-[11px] font-semibold text-[#3D2917] transition hover:-translate-y-1 hover:bg-[#E7C88D]"
            >
              Order Now
              →
            </a>

            <a
              href="/menu"
              className="inline-flex h-11.25 items-center justify-center rounded-sm border border-white/60 px-7 text-[11px] font-medium text-white transition hover:bg-white/10"
            >
              Explore Menu
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}