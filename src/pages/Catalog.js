import React from 'react';
import CourseCard from '../components/CourseCard';

function Catalog() {
  const allCourses = [
    { id: 1, title: 'Python для начинающих', students: '12,000+', rating: '4.8', price: 'Бесплатно', imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop', category: 'Программирование' },
    { id: 2, title: 'Веб-дизайн с нуля до PRO', students: '8,500+', rating: '4.9', price: '3 990 ₽', imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=200&fit=crop', category: 'Веб-дизайн' },
    { id: 3, title: 'Маркетинг 2025', students: '5,200+', rating: '4.7', price: '5 490 ₽', imageUrl: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=200&fit=crop', category: 'Маркетинг' },
    { id: 4, title: 'Аналитика данных', students: '3,800+', rating: '4.8', price: '4 490 ₽', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop', category: 'Аналитика' },
    { id: 5, title: 'JavaScript для начинающих', students: '9,100+', rating: '4.8', price: 'Бесплатно', imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=200&fit=crop', category: 'Программирование' },
    { id: 6, title: 'SMM-менеджер', students: '4,500+', rating: '4.7', price: '4 990 ₽', imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=200&fit=crop', category: 'Маркетинг' }
  ];

  return (
    <main className="container">
      <h1 className="section-title">Все курсы</h1>
      
      <h3>Категории</h3>
      <div className="categories">
        <a href="#" className="category">Все</a>
        <a href="#" className="category">Программирование</a>
        <a href="#" className="category">Веб-дизайн</a>
        <a href="#" className="category">Маркетинг</a>
        <a href="#" className="category">Аналитика</a>
      </div>

      <div className="courses-grid">
        {allCourses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </main>
  );
}

export default Catalog;