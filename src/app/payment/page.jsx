"use client";

import BackButton from "@/components/BackButton";
import axios, { AxiosError, isAxiosError } from "axios";
import { LoaderCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PaymentPage = () => {
  const params = useSearchParams();
  const sendTo = params.get("to");

  const [amount, setAmount] = useState("");
  const [receiver, setReceiver] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handlePayment = () => {
    // Add your payment logic here
    console.log(`Paying ${amount} coins`);
  };

  useEffect(() => {
    if (!sendTo) return;

    setLoading(true);

    async function getReceiverDetails() {
      try {
        const res = await axios.get(`/api/payment/details?sendTo=${sendTo}`);
        if (res.data?.success) {
          setReceiver(res.data?.data);
        }
      } catch (error) {
        if (isAxiosError(error)) {
          setError(
            error.response?.data?.message || "Error getting receiver details"
          );
        } else {
          setError("Something went wrong. Please try again");
        }
      } finally {
        setLoading(false);
      }
    }

    getReceiverDetails();
  }, [sendTo]);

  if (loading)
    return (
      <div className="min-h-screen flex flex-col">
        <BackButton />
        <div className="flex-grow flex justify-center items-center">
          <LoaderCircle className="animate-spin text-purple-400 w-6 h-6 mr-2" />
          <div>
            <p className="text-black">Getting receiver details</p>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex flex-col">
        <BackButton />
        <div className="flex-grow flex justify-center items-center">
          <div>
            <p className="text-black">{error}</p>
          </div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col">
      <BackButton />
      <div className="flex-grow flex justify-center items-center">
        <div className="mx-4 max-w-md bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg rounded-lg p-8">
          {/* Receiver's Name */}
          <h2 className="text-2xl text-white font-bold mb-6">
            Paying to <span>{receiver?.name}</span>
          </h2>
          {/* Amount Input */}
          <div className="mb-4">
            <label className="block text-white text-lg font-semibold mb-2">
              Enter amount to transfer
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Amount in coins"
            />
          </div>
          {/* Pay Button */}
          <button
            onClick={handlePayment}
            className="w-full bg-yellow-300 text-purple-700 font-bold py-3 rounded-md hover:bg-yellow-400 transition duration-300"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
