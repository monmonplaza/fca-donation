export const setIsMode = (val) => {
  return {
    type: "IS_MODE",
    payload: val,
  };
};

export const setMode = (val) => {
  return {
    type: "MODE",
    payload: val,
  };
};

export const setError = (val) => {
  return {
    type: "ERROR",
    payload: val,
  };
};

export const setMessage = (val) => {
  return {
    type: "MESSAGE",
    payload: val,
  };
};

export const setSuccess = (val) => {
  return {
    type: "SUCCESS",
    payload: val,
  };
};

export const setSave = (val) => {
  return {
    type: "SAVE",
    payload: val,
  };
};
