import axiosInstance from './axios'; // axiosInstance'ı import et

export const loginUser = async (userLoginDTO) => {
  try {
    // Backend'e kullanıcı bilgilerini gönderiyoruz
    const response = await axiosInstance.post('/User/Login', null , {
      params: {
        email: userLoginDTO.email,
        password: userLoginDTO.password
      }
    }); 
    return response.data; // Backend'den dönen veriyi döndürüyoruz
  } catch (error) {
    console.error('Login error:', error); // Hata durumunu console'da yazdırıyoruz
    throw error; // Hata yönetimi
  }
};