import axiosInstance from './axios';

export const loginUser = async (userLoginDTO) => {
  try {
    const response = await axiosInstance.post('/User/Login', userLoginDTO);
    return response.data; // Backend'in döndüğü token veya kullanıcı bilgisi
  } catch (error) {
    console.error('Login error:', error);
    throw error; // Hata yönetimi
  }
};
