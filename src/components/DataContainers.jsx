import { useState } from "react";
import { formatJson } from "../utils/formatting.utils";
import { fetchJsonData } from "../utils/fetchJsonData";
import { FaTimes } from "react-icons/fa";
import {
  convertJsonToCsv,
  convertJsonToYaml,
  convertJsonToXml,
} from "../utils/convertJson.utils";

function DataContainers() {
  const [inputData, setInputData] = useState("");
  const [inputURL, setInputURL] = useState("");
  const [outputData, setOutputData] = useState("");
  const [indentLevel, setIndentLevel] = useState(2);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConvert, setIsOpenConvert] = useState(false);
  const [error, setError] = useState(null);
  const [conversionError, setConversionError] = useState(null);
  const openModalURL = () => setIsOpen(true);
  const closeModalURL = () => setIsOpen(false);
  const openModalConvert = () => setIsOpenConvert(true);
  const closeModalConvert = () => setIsOpenConvert(false);

  // Function to handle formatting JSON
  const handleFormatJson = () => {
    const formattedJson = formatJson(inputData, indentLevel);
    setOutputData(formattedJson);
  };

  // Function to handle fetching JSON data
  const handleFetchJson = async () => {
    const { data, error } = await fetchJsonData(inputURL);
    if (error) {
      setError(error);
      setInputURL("");
    } else {
      setError(null);
      setInputData(JSON.stringify(data, null, 2)); // Format the fetched JSON with 2 spaces
      // closeModalURL(); // Close the modal after fetching
    }
  };

  // Function to handle converting JSON to CSV or YAML or XML
  const handleConversion = (format) => {
    let convertedData;
    setConversionError(null); // Clear any previous error

    switch (format) {
      case "xml":
        convertedData = convertJsonToXml(inputData);
        break;
      case "csv":
        convertedData = convertJsonToCsv(inputData);
        break;
      case "yaml":
        convertedData = convertJsonToYaml(inputData);
        break;
      default:
        setConversionError("Invalid format selected.");
        return;
    }

    if (convertedData.startsWith("Error")) {
      setConversionError(convertedData);
    } else {
      setOutputData(convertedData);
      closeModalConvert(); // Close modal after successful conversion
    }
  };

  return (
    <>
      <div className="w-full flex flex-row space-x-2 items-center px-8 py-8 mx-auto">
        <textarea
          className="w-[40%] h-[500px] mx-auto p-4 bg-[#212121] text-white text-sm font-mono border border-gray-700  focus:outline-none focus:border-transparent rounded-md"
          placeholder="Paste your JSON here..."
          wrap="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <div className="w-[20%] flex flex-col justify-center space-y-6 items-center bg-white h-96 mx-auto">
          <button
            onClick={openModalURL}
            className="w-[75%] bg-[#212121] hover:bg-[#212121]/90 text-white text-sm font-mono focus:outline-none focus:border-transparent p-4 rounded-md"
          >
            Fetch JSON
          </button>
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
              <div className="bg-[#212121] w-11/12 max-w-lg mx-auto p-6 rounded-lg shadow-lg relative">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  onClick={closeModalURL}
                >
                  <FaTimes className="w-5 h-5" />
                </button>

                {/* Modal Content */}
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                    Enter URL to fetch data
                  </h2>

                  <input
                    type="text"
                    className="w-full p-2 bg-[#212121] text-white text-sm font-mono border border-gray-700  focus:outline-none focus:border rounded-md"
                    placeholder="Enter URL here..."
                    value={inputURL}
                    onChange={(e) => setInputURL(e.target.value)}
                  />

                  <button
                    className="mt-4 w-full px-4 py-2 bg-gray-700/50 font-semibold text-white rounded-md hover:bg-gray-700"
                    onClick={handleFetchJson}
                  >
                    Fetch
                  </button>
                  {error && <p className="mt-2 text-red-500">{error}</p>}
                </div>
              </div>
            </div>
          )}
          <button
            onClick={openModalConvert}
            className="w-[75%] bg-[#212121] hover:bg-[#212121]/90 text-white text-sm font-mono focus:outline-none focus:border-transparent p-4 rounded-md"
          >
            Convert Data
          </button>
          {isOpenConvert && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
              <div className="bg-[#212121] w-11/12 max-w-lg mx-auto p-6 rounded-lg shadow-lg relative">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  onClick={closeModalConvert}
                >
                  <FaTimes className="w-5 h-5" />
                </button>

                {/* Modal Content */}
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                    Select Format to Convert
                  </h2>
                  <div className="flex flex-col space-y-4">
                    <button
                      className="px-4 py-2 bg-gray-700/50 font-semibold text-white rounded-md hover:bg-gray-700"
                      onClick={() => handleConversion("xml")}
                    >
                      Convert to XML
                    </button>
                    <button
                      className="px-4 py-2 bg-gray-700/50 font-semibold text-white rounded-md hover:bg-gray-700"
                      onClick={() => handleConversion("csv")}
                    >
                      Convert to CSV
                    </button>
                    <button
                      className="px-4 py-2 bg-gray-700/50 font-semibold text-white rounded-md hover:bg-gray-700"
                      onClick={() => handleConversion("yaml")}
                    >
                      Convert to YAML
                    </button>
                  </div>
                  {conversionError && (
                    <p className="mt-4 text-red-500">{conversionError}</p>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="relative inline-block w-[75%]">
            <select
              className="block w-full pl-10 p-2 bg-[#212121] text-white rounded-full appearance-none focus:outline-none focus:border-transparent pr-10"
              value={indentLevel}
              onChange={(e) => setIndentLevel(parseInt(e.target.value))}
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
              <option value={8}>8 spaces</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <button
            onClick={handleFormatJson}
            className="w-[75%] bg-[#212121]  hover:bg-[#212121]/90 text-white text-sm font-mono  focus:outline-none focus:border-transparent p-4 rounded-md"
          >
            Format
          </button>
          <button className="w-[75%] bg-[#212121]  hover:bg-[#212121]/90 text-white text-sm font-mono  focus:outline-none focus:border-transparent p-4 rounded-md">
            Download
          </button>
        </div>
        <textarea
          className="w-[40%] h-[500px] mx-auto p-4 bg-[#212121] text-white text-sm font-mono focus:outline-none focus:border-transparent rounded-md"
          placeholder="Formatted JSON will appear here..."
          wrap="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          value={outputData}
          onChange={(e) => setOutputData(e.target.value)}
        />
      </div>
    </>
  );
}

export default DataContainers;
