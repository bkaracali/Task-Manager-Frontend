import {baseURL} from '../../../lib/axios';

export const loginUser = async (userLoginDTO) => {
    try {
      const response = await api.post('/User/Login', userLoginDTO);
      return response.data;
    } catch (error) {
      throw error;
    }
  };