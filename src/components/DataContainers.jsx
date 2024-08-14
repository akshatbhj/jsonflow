import { useState } from "react";
import { formatJson } from "../utils/formatting.utils";

function DataContainers() {
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");
  const [indentLevel, setIndentLevel] = useState(2);

  // Function to handle formatting JSON
  const handleFormatJson = () => {
    const formattedJson = formatJson(inputData, indentLevel);
    setOutputData(formattedJson);
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
          <button className="w-[75%] bg-[#212121] hover:bg-[#212121]/90 text-white text-sm font-mono focus:outline-none focus:border-transparent p-4 rounded-md">
            Upload Data
          </button>
          <button className="w-[75%] bg-[#212121] hover:bg-[#212121]/90 text-white text-sm font-mono focus:outline-none focus:border-transparent p-4 rounded-md">
            Validate
          </button>
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
