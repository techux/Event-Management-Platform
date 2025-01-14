import React from "react";

const Testimonal = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Don't believe on us, just hear what our satisfied customers said about us
          </p>
        </div>

        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Unbeatable services by EventHub
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, magnam suscipit voluptatem repellat voluptate rerum eum sint dicta placeat veniam, velit tenetur vero distinctio fuga esse? Voluptatum placeat aspernatur accusamus.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://pic.onlinewebfonts.com/thumbnails/icons_107378.svg"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Devesh Singh</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Organizer
                </div>
              </div>
            </figcaption>
          </figure>

          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor sit EventHub
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, magnam suscipit voluptatem repellat voluptate rerum eum sint dicta placeat veniam, velit tenetur vero distinctio fuga esse? Voluptatum placeat aspernatur accusamus.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://pic.onlinewebfonts.com/thumbnails/icons_107378.svg"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Devesh Singh</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Organizer
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
