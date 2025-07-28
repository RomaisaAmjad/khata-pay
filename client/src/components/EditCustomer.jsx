"use client";
import React, { useState, useEffect } from "react";

function EditCustomer({ customer, onClose, onUpdate, onCreate }) {
  const isEditMode = !!customer?.id;

  const [name, setName] = useState(customer?.name || "");
  const [phoneNumber, setPhoneNumber] = useState(customer?.phone_number || "");
  const [runningBalance, setRunningBalance] = useState(
    customer?.runningBalance || 0
  );

  useEffect(() => {
    if (customer) {
      setName(customer.name || "");
      setPhoneNumber(customer.phone_number || "");
      setRunningBalance(customer.runningBalance || 0);
    }
  }, [customer]);

  const handleSave = () => {
    const payload = {
      id: customer?.id,
      name,
      phone_number: phoneNumber,
      ...(isEditMode ? {} : { runningBalance: parseFloat(runningBalance) }),
    };

    if (isEditMode) {
      onUpdate(payload);
    } else {
      onCreate(payload);
    }
  };

  return (
    <div className=" fixed inset-0 bg-[rgba(249,245,245,0.56)] backdrop-blur-[0.5px] flex items-center justify-center z-50">
      <div className="ml-60 bg-white flex flex-col items-center justify-center p-3 rounded-sm shadow-2xl w-80 max-w-sm">
        <h2 className="text-lg font-bold mb-4 text-green-700">
          {isEditMode ? "Edit Customer" : "Add Customer"}
        </h2>

        <div >
          <div className="mb-3">
            <label className="text-xs">Name</label>
            <input
              style={{ fontSize: "13px" }}
              type="text"
              className="w-full px-3 rounded-[8px] border border-gray-300 text-xs leading-tight focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="block text-xs">Phone Number</label>
            <input
              style={{ fontSize: "13px" }}
              type="text"
              className="w-full px-3 rounded-[8px] border border-gray-300 text-xs leading-tight focus:outline-none  "
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {!isEditMode && (
            <div>
              <label className="block text-xs">Running Balance</label>
              <input
                style={{ fontSize: "13px" }}
                type="number"
                className="w-full px-3 rounded-[8px] border border-gray-300 text-xs leading-tight focus:outline-none "
                value={runningBalance}
                onChange={(e) => setRunningBalance(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className=" bg-gray-500 text-white rounded-[8px] hover:cursor-pointer hover:bg-gray-700 "
          >
            <span className="text-xs font-light px-2 py-1 flex items-center gap-1 " style={{fontFamily:"monospace"}}> Cancel record </span>
            
          </button>
          <button
            onClick={handleSave}
            className=" text-white  flex items-center :cursor-pointertext-xs"
          >
            <span style={{fontFamily:"monospace"}}>
            {isEditMode ? <span className="text-xs font-light px-2 py-1 flex items-center gap-1  bg-green-700 rounded-[8px]  hover:bg-green-800 hover:cursor-pointer">Save Changes</span> :<span className="flex bg-blue-900  hover:bg-blue-800  justify-center items-center gap-1 rounded-[8px] py-1 px-2 text-xs  hover:cursor-pointer">Create Record</span> }
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditCustomer;
