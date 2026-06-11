import React from 'react';
import CourseCard from '../components/CourseCard';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';

function Home() {
  const recommendedCourses = [
    { id: 1, title: 'Python для начинающих', students: '12,000+', rating: '4.8', price: 'Бесплатно', imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop', category: 'Программирование' },
    { id: 2, title: 'Веб-дизайн с нуля до PRO', students: '8,500+', rating: '4.9', price: '3 990 ₽', imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=200&fit=crop', category: 'Веб-дизайн' },
    { id: 3, title: 'Маркетинг 2025', students: '5,200+', rating: '4.7', price: '5 490 ₽', imageUrl: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=200&fit=crop', category: 'Маркетинг' },
    { id: 4, title: 'Аналитика данных', students: '3,800+', rating: '4.8', price: '4 490 ₽', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop', category: 'Аналитика' }
  ];

  const features = [
    { number: '5000+', title: 'Выпускников', description: 'Уже построили успешную карьеру' },
    { number: '98%', title: 'Довольных студентов', description: 'Рекомендуют нас друзьям' },
    { number: '30 дней', title: 'Гарантия возврата', description: 'На размышление' },
    { number: '24/7', title: 'Поддержка', description: 'Помощь в любое время' }
  ];

  return (
    <main className="container">
      <div className="banner">
        <h1>StudyHub — образование, которое меняет жизнь</h1>
        <p>1000+ курсов от ведущих экспертов. Учитесь в своём темпе</p>
        <Link to="/catalog" className="btn-primary">Начать учиться</Link>
      </div>

      <h2 className="section-title">Популярные направления</h2>
      <div className="categories">
        <Link to="/catalog" className="category">Программирование</Link>
        <Link to="/catalog" className="category">Веб-дизайн</Link>
        <Link to="/catalog" className="category">Маркетинг</Link>
        <Link to="/catalog" className="category">Аналитика</Link>
      </div>

      <h2 className="section-title">Рекомендуемые курсы</h2>
      <div className="courses-grid">
        {recommendedCourses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      <h2 className="section-title">Почему StudyHub?</h2>
      <div className="features-grid">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </main>
  );
}

export default Home;