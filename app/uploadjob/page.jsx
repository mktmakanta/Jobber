"use client";

import { useState } from "react";

export default function JobUpload() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "Remote", // Default to Remote
    jobType: "Full-time",
    payMin: "",
    payMax: "",
    urgency: "",
    postedTime: new Date().toLocaleString(),
    description: [""],
    icon: null,
    specificLocation: "", // Additional field for Onsite location
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0], // Save the first file from the input (if any)
    }));
  };

  const handleDescriptionChange = (index, value) => {
    const updatedDescription = [...formData.description];
    updatedDescription[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      description: updatedDescription,
    }));
  };

  const addDescription = () => {
    setFormData((prevData) => ({
      ...prevData,
      description: [...prevData.description, ""],
    }));
  };

  const removeDescription = (index) => {
    const updatedDescription = formData.description.filter(
      (_, i) => i !== index
    );
    setFormData((prevData) => ({
      ...prevData,
      description: updatedDescription,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure to set the posted time in the formData
    const currentTime = new Date().toLocaleString();
    setFormData((prevData) => ({
      ...prevData,
      postedTime: currentTime,
    }));

    console.log("Job data submitted:", formData);
    // Add your logic to send data to your backend or save it locally
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md mt-10 ring-1 ring-slate-200/70">
      <h2 className="text-2xl font-semibold text-center mb-4">Upload Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Existing Fields */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Location Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <select
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>

          {/* Show input field for specific location if Onsite is selected */}
          {formData.location === "Onsite" && (
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">
                Specific Location
              </label>
              <input
                type="text"
                name="specificLocation"
                value={formData.specificLocation}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter the onsite location"
              />
            </div>
          )}
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Type
          </label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Temporary">Temporary</option>
          </select>
        </div>

        {/* Pay Min & Pay Max */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Pay Min
            </label>
            <input
              type="number"
              name="payMin"
              value={formData.payMin}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Pay Max
            </label>
            <input
              type="number"
              name="payMax"
              value={formData.payMax}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        {/* urgency Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Urgency
          </label>
          <input
            type="text"
            name="urgency"
            value={formData.urgency}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        {/* post time  */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Posted Time
          </label>
          <input
            type="text"
            name="postedTime"
            value={formData.postedTime}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          {formData.description.map((desc, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                value={desc}
                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              {formData.description.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeDescription(index)}
                  className="p-2 bg-red-500 text-white rounded-md"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addDescription}
            className="mt-2 p-2 bg-blue-500 text-white rounded-md"
          >
            Add Description
          </button>
        </div>

        {/* Icon upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Icon
          </label>
          <input
            type="file"
            name="icon"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Upload Job
        </button>
      </form>
    </section>
  );
}
