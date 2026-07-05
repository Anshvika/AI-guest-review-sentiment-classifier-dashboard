import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getReviewById, updateReview } from "../api/reviewService";

export default function EditReview() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    guestName: "",
    hotel: "",
    review: "",
    rating: 5,
    sentiment: "Positive",
    date: "",
  });

  useEffect(() => {
    async function loadReview() {
      try {
        const response = await getReviewById(id);
        const review = response.data.data;

        setFormData({
        guestName: review.guestName,
        hotel: review.hotel,
        review: review.review,
        rating: review.rating,
        sentiment: review.sentiment,
        });
      } catch (err) {
        console.error(err);
      }
    }

    loadReview();
  }, [id]);

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
        await updateReview(id, formData);
        alert("Review Updated Successfully");

        navigate("/dashboard");
        } catch (error) {
        console.log(error);
        console.log(error.response);
        console.log(error.response?.data);
        alert("Update failed");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">

      <h1 className="text-3xl font-bold mb-6">
        Edit Review
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          name="guestName"
          value={formData.guestName}
          onChange={handleChange}
          className="w-full border rounded p-3"
        />

        <input
          name="hotel"
          value={formData.hotel}
          onChange={handleChange}
          className="w-full border rounded p-3"
        />

        <textarea
          rows="5"
          name="review"
          value={formData.review}
          onChange={handleChange}
          className="w-full border rounded p-3"
        />

        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full border rounded p-3"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>

        <select
          name="sentiment"
          value={formData.sentiment}
          onChange={handleChange}
          className="w-full border rounded p-3"
        >
          <option>Positive</option>
          <option>Neutral</option>
          <option>Negative</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Update Review
        </button>

      </form>

    </div>
  );
}