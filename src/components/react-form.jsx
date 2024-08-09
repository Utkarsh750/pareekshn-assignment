import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { states } from "../../public/data";
import { validateDate } from "../utils/calwnd";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, dirtyFields },
  } = useForm();

  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    setSubmittedData(data);
    setTimeout(() => {
      reset();
      setSubmittedData(null);
    }, 10000);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-slate-200 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">React Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name:
          </label>
          <input
            {...register("firstName", {
              required: "First Name is required",
              maxLength: {
                value: 20,
                message: "First Name cannot exceed 20 characters",
              },
            })}
            placeholder="First Name"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
              touchedFields.firstName
                ? dirtyFields.firstName
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-yellow-500 bg-yellow-50"
                : "border-gray-300 bg-white"
            } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name:
          </label>
          <input
            {...register("lastName", {
              required: "Last Name is required",
              maxLength: {
                value: 20,
                message: "Last Name cannot exceed 20 characters",
              },
            })}
            placeholder="Last Name"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
              touchedFields.lastName
                ? dirtyFields.lastName
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-yellow-500 bg-yellow-50"
                : "border-gray-300 bg-white"
            } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            type="email"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
              touchedFields.email
                ? dirtyFields.email
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-yellow-500 bg-yellow-50"
                : "border-gray-300 bg-white"
            } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone:
          </label>
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            })}
            placeholder="Phone"
            type="tel"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
              touchedFields.phone
                ? dirtyFields.phone
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-yellow-500 bg-yellow-50"
                : "border-gray-300 bg-white"
            } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date:
          </label>
          <input
            {...register("date", {
              required: "Date is required",
              validate: validateDate,
            })}
            type="date"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
              touchedFields.date
                ? dirtyFields.date
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-yellow-500 bg-yellow-50"
                : "border-gray-300 bg-white"
            } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            State:
          </label>
          <select
            {...register("state", {
              required: "State is required",
            })}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
              touchedFields.state
                ? dirtyFields.state
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-yellow-500 bg-yellow-50"
                : "border-gray-300 bg-white"
            } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          >
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state.id} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 p-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Submitted Data:
          </h3>
          <pre className="bg-gray-100 p-4 rounded-md">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default MyForm;
