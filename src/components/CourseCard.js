import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ id, title, students, rating, price, imageUrl, category }) {
  return (
    <Link to={`/course/${id}`} className="course-card">
      <div className="course-img" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="course-info">
        <div className="course-title">{title}</div>
        <div className="course-meta">{category ? `${category} • ` : ''}{students} студентов • {rating} ★</div>
        <div className="course-price">{price}</div>
      </div>
    </Link>
  );
}

export default CourseCard;