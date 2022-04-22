class Api {
  constructor({
    message = "Unknown Error",
    code = "General Error",
    errorCode = "unknown_error",
    fieldErrors = [],
    details = [],
  }) {
    this.message = message;
    this.code = code;
    this.errorCode = errorCode;
    this.fieldErrors = fieldErrors;
    this.details = details;
  }
  get json() {
    return {
      message: this.message,
      code: this.code,
      errorCode: this.errorCode,
      fieldErrors: this.fieldErrors,
      details: this.details,
    };
  }
}

export const handleApiResponse = async (response) => {
  let errorMessage;
  const content = await response.text();
  if (!content && response.status === 201) {
    return {
      code: response.status,
      ok: true,
    };
  }
  if (!content) {
    const code = response.status;
    switch (code) {
      case 403:
        errorMessage = "Unaithorize";
        break;
      case 404:
        errorMessage = "Not Found";
        break;
      case 503:
        errorMessage = "Resource not available";
        break;
      default:
        errorMessage = `error with code -${code}`;
    }
    return {
      ok: true,
      error: new Api({
        message: errorMessage,
        code: response.code,
      }).json,
    };
  }
  let jsonData = {};
  let errorCode;
  try {
    jsonData = JSON.parse(content);
    if (response.ok) {
      return {
        code: response.status,
        data: jsonData.data,
        ok: true,
      };
    }
    errorMessage = jsonData.error.message;
    errorCode = jsonData.error.code;
  } catch (e) {
    errorMessage = "something went wrong";
    errorCode = "unknown_error";
  }
  return {
    data: jsonData.data,
    ok: false,
    error: new Api({
      message: errorMessage,
      code: response.status,
      errorCode,
    }).json,
  };
};

export const API_STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  COMPLETED: "completed",
  FAILED: "failed",
};
