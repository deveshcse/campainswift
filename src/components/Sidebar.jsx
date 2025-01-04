import React from "react";
import { Check } from "lucide-react";

const steps = [
  { number: 1, title: "Company type" },
  { number: 2, title: "State" },
  { number: 3, title: "Business details" },
  { number: 4, title: "Team" },
  { number: 5, title: "Personal details" },
];

const Sidebar = ({ currentStep }) => {
  return (
    <div className="w-full md:w-96 bg-secondary p-8 rounded-l-3xl rounded-r-3xl">
      <div className="flex items-center mb-12">
        <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
          <img src="/public/logo.png" alt="" />
        </div>
        <span className="ml-3 text-xl font-semibold">InsideBox</span>
      </div>
      <div className="flex flex-row md:flex-col space-y-6">
        {steps.map((step) => (
          <div key={step.number} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                step.number < currentStep
                  ? "bg-green-500 border-green-500"
                  : step.number === currentStep
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            >
              {step.number < currentStep ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <span
                  className={`text-sm ${
                    step.number === currentStep
                      ? "text-blue-500 font-medium"
                      : "text-gray-900 font-medium"
                  }`}
                >
                  {step.number}
                </span>
              )}
            </div>
            <span
              className={`ml-3 ${
                step.number === currentStep
                  ? "text-blue-500 font-medium"
                  : "text-gray-900 font-medium"
              }`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
