import React, { Component } from "react";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        "Business",
        "Health",
        "Sports",
        "Technology",
        "Science",
        "Entertainment",
        "General",
      ],
    };
  }

  render() {
    const toggleMenu = () => {
      const hamburgerBtn = document.getElementById("hamburger-button");
      const mobileMenu = document.getElementById("mobile-menu");
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
      hamburgerBtn.classList.toggle("hidden");
    };

    return (
      <>
        <nav className="bg-[#151218] flex justify-between items-center md:justify-center text-white md:px-6 md:py-2">
          <div className="w-full flex justify-between md:w-auto lg:w-[25%]">
            <div className="p-4 md:p-2 font-semibold">NewsMonkey</div>
            <div>
              <button
                id="hamburger-button"
                className="p-2 text-3xl md:hidden cursor-pointer"
                onClick={toggleMenu}
              >
                &#9776;
              </button>
            </div>
          </div>

          <div className="items-center justify-between w-full md:w-auto lg:w-[75%] hidden md:flex">
            <ul className="flex gap-4 pl-4 text-white cursor-pointer">
              {this.state.articles.map((element) => {
                return (
                  <li className="hover:bg-gradient-to-r hover:from-[#fc907e] hover:via-[#9f6eed] hover:to-[#fc907e] hover:bg-clip-text hover:text-transparent">
                    {element}
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center gap-4">
              <button className="hover:bg-gradient-to-r hover:from-[#fc907e] hover:via-[#9f6eed] hover:to-[#fc907e] hover:bg-clip-text hover:text-transparent">
                Login
              </button>
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white w-[80%] rounded-3xl p-2 font-semibold text-sm mr-4">
                Contact us
              </button>
            </div>
          </div>
        </nav>
        <div
          id="mobile-menu"
          className="absolute top-0 text-3xl w-full flex-col origin-top animate-open-menu hidden"
        >
          <button
            className="text-3xl self-end p-2 text-white"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <nav
            className="flex flex-col min-h-screen py-8 bg-white"
            aria-label="mobile"
          >
            <ul className="flex flex-col gap-8 pl-4 text-sm">
              {this.state.articles.map((element) => {
                return (
                  <li className="hover:bg-gradient-to-r hover:from-[#fc907e] hover:via-[#9f6eed] hover:to-[#fc907e] hover:bg-clip-text hover:text-transparent">
                    {element}
                  </li>
                );
              })}
            </ul>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white w-[30%] rounded-3xl p-2 font-semibold mt-6 text-sm">
                Contact us
              </button>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
