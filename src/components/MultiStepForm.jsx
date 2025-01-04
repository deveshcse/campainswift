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
      <div className=" border-4 border-black flex w-11/12 rounded-3xl overflow-hidden bg-white">
        <Sidebar currentStep={currentStep} />

        <div className="realtive w-full mx-20 md:p-12">

          <span className="absolute top-24 right-40 p-4 text-gray-400 font-semibold text-sm">Having Trouble? <span className="text-blue-500">Get Help</span></span>

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
