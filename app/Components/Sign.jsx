import React, { useState } from "react";

export default function Sign() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");

  const sendOtp = () => {
    if (!phoneNumber.match(/^\d{10}$/)) {
      setMessage("Please enter a valid 10-digit phone number.");
      return;
    }
    setMessage("OTP sent to your phone number.");
    setOtpSent(true);
  };

  // Simulate verifying OTP
  const verifyOtp = () => {
    if (otp.length !== 6) {
      setMessage("Please enter a 6-digit OTP.");
      return;
    }
    // For demo, accept any 6-digit OTP
    setMessage("Phone number verified successfully!");
    // You can add further logic here like redirect, etc.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

        {!otpSent ? (
          <>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="phone"
            >
              Enter your phone number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter 10-digit phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
              maxLength={10}
            />

            <button
              onClick={sendOtp}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md font-semibold transition"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="otp"
            >
              Enter OTP
            </label>
            <input
              id="otp"
              type="text"
              placeholder="6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
              maxLength={6}
            />

            <button
              onClick={verifyOtp}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md font-semibold transition"
            >
              Verify OTP
            </button>

            <button
              onClick={() => {
                setOtpSent(false);
                setOtp("");
                setMessage("");
              }}
              className="mt-4 w-full text-center text-sm text-gray-600 underline hover:text-teal-600"
            >
              Edit phone number
            </button>
          </>
        )}

        {message && (
          <p className="mt-4 text-center text-sm text-red-600">{message}</p>
        )}
      </div>
    </div>
  );
}
