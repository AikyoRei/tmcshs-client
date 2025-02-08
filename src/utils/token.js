import axios from 'axios';

export const verifyToken = async (token) => {
  try {
    const response = await axios.get('https://tmcshs-server.vercel.app/api/verify/', {
      headers: {
        Authorization: `Bearer ${token}`, // Send token in Authorization header
      },
    });

    console.log(response.data); // Log success message
    return true;
  } catch (error) {
    console.error('Token verification failed:', error.response ? error.response.data : error.message);
    return false;
  }
};
