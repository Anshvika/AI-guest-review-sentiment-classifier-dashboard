import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createReview } from "../api/reviewService";

export default function AddReview() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    guestName: "",
    hotel: "",
    review: "",
    rating: 5,
    sentiment: "Positive",
    date: new Date().toISOString().split("T")[0],
  });

 const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: name === "rating" ? Number(value) : value,
  });
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    console.log(formData);
    console.log(typeof formData.rating);

    await createReview({
      ...formData,
      rating: Number(formData.rating),
    });

    alert("Review Added Successfully");
    navigate("/");
  } catch (error) {
    console.error(error);
    console.log(error.response);
    console.log(error.response?.data);
    alert(error.response?.data?.message || "Failed to add review");
  }
};
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow rounded-xl p-8">

      <h1 className="text-3xl font-bold mb-6">
        Add Guest Review
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <div>
          <label className="block mb-2 font-medium">
            Guest Name
          </label>

          <input
            type="text"
            name="guestName"
            value={formData.guestName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Hotel
          </label>

          <input
            type="text"
            name="hotel"
            value={formData.hotel}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Rating
          </label>

          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
             <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Sentiment
          </label>

          <select
            name="sentiment"
            value={formData.sentiment}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Positive</option>
            <option>Neutral</option>
            <option>Negative</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Review
          </label>

          <textarea
            rows="5"
            name="review"
            value={formData.review}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Save Review
        </button>

      </form>
    </div>
  );
}