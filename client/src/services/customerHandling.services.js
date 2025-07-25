import API from "@/app/api/axios.js";

export const getCustomersFromAPI = async (setCustomers) => {
  const token = localStorage.getItem("token");
  try {

    const res = await API.get('/api/customers',{
      headers: { Authorization: `Bearer ${token}` },
    });
    setCustomers(res.data);
  } catch (err) {
    console.error("Fetch failed:", err);
  }
};

export const deleteCustomerById = async (id, setCustomers) => {
  const token = localStorage.getItem("token");
  try {
    await API.delete(`/api/customers/${id}`,{
      headers: { Authorization: `Bearer ${token}` },
    });
    getCustomersFromAPI(setCustomers);
  } catch (err) {
    console.error("Delete failed:", err);
  }
};

export const updateCustomerById = async (updatedCustomer, setCustomers, onSuccess) => {
  const token = localStorage.getItem("token");
  try {
    await API.put(`/api/customers/${updatedCustomer.id}`, updatedCustomer,{
      headers: { Authorization: `Bearer ${token}` },
    });
    getCustomersFromAPI(setCustomers);
    onSuccess();
  } catch (err) {
    console.error("Update failed:", err);
  }
};

export const createCustomer = async (newCustomer, setCustomers, onSuccess) => {
  const token = localStorage.getItem("token");
  try {
    await API.post(`/api/customers`, newCustomer,{
      headers: { Authorization: `Bearer ${token}` },
    });
    getCustomersFromAPI(setCustomers);
    onSuccess();
  } catch (err) {
    console.error("Create failed:", err);
  }
};
