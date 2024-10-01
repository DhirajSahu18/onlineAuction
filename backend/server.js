import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: 'dvwxhfqn4', 
  api_key: '288927926433832', 
  api_secret: 'O2MMcFTVU7uPzZMEZwc4ZV0sNO8' 
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
