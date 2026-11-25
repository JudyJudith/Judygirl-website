
const products = [
  {
    name: "Black Decorated 9 inches Cake",
    price: "80,000",
    image:
      "/images/menucake5.jpeg",
  },
  {
    name: "Vanilla favoured Cupcakes",
    price: "10,000",
    image:
      "/images/cupcakes.jpeg",
  },
  {
    name: "Small Chops Foil Platters",
    price: "7,000",
    image:
      "/images/chops1.jpeg",
  },
  {
    name: "Meatpie platter",
    price: "60,000",
    image:
      "/images/pastries3.jpeg",
  },
  {
    name: "Outdoor Events",
    price: "200,000",
    image:
      "/images/surprises5.jpeg",
  },
  {
    name: "Room surprises",
    price: "400,000",
    image:
      "/images/newevents3.jpeg",
  },
];

export default function BestSellers() {
  return (
    <section className="bg-[#FFFDF9] py-20 sm:py-24">
      <div className="mx-auto max-w-295 px-5 sm:px-8 lg:px-0">

        {/* TITLE */}
        <div className="text-center">

          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-px w-11 bg-[#DEC7A2]" />

            <p className="text-[9px] font-semibold tracking-[3px] text-[#B9894C]">
              BEST SELLERS
            </p>

            <span className="h-px w-11 bg-[#DEC7A2]" />
          </div>

          <h2 className="font-serif text-[38px] font-medium">
            Our Most Loved
          </h2>
        </div>

        {/* PRODUCTS */}
        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-md border border-[#EEE8E0] bg-white shadow-[0_7px_24px_rgba(50,31,18,0.05)] 
              transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(50,31,18,0.10)]"
            >
              <div className="h-57.5 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">

                <h3 className="min-h-7.5 text-[11px] font-medium leading-5">
                  {product.name}
                </h3>

                <p className="mt-2 text-[12px] font-semibold">
                  {product.price}
                </p>

                <a
                  href={`https://wa.me/2347012251988?text=${encodeURIComponent(
                    `Hello, I would like to order:\n\n${product.name}\nPrice: ₦${product.price}`
                  )}`}
                  target="_blank"
                  
                  className="mt-3 inline-flex items-center gap-2 rounded-sm bg-[#241710] px-4 py-2.5 text-[9px] font-medium text-white transition hover:bg-[#493126]"
                >
                   Order on Whatsapp
                </a>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}