import { useState } from "react";
import Sidebar from "./Sidebar";
import CompanyForm from "./CompanyForm";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex justify-center items-center mx-auto p-20">
      <div className="md:w-11/12 border-4 border-black flex flex-col md:flex-row rounded-3xl bg-white">
        <Sidebar currentStep={currentStep} />

        <div className=" px-10 md:px-20 flex flex-col w-full rounded-r-3xl ">
          <div className="flex items-center justify-end">
            <span className="p-2 font-semibold text-sm text-gray-400">
              Having Trouble? <span className="text-blue-500">Get Help</span>
            </span>
          </div>

          <CompanyForm
            onNext={handleNext}
            onPrevious={handlePrevious}
            currentStep={currentStep}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
