import { NavLink } from "react-router-dom";
import { useState } from "react";

 export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false)

   const links = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
   ];

   return (
    <header className="sticky top-0 z-50 border-b border-[#EDE5DB] bg-[#FFFDF9]/95 backdrop-blur-md">
    <div className="mx-auto flex h-20.5 max-w-295 items-center justify-between px-5 sm:px-8 lg:px-0">

        {/* LOGO */}
        <a href="#home" className="block">
          <img
            src="/images/BBLogo.jpeg" alt="Baking Bliss" className="h-20 w-auto object-contain"
          />
         </a>

         {/* DESKTOPP NAV */}
         <nav className="hidden items-center gap-10 md:flex">
  {links.map((link) => (
    <NavLink
      key={link.name}
      to={link.href}
      className={({ isActive }) =>
        `relative py-7 text-[12px] font-medium tracking-wide transition
        after:absolute after:bottom-4 after:left-1/2
        after:h-px after:w-7 after:-translate-x-1/2
        after:bg-[#B9894C]
        ${
          isActive
            ? "text-[#B9894C] after:block"
            : "text-brand after:hidden hover:text-[#B9894C]"
        }`
      }
    >
      {link.name}
    </NavLink>
  ))}
</nav>
{/* MOBILE MENU BUTTON */}

    <button

      onClick={() => setMenuOpen(!menuOpen)}

      className="text-2xl md:hidden"

      aria-label="Toggle menu"

    >

      ☰

    </button>

  </div>

  {/* MOBILE NAV */}

  {menuOpen && (

    <nav className="md:hidden border-t border-[#EDE5DB] bg-[#FFFDF9] px-5 py-5">

      <div className="flex flex-col gap-5">

        {links.map((link) => (

          <NavLink

            key={link.name}

            to={link.href}

            onClick={() => setMenuOpen(false)}

            className={({ isActive }) =>

              `text-sm font-medium ${

                isActive

                  ? "text-[#B9894C]"

                  : "text-brand"

              }`

            }

          >

            {link.name}

          </NavLink>

        ))}

      </div>

    </nav>

  )}


      </header>
   )
}
 