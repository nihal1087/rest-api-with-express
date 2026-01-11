import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { marked } from "marked";

import { apiRouter } from "./routes/apiRoutes.js";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());

app.set("json spaces", 2);

app.get("/", async (req, res) => {
  try {
    const readmePath = path.join(process.cwd(), "README.md");
    const markdown = await fs.readFile(readmePath, "utf-8");
    const html = marked(markdown);

    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Startup Planet API</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 900px;
            margin: 40px auto;
            line-height: 1.6;
          }
          pre {
            background: #f4f4f4;
            padding: 12px;
            overflow-x: auto;
          }
          code {
            background: #eee;
            padding: 2px 4px;
          }
        </style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `);
  } catch (err) {
    res.status(500).send("Failed to load documentation");
  }
});

app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint not found. Please check the API documentation.",
  });
});

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
