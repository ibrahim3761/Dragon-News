import React from "react";
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    details,
    image_url,
    author,
    total_view,
    rating,
  } = news;

  return (
    <div className="card bg-base-100 shadow-sm  rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-base-200 rounded-t-md">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">{author.name}</p>
            <p className="text-sm text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <button className="hover:text-gray-700">
            <FaRegBookmark />
          </button>
          <button className="hover:text-gray-700">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 py-2">
        <img src={image_url} alt="news" className="rounded-md w-[650px]" />
      </figure>

      {/* Details */}
      <div className="px-4 text-sm text-gray-700">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...{" "}
            <Link to={`/news-details/${id}`} className="text-red-500 font-medium cursor-pointer">
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-4 border-t text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-800 ml-2">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
