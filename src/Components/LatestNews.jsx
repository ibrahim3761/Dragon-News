import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="p-3 flex items-center gap-4 bg-base-200 cursor-pointer">
      <p className="text-base-100 bg-secondary p-3">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={50}>
        <p className="font-semibold">
         Match Highlights: Germany vs Spain — as it happened!
        </p>
        <p className="font-semibold">
         Match Highlights: Germany vs Spain — as it happened!
        </p>
        <p className="font-semibold">
         Match Highlights: Germany vs Spain — as it happened!
        </p>
        
      </Marquee>
    </div>
  );
};

export default LatestNews;
