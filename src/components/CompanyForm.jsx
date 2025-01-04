import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CompanyForm = ({ onNext, onPrevious, currentStep }) => {
  return (
    <div className="mt-5">
      <h1 className="text-3xl font-semibold mb-2">About your company</h1>
      <p className="text-gray-500 mb-8 ">
        Enter detailed information about your company.
      </p>

      <div className="space-y-6">
        <div className="relative group ">
          <label className="absolute -top-2.5 left-2 px-1 bg-white text-sm font-medium text-gray-700  group-focus-within:text-blue-500">
            Company name
          </label>
          <Input
            placeholder="Enter company name"
            className="w-full pt-1 py-6 placeholder:italic "
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group ">
            <label className="absolute -top-2.5 left-2 px-1 bg-white text-sm font-medium text-gray-700 group-focus-within:text-blue-500">
              Type
            </label>
            <Select>
              <SelectTrigger className="pt-1 py-6 italic">
                <SelectValue
                  placeholder="Select type"
                  className="placeholder-italic"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="corporation">Corporation</SelectItem>
                <SelectItem value="llc">LLC</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative group">
            <label className="absolute -top-2.5 left-2 px-1 bg-white text-sm font-medium text-gray-700 group-focus-within:text-blue-500">
              Company size
            </label>
            <Select>
              <SelectTrigger className="pt-1 py-6 italic">
                <SelectValue placeholder="Choose the size of your company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-500 employees</SelectItem>
                <SelectItem value="501+">501+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="relative group">
          <Input
            placeholder="Address"
            className="w-full pt-1 py-6 placeholder:text-gray-700 font-medium "
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <label className="absolute -top-2.5 left-2 px-1 bg-white text-sm font-medium text-gray-700 group-focus-within:text-blue-500">
              Country
            </label>
            <Select>
              <SelectTrigger className="py-6 italic">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative group">
            <Input
              placeholder="City"
              className="pt-1 py-6 placeholder:text-gray-700 font-medium  "
            />
          </div>
        </div>

        <div className="flex justify-between pt-8">
          <Button
            variant="outline"
            className="border-2 border-gray-600"
            onClick={onPrevious}
            disabled={currentStep === 1}
          >
            Previous step
          </Button>
          <Button className="" onClick={onNext}>
            Next step
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
