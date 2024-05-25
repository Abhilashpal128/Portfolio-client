import axios from "axios";
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const SendEmail = async (inputObject) => {
  try {
    const response = await axios.post(
      `${API_URL.toString()}/send-mail`,
      inputObject
    );
    if (response.status === 200) {
      return { data: response.data, success: true, error: null };
    }
    return { data: null, success: false, error: null };
  } catch (error) {
    return { data: null, success: false, error: error };
  }
};
