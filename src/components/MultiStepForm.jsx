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
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-pink-400 p-4 md:p-8 ">
      <div className="mx-auto max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-black">
        <div className="flex flex-col md:flex-row">
          <Sidebar currentStep={currentStep} />
          <div className="flex-1 p-6 md:p-12">
            <CompanyForm
              onNext={handleNext}
              onPrevious={handlePrevious}
              currentStep={currentStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
