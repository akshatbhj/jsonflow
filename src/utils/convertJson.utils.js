import { XMLBuilder } from "fast-xml-parser";
import Papa from "papaparse";
import YAML from "yaml";

export const convertJsonToXml = (json) => {
    try {
      // Parse the JSON string into a JavaScript object
      const jsonObject = JSON.parse(json);
  
      // Create an instance of the XMLBuilder
      const builder = new XMLBuilder({
        ignoreAttributes: false,
        format: true,
        indentBy: "  ", // This defines the indentation (2 spaces)
      });
  
      // Convert the JavaScript object to XML
      const xmlData = builder.build(jsonObject);
      return xmlData;
    } catch (error) {
      // Return an error message if there's a failure
      return `Error converting JSON to XML: ${error.message}`;
    }
  };

  export const convertJsonToCsv = (json) => {
    try {
      // Convert the JSON array to CSV format
      const csv = Papa.unparse(json);
      return csv;
    } catch (error) {
      return `Error converting JSON to CSV: ${error.message}`;
    }
  };

export const convertJsonToYaml = (json) => {
  try {
    return YAML.stringify(JSON.parse(json));
  } catch (error) {
    return `Error converting JSON to YAML: ${error.message}`;
  }
};
