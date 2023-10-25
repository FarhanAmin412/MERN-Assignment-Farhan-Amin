export const ErrorHandling = (res, status = 500) => {
  const error = { status, message: "" };

  switch (status) {
    case 400:
      error.status = 400;
      error.message = "Bad request";
      break;
    case 401:
      error.status = 401;
      error.message = "Invalid Authentication Credentials";
      break;
    default:
      error.status = 500;
      error.message = "Internal Server Error";
  }

  return res.json(error);
};
