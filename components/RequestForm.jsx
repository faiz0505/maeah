"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const formFields = [
  { name: "firstName", label: "First name", type: "text", required: true },
  { name: "lastName", label: "Last name", type: "text", required: true },
  { name: "email", label: "Work email", type: "email", required: true },
  { name: "jobTitle", label: "Job title", type: "text", required: true },
  { name: "companyName", label: "Company name", type: "text", required: true },
];

const companySizes = [
  "",
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1000+",
];

export default function RequestForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    companyName: "",
    companySize: "",
    consent: true,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    formFields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = "Please complete this required field.";
      }
    });
    if (!formData.companySize) {
      newErrors.companySize = "Please complete this required field.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit logic here
    console.log("Form submitted", formData);
  };

  return (
    <div className="bg-white p-4 shadow rounded-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        {formFields.map((field) => (
          <div key={field.name}>
            <input
              type={field.type}
              name={field.name}
              placeholder={`${field.label}*`}
              value={formData[field.name]}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors[field.name] ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}

        {/* Company Size Dropdown */}
        <div>
          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.companySize ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Company size*</option>
            {companySizes.slice(1).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {errors.companySize && (
            <p className="text-red-500 text-sm mt-1">{errors.companySize}</p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mr-2 mt-1"
          />
          <label htmlFor="consent" className="text-sm">
            BetterHelp may send me communications about its services and product
            offerings.
          </label>
        </div>

        {/* Submit Button */}
        <Button size={"xl"} className={"w-full rounded-full"}>Shedule A Demo</Button>
      </form>
    </div>
  );
}
