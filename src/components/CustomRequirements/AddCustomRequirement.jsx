import React, { useState } from "react";
import axios from "axios";
import "./CustomRequirements.css";
import { useSnackbar } from "notistack";
const axiosInstense = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const AddCustomRequirmentsForm = ({ onCloseForm }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [errorMessage, setErrorMessage] = useState(false);
  const [spinningLoader, setSpinningLoader] = useState(false);
  const [showOtherReligion, setShowOtherReligion] = useState(false);
  const [showOtherLanguage, setShowOtherLanguage] = useState(false);
  const [showOtherNationality, setShowOtherNationality] = useState(false);

  const handleNationalityChange = (event) => {
    setShowOtherNationality(event.target.value === "Other");
  };

  const handleOtherReligionChange = (event) => {
    setShowOtherReligion(event.target.value === "Other");
  };

  const handleOtherLanguageChange = (event) => {
    setShowOtherLanguage(event.target.checked);
  };

  const handleRequirementFormSubmit = async (event) => {
    event.preventDefault();
    setSpinningLoader(true);

    const formData = new FormData(event.currentTarget);

    if (!showOtherNationality) {
      formData.delete("otherNationality");
    }

    if (!showOtherReligion) {
      formData.delete("otherReligion");
    }

    if (!showOtherLanguage) {
      formData.delete("otherLanguages");
    }

    let isValid = true;
    const fieldsToValidate = [
      "name",
      "phoneNumber",
      "category",
      "nationality",
      "religion",
      "experience",
      "maritalStatus",
    ];

    fieldsToValidate.forEach((field) => {
      const fieldValue = formData.get(field)?.trim();
      console.log(`Field: ${field}, Value: ${fieldValue}`);
      if (!fieldValue) {
        isValid = false;
        setErrorMessage(true);
        enqueueSnackbar(`${field} is required`, {
          variant: "error",
        });
      }
    });

    if (!isValid) {
      setSpinningLoader(false);
      return;
    }

    try {
      const response = await axiosInstense.post(
        "api/v1/customRequirements",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 201) {
        console.log("Request submitted successfully");
        setSpinningLoader(false);
        onCloseForm();
        enqueueSnackbar("Request submitted successfully", {
          variant: "success",
        });
      } else {
        console.error("Request submission failed");
        setSpinningLoader(false);
        // onCloseForm();
        enqueueSnackbar("Request submission failed", {
          variant: "error",
        });
        setErrorMessage(true);
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      setSpinningLoader(false);
      // onCloseForm();
      setErrorMessage(true);
      enqueueSnackbar("Request submission failed", {
        variant: "error",
      });
    }
  };

  return (
    <>
      <div
        style={{ padding: "0.75rem !important" }}
        className="formOutline bg-[#F2F5FF] h-screen overflow-auto rounded-2xl shadow-lg"
      >
        <div className="flex items-center justify-between mb-8">
          <div className="md:text-2xl text-xl font-semibold">
            Add Custom Requirement
          </div>
          <div
            className="p-3 rounded-md bg-[#EBEBEB] cursor-pointer"
            onClick={onCloseForm}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 18L6 6"
                stroke="#CD2424"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 18L18 6"
                stroke="#CD2424"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className=" bg-[#EBEBEB] formMidInner rounded-xl shadow-lg">
          <div className="bg-[#F2F5FF] formInner rounded-lg">
            {errorMessage && (
              <div
                className="p-4 mb-4 w-full md:w-[26rem] text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">Error!</span> All Fields Required
              </div>
            )}

            <form onSubmit={handleRequirementFormSubmit}>
              <div className="mb-4 md:text-2xl text-base font-bold">
                Your Info
              </div>
              <div className="mb-4">
                <label class="form-label block text-xl">
                  Your Name <sapn className="text-red-700">*</sapn>
                </label>
                <input
                  name="name"
                  type="text"
                  class="w-full bg-[#E3E3E3] md:w-[26rem] h-[4rem] outline-none border-none rounded-lg px-2 py-2"
                />
              </div>
              <div className="mb-4">
                <label class="form-label block text-xl">
                  Your Phone Number <sapn className="text-red-700">*</sapn>
                </label>
                <input
                  name="phoneNumber"
                  type="text"
                  class="w-full bg-[#E3E3E3] md:w-[26rem] h-[4rem] outline-none border-none rounded-lg px-2 py-2"
                />
              </div>
              <div className="mb-4 md:text-2xl text-base font-bold">
                Requirements
              </div>
              <div className="mb-4">
                <label className="form-label block text-xl">Nationality</label>
                <select
                  type="text"
                  className="w-full bg-[#E3E3E3] md:w-[26rem] h-[4rem] outline-none border-none rounded-lg px-2 py-2"
                  name="nationality"
                  onChange={handleNationalityChange}
                >
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="India">India</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Other">Other</option>
                </select>
                {showOtherNationality && (
                  <div className="my-4">
                    <input
                      type="text"
                      id="otherNationalityInput"
                      className="w-full bg-[#E3E3E3] md:w-[26rem] h-[4rem] outline-none border-none rounded-lg px-2 py-2"
                      name="otherNationality"
                      placeholder="Enter Nationality"
                    />
                  </div>
                )}
              </div>
              <div></div>
              <div>
                <div className="mb-4">
                  <label className="form-label block text-xl">Religion</label>
                  <select
                    name="religion"
                    id="religionSelect"
                    className="w-full bg-[#E3E3E3] md:w-[26rem] h-[4rem] outline-none border-none rounded-lg px-2 py-2"
                    onChange={handleOtherReligionChange}
                  >
                    <option value="Muslim">Muslim</option>
                    <option value="Christian">Christian</option>
                    <option value="Other">Other</option>
                  </select>
                  {showOtherReligion && (
                    <div className="my-4">
                      <input
                        type="text"
                        id="otherReligionInput"
                        className="w-full bg-[#E3E3E3] md:w-[26rem] h-[4rem] outline-none border-none rounded-lg px-2 py-2"
                        name="otherReligion"
                        placeholder="Enter Religion"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label class="form-label block text-xl">Marital Status</label>
                <select
                  name="maritalStatus"
                  class="w-full bg-[#E3E3E3] md:w-[26rem] h-[4rem] outline-none border-none rounded-lg px-2 py-2"
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </div>

              <div class="mb-4">
                <label class="block text-xl">Applied For</label>
                <select
                  name="category"
                  class="w-full bg-[#E3E3E3] md:w-[26rem] h-[4rem] outline-none border-none rounded-lg px-2 py-2"
                >
                  <option value="Domestic Worker">Domestic Worker</option>
                  <option value="Barista">Barista</option>
                  <option value="Waitress">Waitress</option>
                  <option value="Nurses">Nurses</option>
                  <option value="Driver">Driver</option>
                  <option value="Cook">Cook</option>
                </select>
              </div>

              <div class="mb-4">
                <label class="block text-xl">Experience</label>
                <div className="flex flex-col items-center gap-4">
                  <select
                    name="experience"
                    class="w-full bg-[#E3E3E3] md:w-[26rem] h-[4rem] outline-none border-none rounded-lg px-2 py-2"
                  >
                    <option value="Experienced">Experienced</option>
                    <option value="New">New</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <label className="block text-xl">Languages</label>
                  <div className="w-full md:grid flex gap-2 items-center flex-wrap md:grid-cols-3  bg-[#E3E3E3] md:w-[26rem] h-[6rem] sm:h-[4rem] outline-none border-none rounded-lg px-2 py-2">
                    <div>
                      <input
                        className="mr-2"
                        type="checkbox"
                        id="Arabic"
                        name="languages[]"
                        value="Arabic"
                      />
                      <label for="Arabic">Arabic</label>
                    </div>
                    <div>
                      <input
                        className="mr-2"
                        type="checkbox"
                        id="english"
                        name="languages[]"
                        value="English"
                      />
                      <label for="english">English</label>
                    </div>
                    <div>
                      <input
                        className="mr-2"
                        type="checkbox"
                        id="hindi"
                        name="languages[]"
                        value="Hindi"
                      />
                      <label for="hindi">Hindi</label>
                    </div>
                    <div>
                      <input
                        className="mr-2"
                        type="checkbox"
                        id="nepali"
                        name="languages[]"
                        value="Nepali"
                      />
                      <label for="nepali">Nepali</label>
                    </div>
                    <div>
                      <input
                        className="mr-2"
                        type="checkbox"
                        id="Burmese"
                        name="languages[]"
                        value="Burmese"
                      />
                      <label for="Burmese">Burmese</label>
                    </div>
                    <div>
                      <input
                        className="mr-2"
                        type="checkbox"
                        id="Other"
                        value="Other"
                        name="languages[]"
                        onChange={handleOtherLanguageChange}
                      />
                      <label for="Other">Other</label>
                    </div>
                  </div>
                  {showOtherLanguage && (
                    <div>
                      <label htmlFor="Other">Other</label>
                      <div className="my-4 block">
                        <input
                          type="text"
                          id="otherLanguages"
                          className="w-full bg-[#E3E3E3] md:w-[26rem] h-[4rem] outline-none border-none rounded-lg px-2 py-2"
                          name="otherLanguages"
                          placeholder="Enter Other Language"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div class="mb-4">
                  <button className="w-full flex items-center justify-center text-sm font-semibold bg-[#F05D22] text-white md:w-[26rem] h-[4rem] outline-none border-none rounded-lg px-2 py-2">
                    {spinningLoader && (
                      <img
                        className="w-8"
                        src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
                        alt="spinning Loader"
                      />
                    )}
                    {!spinningLoader && "Send Request"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomRequirmentsForm;
