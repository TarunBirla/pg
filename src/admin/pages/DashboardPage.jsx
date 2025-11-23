import React, { useEffect, useState } from "react";
import http from "../../service/http";
import { toast } from "react-toastify";
import Select from "react-select";
import { baseURL } from "../../service/api";

const DashboardPage = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      {/* Add your dashboard content here */}
      <CreateBanner />
      <BannerList />
    </div>
  );
};

export default DashboardPage;

const CreateBanner = () => {
  const [form, setForm] = useState({
    heading: "",
    subheading: "",
    description: "",
    order: 0,
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Image is required");
      return;
    }

    const formData = new FormData();
    formData.append("heading", form.heading);
    formData.append("subheading", form.subheading);
    formData.append("description", form.description);
    formData.append("order", form.order);
    formData.append("image", image);

    try {
      const res = await http.post("/banners", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(res.data.message || "Banner created successfully"); // redirect after success
    } catch (error) {
      console.error("Create error:", error);
      alert("Failed to create banner");
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create Banner</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="font-medium">Heading</label>
          <input
            type="text"
            name="heading"
            value={form.heading}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="font-medium">Subheading</label>
          <input
            type="text"
            name="subheading"
            value={form.subheading}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="font-medium">Order</label>
          <input
            type="number"
            name="order"
            value={form.order}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </div>

        <div>
          <label className="font-medium">Upload Image</label>
          <input type="file" accept="image/*" onChange={handleFile} />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-3 w-full h-40 object-cover rounded"
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Create Banner
        </button>
      </form>
    </div>
  );
};

const BannerList = () => {
  const [banners, setBanners] = useState([]);

  const getBanners = async () => {
    try {
      const res = await http.get("/banners");
      setBanners(res.data);
    } catch (error) {
      console.error("Fetch banner error:", error);
    }
  };

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Banner List</h1>
        <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          + Create Banner
        </a>
      </div>

      {banners.length === 0 ? (
        <p>No banners found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {banners.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 shadow">
              <img
                src={`${baseURL}${item.image_url}`}
                alt="Banner"
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-3">{item.heading}</h3>
              <p className="text-sm text-gray-600">{item.subheading}</p>
              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
              <p className="text-xs font-bold mt-2">Order: {item.order}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
