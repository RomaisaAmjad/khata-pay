import API from "@/app/api/axios.js";

export async function signupUser(values) {
    try {
      const response = await API.post("/api/users/signup", values);
      const { token, user } = response.data;
  
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
  
      console.log("User registered:", response.data);
      
      return  user;
    } catch (error) {
      console.error("Sign Up error:", error);
      throw error; 
    }
  }
  