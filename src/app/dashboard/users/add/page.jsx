'use client';
import { useState } from 'react';
import axios from 'axios';

export default function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/users', {
        name,
        email,
      });

      if (response.status === 201) {
        alert('Kullanıcı başarıyla eklendi!');
        setName('');
        setEmail('');
      }
    } catch (error) {
      console.error('Kullanıcı eklenirken hata:', error);
      alert('Kullanıcı eklenirken bir hata oluştu!');
    }
  };

  return (
    <div>
      <h2>Yeni Kullanıcı Ekle</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="İsim"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
}
