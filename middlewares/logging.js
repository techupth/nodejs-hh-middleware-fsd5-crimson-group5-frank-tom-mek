import fs from "fs/promises";

async function logging(req, res, next) {
  const text = `IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`;
  await fs.writeFile("data/logs.txt", text);

  next();
}

export default logging;
