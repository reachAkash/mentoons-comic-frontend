import { Toaster } from "sonner"
import Router from "./Routes"
import ScrollToTop from "./components/comics/ScrollToTop"
import { useAuth } from "@clerk/clerk-react"
import axios from "axios"

const App = () => {
  const { getToken } = useAuth();
  const getUserData = async () => {
    const token = await getToken();
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    try {
      const response = await axios.get('http://localhost:4000/api/v1/user/all-users', { headers });
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };
  getUserData();
  return (
    <>
      <ScrollToTop />
      <Toaster position="top-right" closeButton />
      <Router />
    </>
  );
}

export default App
