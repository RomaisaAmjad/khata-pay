
import API from "@/app/api/axios.js";

export async function loginUser(values, router) {
  try {
    const response = await API.post("/api/users/login", values);

    const { token, userData } = response.data; 
    
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData)); 

    console.log("User is logged in:", response.data);
    return userData;
  } catch (error) {
    console.error("Login error:", error);
    const msg =
      error.response?.data?.message || "Invalid username or password.";
    throw new Error(msg);
  }
}
