import React from 'react';
import CourseCard from '../components/CourseCard';

function Profile() {
  const myCourses = [
    { id: 1, title: 'Python для начинающих', students: '12,000+', rating: '4.8', price: 'Бесплатно', imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop', category: 'Программирование', progress: 75 },
    { id: 2, title: 'Веб-дизайн с нуля до PRO', students: '8,500+', rating: '4.9', price: '3 990 ₽', imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=200&fit=crop', category: 'Веб-дизайн', progress: 30 }
  ];

  return (
    <main className="container">
      <div className="profile-header">
        <div className="profile-avatar">И</div>
        <div className="profile-info">
          <h2>Полина София</h2>
          <p>polinasofi@mail.ru</p>
          <p>На сайте с января 2025 года</p>
        </div>
      </div>

      <h2 className="section-title">Мои курсы</h2>
      <div className="courses-grid">
        {myCourses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-img" style={{ backgroundImage: `url(${course.imageUrl})` }}></div>
            <div className="course-info">
              <div className="course-title">{course.title}</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Прогресс: {course.progress}%</div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Настройки профиля</h2>
      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem' }}>
        <div className="input-group">
          <label>Сменить email</label>
          <input type="email" defaultValue="polinasofi@mail.ru" />
        </div>
        <div className="input-group">
          <label>Новый пароль</label>
          <input type="password" placeholder="Введите новый пароль" />
        </div>
        <button className="btn-primary">Сохранить изменения</button>
      </div>
    </main>
  );
}

export default Profile;