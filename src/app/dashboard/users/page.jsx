'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/users') // Backend API
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Kullanıcılar alınırken hata:', error));
  }, []);

  return (
    <div>
      <h1>Kullanıcı Listesi</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.name} - {user.email}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/users/add">
        <button>Yeni Kullanıcı Ekle</button>
      </Link>
    </div>
  );
}
