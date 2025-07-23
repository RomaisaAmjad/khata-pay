import API from "@/app/api/axios.js";

export async function loginUser(values) {
  try {
    const response = await API.post("/api/users/login", values);
    const { token, user } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    console.log("User is logged in:", response.data);
    return user; 
  } catch (error) {
    console.error("Login error:", error);

    const msg =
      error.response?.data?.message ||
      "Invalid username or password. Please try again.";
    throw new Error(msg);
  }
}
