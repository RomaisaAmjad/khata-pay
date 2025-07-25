"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getCustomersFromAPI,
  deleteCustomerById,
  updateCustomerById,
  createCustomer,
} from "@/services/customerHandling.services";
import EditCustomer from "@/components/EditCustomer";
import { Menu, ActionIcon, UnstyledButton,rem } from "@mantine/core";
import { IconDots, IconEdit, IconTrash } from "@tabler/icons-react";
import { TbPlus } from "react-icons/tb";

function getStoredUser() {
  if (typeof window === "undefined") return null;
  const userData = localStorage.getItem("user");
  if (!userData || userData === "undefined") return null;
  try {
    return JSON.parse(userData);
  } catch (err) {
    console.error("Failed to parse user:", err);
    return null;
  }
}

export default function CustomersPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = getStoredUser();

    if (!token || !storedUser) {
      alert("Please log in first");
      router.push("/login");
    } else {
      setUser(storedUser);
      setCheckingAuth(false);
    }
  }, [router]);

  useEffect(() => {
    if (user) getCustomersFromAPI(setCustomers);
  }, [user]);

  if (checkingAuth)
    return <div className="text-center text-green-600">Loading...</div>;

  return (
    <div className=" bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-md font-bold text-green-700">Customers</h1>
        <button
          onClick={() =>
            setEditingCustomer({
              name: "",
              phone_number: "",
              runningBalance: 0,
            })
          }
          className="text-green-600 text-2xl font-extrabold hover:cursor-pointer"
        >
          <TbPlus />
        </button>
      </div>

      {customers.length === 0 ? (
        <p className="text-gray-900 text-center mt-10 font-medium">
          No customers found
        </p>
      ) : (
        <ul className="grid md:grid-cols-1 gap-1">
          {customers.map((customer) => (
            <li key={customer.id} className="p-2 bg-white shadow rounded">
              <div className="flex justify-between items-start ">
                <div>
                  <p className="text-xs">{customer.name}</p>
                  <p className="text-xs text-gray-600">
                    Phone: {customer.phone_number}
                  </p>
                  <p className="text-xs font-medium">
                    Running Balance: Rs. {customer.runningBalance} 
                  </p>
                </div>

                <Menu shadow="xl" width={200} position="bottom-end">
                  <Menu.Target>
                    <UnstyledButton className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-500 transition-colors">
                      <div className="text-left hidden sm:block"></div>
                      <IconDots size={16} className="text-gray-400" />
                    </UnstyledButton>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item
                      color="blue"
                      leftSection={
                        <IconEdit style={{ width: rem(14), height: rem(14) }} />
                      }
                      onClick={() => setEditingCustomer(customer)}
                    >
                      <p>Edit</p>
                    </Menu.Item>
                    <Menu.Item
                      color="red"
                      leftSection={
                        <IconTrash style={{ width: rem(14), height: rem(14) }} />
                      }
                      onClick={() =>
                        deleteCustomerById(customer.id, setCustomers)
                      }
                    >
                      <p>Delete</p>
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </li>
          ))}
        </ul>
      )}

      {editingCustomer && (
        <EditCustomer
          customer={editingCustomer}
          onClose={() => setEditingCustomer(null)}
          onUpdate={(updated) =>
            updateCustomerById(updated, setCustomers, () =>
              setEditingCustomer(null)
            )
          }
          onCreate={(newCustomer) =>
            createCustomer(newCustomer, setCustomers, () =>
              setEditingCustomer(null)
            )
          }
        />
      )}
    </div>
  );
}
