import app from "./app.js";
import cloudinary from "cloudinary";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.get('*', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
  } catch (error) {
    console.error('Error serving index.html:', error);
    res.status(500).send('Internal Server Error');
  }
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
