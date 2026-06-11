import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Создайте аккаунт</h2>
        <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Начните учиться бесплатно</p>
        
        <div className="input-group">
          <label>Имя и фамилия</label>
          <input type="text" placeholder="Иван Петров" />
        </div>
        
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="ivan@example.com" />
        </div>
        
        <div className="input-group">
          <label>Пароль</label>
          <input type="password" placeholder="Придумайте пароль" />
        </div>
        
        <div className="input-group">
          <label>Подтвердите пароль</label>
          <input type="password" placeholder="Повторите пароль" />
        </div>
        
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <input type="checkbox" /> Я принимаю условия пользовательского соглашения
        </label>
        
        <Link to="/profile" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Зарегистрироваться</Link>
        
        <div className="auth-link">
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;