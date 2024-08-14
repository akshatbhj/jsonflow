import { useState } from "react";

function DataContainers() {
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");

  // Function to handle formatting JSON
  const handleFormatJson = () => {
    try {
      const parsedJson = JSON.parse(inputData);
      const formattedJson = JSON.stringify(parsedJson, null, 2);
      setOutputData(formattedJson);
    } catch (error) {
      setOutputData("Invalid JSON", +error);
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
          <button className="w-[75%] bg-[#212121] hover:bg-[#212121]/90 text-white text-sm font-mono focus:outline-none focus:border-transparent p-4 rounded-md">
            Upload Data
          </button>
          <button className="w-[75%] bg-[#212121] hover:bg-[#212121]/90 text-white text-sm font-mono border border-gray-700  focus:outline-none focus:border-transparent p-4 rounded-md">
            Validate
          </button>
          <button
            onClick={handleFormatJson}
            className="w-[75%] bg-[#212121]  hover:bg-[#212121]/90 text-white text-sm font-mono border border-gray-700  focus:outline-none focus:border-transparent p-4 rounded-md"
          >
            Format
          </button>
          <button className="w-[75%] bg-[#212121]  hover:bg-[#212121]/90 text-white text-sm font-mono border border-gray-700  focus:outline-none focus:border-transparent p-4 rounded-md">
            Download
          </button>
        </div>
        <textarea
          className="w-[40%] h-[500px] mx-auto p-4 bg-[#212121] text-white text-sm font-mono border border-gray-700  focus:outline-none focus:border-transparent rounded-md"
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
