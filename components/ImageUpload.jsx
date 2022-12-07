import { useState } from "react";

export default function ImageUpload() {
  const [url, setUrl] = useState("");
  const handleChange = async (event) => {
    const file = event.target.files[0];
    const imageFormData = new FormData();
    imageFormData.append("file", file);
    imageFormData.append("upload_preset", "tour-guide");
    const responseCloudinary = await fetch(
      "https://api.cloudinary.com/v1_1/dgxasrrac/image/upload",
      {
        method: "POST",
        body: imageFormData,
      }
    );
    const responseCloudinaryData = await responseCloudinary.json();
    const secureUrl = responseCloudinaryData.secure_url;
    setUrl(secureUrl);
  };

  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="image">
        Upload
      </label>
      <input
        type="file"
        className="form-control"
        id="image"
        name="image"
        onChange={handleChange}
      ></input>
      <input
        hidden={true}
        className="form-control"
        id="imageUrl"
        name="imageUrl"
        defaultValue={url}
      ></input>
    </div>
  );
}
