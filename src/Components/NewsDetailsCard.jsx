import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  if (!news) return <p>No news data available.</p>;

  const { title, image_url, details, author, category_id } = news;
  const publishedDate = author?.published_date
    ? new Date(author.published_date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Unknown date';

  return (
    <div className="card bg-base-100 shadow-md p-4">
      <figure>
        <img src={image_url} alt={title} className="rounded-lg w-full object-cover max-h-[400px]" />
      </figure>
      <div className="card-body px-0">
        <h2 className="card-title text-xl lg:text-2xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">
          {publishedDate} |{' '}
          <span className="text-gray-400">by {author?.name || 'Unknown author'}</span>
        </p>
        <p className="text-base text-gray-700 leading-relaxed">{details}</p>
        <div className="card-actions mt-6">
          <Link to={`/category/${category_id}`}>
            <button className="btn btn-secondary">← All news in this category</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
