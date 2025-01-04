import Home from "./components/Home";
import MultiStepForm from "@/components/MultiStepForm";
function App() {
  return (
    <>
      <div className="relative bg-blue-700 max-h-screen">
        <div className="relative z-10  ">
          <MultiStepForm />
        </div>
        <div className="bg-red-500 h-[600px] w-[600px] absolute rounded-full left-0 bottom-0  transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="absolute bg-gray-50 w-screen h-[300px]"></div>
    </>
  );
}

export default App;
