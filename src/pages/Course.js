import React from 'react';
import { useParams } from 'react-router-dom';

function Course() {
  const { id } = useParams();
  
  // Для простоты используем статичные данные, в реальном проекте можно загружать по id
  const coursesData = {
    1: {
      title: 'Python для начинающих',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=300&fit=crop',
      duration: '8 недель',
      level: 'Начинающий',
      students: '12,000+',
      rating: '4.8',
      description: 'Изучите Python с нуля: от основ синтаксиса до создания первых проектов. Курс подходит для абсолютных новичков в программировании.',
      program: [
        'Модуль 1: Введение в Python',
        'Модуль 2: Переменные и типы данных',
        'Модуль 3: Условные операторы',
        'Модуль 4: Циклы и итерации',
        'Модуль 5: Функции и модули',
        'Модуль 6: Работа с файлами',
        'Модуль 7: Финальный проект'
      ],
      teacher: { name: 'Алексей Иванов', bio: 'Senior Python Developer с 8-летним опытом. Автор популярного YouTube-канала о программировании.' },
      reviews: [
        { text: 'Отличный курс! Всё объясняется доступно и понятно. После курса смог устроиться на первую работу.', author: 'Мария, выпускница' },
        { text: 'Хорошая база для начинающих. Много практики и домашних заданий. Рекомендую!', author: 'Дмитрий, студент' }
      ]
    },
    2: {
      title: 'Веб-дизайн с нуля до PRO',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=300&fit=crop',
      duration: '10 недель',
      level: 'Средний',
      students: '8,500+',
      rating: '4.9',
      description: 'Полный курс по веб-дизайну: от основ Figma до сложных анимаций.',
      program: ['Модуль 1: Основы дизайна', 'Модуль 2: Figma', 'Модуль 3: Прототипирование', 'Модуль 4: Адаптивный дизайн'],
      teacher: { name: 'Елена Смирнова', bio: 'Дизайнер с 6-летним опытом, работала в крупных IT-компаниях.' },
      reviews: [{ text: 'Курс просто огонь!', author: 'Анна' }]
    }
  };

  const course = coursesData[id] || coursesData[1];

  return (
    <main className="container">
      <div className="course-hero">
        <img src={course.image} style={{ width: '100%', borderRadius: '1rem', marginBottom: '1.5rem' }} alt={course.title} />
        <h1>{course.title}</h1>
        <div className="course-details">
          <span className="detail-badge">{course.duration}</span>
          <span className="detail-badge">{course.level}</span>
          <span className="detail-badge">{course.students} студентов</span>
          <span className="detail-badge">Рейтинг {course.rating}</span>
        </div>
        <p style={{ margin: '1rem 0' }}>{course.description}</p>
        <a href="/register" className="btn-primary">Записаться на курс</a>
      </div>

      <h2>О курсе</h2>
      <p>{course.description}</p>

      <h2>Программа курса</h2>
      <ul style={{ margin: '1rem 0 1rem 2rem' }}>
        {course.program.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2>Преподаватель</h2>
      <div className="teacher-card">
        <div className="teacher-avatar">{course.teacher.name.charAt(0)}</div>
        <div>
          <h3>{course.teacher.name}</h3>
          <p>{course.teacher.bio}</p>
        </div>
      </div>

      <h2>Отзывы студентов</h2>
      {course.reviews.map((review, idx) => (
        <div className="review-card" key={idx}>
          <p>"{review.text}"</p>
          <small>— {review.author}</small>
        </div>
      ))}
    </main>
  );
}

export default Course;