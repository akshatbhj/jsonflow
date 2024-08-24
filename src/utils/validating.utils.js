export const validateJSON = (json) => {
  try {
    JSON.parse(json);
    return true;
  } catch (error) {
    if (error) return false;
  }
};

