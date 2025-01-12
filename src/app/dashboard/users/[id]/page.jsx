'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function UserDetails() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { id } = router.query; // Rota parametresini al

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/api/users/${id}`) // Backend API
        .then((response) => {
          setUser(response.data); // Kullanıcı detaylarını ayarla
        })
        .catch((error) => console.error('Kullanıcı detayı alınırken hata:', error));
    }
  }, [id]);

  if (!user) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <h1>Kullanıcı Detayları</h1>
      <p><strong>İsim:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
