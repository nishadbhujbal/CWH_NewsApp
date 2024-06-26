import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    const toggleMenu = () => {
      console.log("btn clicked");
      const hamburgerBtn = document.getElementById("hamburger-button");
      const mobileMenu = document.getElementById("mobile-menu");
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
      hamburgerBtn.classList.toggle("hidden");
    };

    return (
      <>
        <div>
          <nav className="bg-[#151218] flex justify-between md:justify-around text-white pt-4">
            <div className="p-4 font-semibold">CleverBooks</div>
            <div>
              <button
                id="hamburger-button"
                className="p-2 text-3xl md:hidden cursor-pointer"
                onClick={toggleMenu}
              >
                &#9776;
              </button>
            </div>

            <ul className="hidden md:flex gap-4 pl-4 pt-4 text-white cursor-pointer">
              <li className="hover:bg-gradient-to-r hover:from-[#fc907e] hover:via-[#9f6eed] hover:to-[#fc907e] hover:bg-clip-text hover:text-transparent">
                Product
              </li>
              <li className="hover:bg-gradient-to-r hover:from-[#fc907e] hover:via-[#9f6eed] hover:to-[#fc907e] hover:bg-clip-text hover:text-transparent">
                Pricing
              </li>
              <li className="hover:bg-gradient-to-r hover:from-[#fc907e] hover:via-[#9f6eed] hover:to-[#fc907e] hover:bg-clip-text hover:text-transparent">
                Industry
              </li>
              <li className="hover:bg-gradient-to-r hover:from-[#fc907e] hover:via-[#9f6eed] hover:to-[#fc907e] hover:bg-clip-text hover:text-transparent">
                Customer Stories
              </li>
              <li className="hover:bg-gradient-to-r hover:from-[#fc907e] hover:via-[#9f6eed] hover:to-[#fc907e] hover:bg-clip-text hover:text-transparent">
                About
              </li>
              <li className="hover:bg-gradient-to-r hover:from-[#fc907e] hover:via-[#9f6eed] hover:to-[#fc907e] hover:bg-clip-text hover:text-transparent">
                Blog
              </li>
            </ul>
            <div className="hidden md:flex items-center gap-4">
              <button className="hover:bg-gradient-to-r hover:from-[#fc907e] hover:via-[#9f6eed] hover:to-[#fc907e] hover:bg-clip-text hover:text-transparent">
                Login
              </button>
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white w-[60%] rounded-3xl p-2 font-semibold text-sm">
                Talk to us
              </button>
            </div>
          </nav>
        </div>
        <div
          id="mobile-menu"
          className="absolute top-0 text-3xl w-full flex-col origin-top animate-open-menu hidden"
        >
          <button
            className="text-3xl self-end pt-4 pr-3 mb-2 text-white"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <nav
            className="flex flex-col min-h-screen py-8 bg-white"
            aria-label="mobile"
          >
            <ul className="flex flex-col gap-8 pl-4 pt-4 text-sm">
              <li>Product</li>
              <li>Pricing</li>
              <li>Industry</li>
              <li>Custmer Stories</li>
              <li>About</li>
              <li>Blog</li>
            </ul>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white w-[30%] rounded-3xl p-2 font-semibold mt-6 text-sm">
                Talk to us
              </button>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
