import React from 'react';

function Contacts() {
  return (
    <main className="container">
      <h1 className="section-title">Контакты</h1>
      
      <div className="contacts-grid">
        <div className="contact-card">
          <h3>Адрес</h3>
          <p>г. Москва, ул. Образцовая, д. 15</p>
        </div>
        <div className="contact-card">
          <h3>Email</h3>
          <p>support@studyhub.ru</p>
          <p>info@studyhub.ru</p>
        </div>
        <div className="contact-card">
          <h3>Телефон</h3>
          <p>+7 (495) 123-45-67</p>
          <p>+7 (800) 555-33-22</p>
        </div>
        <div className="contact-card">
          <h3>Режим работы</h3>
          <p>Пн-Пт: 9:00 - 20:00</p>
          <p>Сб: 10:00 - 16:00</p>
        </div>
      </div>

      <h2 className="section-title">Напишите нам</h2>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem' }}>
        <div className="input-group">
          <label>Ваше имя</label>
          <input type="text" placeholder="Иван" />
        </div>
        <div className="input-group">
          <label>Email для ответа</label>
          <input type="email" placeholder="ivan@example.com" />
        </div>
        <div className="input-group">
          <label>Сообщение</label>
          <textarea rows="5" placeholder="Напишите ваш вопрос..."></textarea>
        </div>
        <button className="btn-primary">Отправить сообщение</button>
      </div>
    </main>
  );
}

export default Contacts;