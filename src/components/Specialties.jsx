
export default function Specialties() {

const Specialties = [
    {
        name: "Cakes",
        description: "For life special moments",
        image: "/images/cakes.jpeg",
        
    },
    {
        name: "Cupcakes",
        description: "Small bites, big happiness",
        image: "/images/cupcakes.jpeg",
    },
    {
        name: "Chops",
        description: "Classic, chewy, irresistable",
        image: "/images/chops.jpeg",
    },
    {
        name: "pastries",
        description: "Flaky layers, pure delight",
        image: "/images/pastries.jpeg",
    },
    {
        name: "Events",
        description: "perfectly Decorated, best Looks",
        image: "/images/surprises14.jpeg",
    },
    {
        name: "Surprises",
        description: "Made with love, perfectly curated",
        image: "/images/newevents9.jpeg",
    }
];

return (
    <section id="menu" className="bg-[#f8f4ee] py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#b58a4a]">
            Our Specialties
          </p>

          <h2 className="font-serif text-4xl text-[#24150f] md:text-5xl">
            Sweet Treats for Every Mood
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Specialties.map((item) => (
            <div key={item.name} className="text-center">

              {/* IMAGE */}
              <div className="mb-5 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />
              </div>

              <h3 className="text-lg font-medium text-[#24150f]">
                {item.name}
              </h3>

              <p className="mt-2 text-sm text-[#6f625b]">
                {item.description}
              </p>
              <a 
                 href="/menu">
              <button className="mt-5 flex mx-auto h-9 w-9 items-center justify-center rounded-full border border-[#24150f]">
                →
              </button>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}






    
