import API from "@/app/api/axios.js";

export async function signupUser(values) {
    try {
      const response = await API.post("/api/users/signup",values);
      const { token, userData } = response.data;
  
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
  
      console.log("User registered:", response.data);
      
      return  userData;
    } catch (error) {
      console.error("Sign Up error:", error);
      throw error; 
    }
  }
  