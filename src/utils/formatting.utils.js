export const formatJson = (jsonString, indentLevel) => {
  try {
    // Parse the input JSON to ensure it's valid
    const parsedJson = JSON.parse(jsonString);
    // Format the JSON with 2-space indentation
    return JSON.stringify(parsedJson, null, indentLevel);
  } catch (error) {
    if (error) return "Invalid JSON";
  }
};
