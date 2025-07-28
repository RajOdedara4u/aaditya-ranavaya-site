import React from "react";
import FadeInSection from "./FadeInSeaction";
const YoutubeVideos = () => {
  const videos = [
    "https://www.facebook.com/watch/?v=1133140558259376",
    "https://www.facebook.com/watch/?v=374087711953647",
    "https://www.facebook.com/watch/?v=1507490773956132",
    "https://www.facebook.com/watch/?v=9872092526253041",
  ];

  return (
    <div className="px-4 bg-[#F8F3EC] py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            Preserving Charani Sahitya
            <br className="hidden md:block" />
            and Gujarati Folk Heritage
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-yellow-500 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-sm lg:max-w-md">
          "Through soulful performances and timeless poetry, Aaditya Ranavaya
          carries forward the legacy of Gujarat’s Charani Sahitya, inspiring a
          new generation to connect with their cultural roots."
        </p>
      </div>

      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {videos.map((video, index) => (
          <div key={index} className="relative overflow-hidden rounded shadow-lg">
            {/* Maintain 16:9 aspect ratio */}
            <FadeInSection>

            <div className="relative w-full pb-[150%]">
              <iframe
                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                  video
                )}&show_text=false`}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            </FadeInSection>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeVideos;
