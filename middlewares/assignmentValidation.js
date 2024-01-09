function validateAssignmentData(req, res, next) {
  const reqBody = req.body;

  if (reqBody.title.length > 35) {
    return res.status(400).json({
      message: "Title must not be over 35 characters",
    });
  }

  if (reqBody.description.length > 150) {
    return res.status(400).json({
      message: "Description must not exceed 150 characters",
    });
  }

  if (!Array.isArray(reqBody.categories) || reqBody.categories.length < 1) {
    return res.status(400).json({
      message: "Categories must be an array with at least 1 value",
    });
  }
  next();
}

export default validateAssignmentData;
