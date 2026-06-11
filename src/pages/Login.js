import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Добро пожаловать в StudyHub</h2>
        <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Войдите, чтобы продолжить обучение</p>
        
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="your@email.com" />
        </div>
        
        <div className="input-group">
          <label>Пароль</label>
          <input type="password" placeholder="Введите пароль" />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
          <label>
            <input type="checkbox" /> Запомнить меня
          </label>
          <a href="#" style={{ color: '#4f46e5', textDecoration: 'none' }}>Забыли пароль?</a>
        </div>
        
        <Link to="/profile" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Войти</Link>
        
        <div className="auth-link">
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;