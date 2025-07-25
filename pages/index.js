import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate AI processing
    setTimeout(() => {
      setProcessing(false);
      setSubmitted(true);
    }, 3000); // 3-second simulated delay
  };

  return (
    <div>
      <Head>
        <title>SAM Registration Processing Assistance</title>
      </Head>
      <main className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          SAM Registration Processing Assistance
        </h1>

        {processing ? (
          <p className="text-blue-600 text-center">Processing your information with AI...</p>
        ) : submitted ? (
          <p className="text-green-600 text-center">
            ✅ Thank you! Your info has been received and is being reviewed.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="businessName" placeholder="Business Name" onChange={handleChange} required className="w-full p-2 border" />
            <input name="dba" placeholder="DBA (if any)" onChange={handleChange} className="w-full p-2 border" />
            <input name="uei" placeholder="UEI Number (or type 'Need one')" onChange={handleChange} required className="w-full p-2 border" />
            <input name="ein" placeholder="EIN / Tax ID" onChange={handleChange} required className="w-full p-2 border" />
            <input name="address" placeholder="Business Address" onChange={handleChange} required className="w-full p-2 border" />
            <input name="contactName" placeholder="Contact Name" onChange={handleChange} required className="w-full p-2 border" />
            <input name="contactEmail" type="email" placeholder="Contact Email" onChange={handleChange} required className="w-full p-2 border" />
            <input name="phone" placeholder="Phone Number" onChange={handleChange} required className="w-full p-2 border" />
            <input name="naics" placeholder="NAICS Codes" onChange={handleChange} className="w-full p-2 border" />
            <input name="entityType" placeholder="Entity Type (LLC, Corp, etc.)" onChange={handleChange} required className="w-full p-2 border" />
            <input name="cageCode" placeholder="CAGE Code (if any)" onChange={handleChange} className="w-full p-2 border" />
            <textarea name="comments" placeholder="Additional Comments or Instructions" onChange={handleChange} className="w-full p-2 border" />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Submit</button>
          </form>
        )}
      </main>
      <footer className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} SAM Registration Assistance. Not affiliated with the U.S. Government.
      </footer>
    </div>
  );
}
