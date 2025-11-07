import React from "react";
import { useNavigate } from "react-router-dom";

const TrainerCard = ({ t }) => {
  const navigate = useNavigate();

  // 🖼️ Choose correct image
  const imageUrl =
    t.image
      ? `${import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:5000"}${t.image}`
      : t.photo
      ? t.photo
      : "https://via.placeholder.com/400x400?text=No+Image";

  // 📄 Smart bio fallback
  const trainerBio =
    t.bio ||
    (t.specialty ? `Expert in ${t.specialty}` : "") ||
    (t.specialization?.length ? `Specializes in ${t.specialization.join(", ")}` : "") ||
    "Certified personal trainer with years of experience helping clients reach fitness goals.";

  // 🕹️ Button handlers
  const handleBookSession = () => {
    navigate(`/book/${t._id}`);
  };

  const handleContact = () => {
    if (t.email) {
      window.location.href = `mailto:${t.email}`;
    } else {
      alert("Trainer email not available.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col items-center text-center p-5">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-100 shadow-sm mb-3">
        <img src={imageUrl} alt={t.name} className="w-full h-full object-cover" />
      </div>

      <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>

      <p className="text-sm text-gray-600 mt-1">{trainerBio}</p>

      <p className="text-sm mt-2 text-gray-700">
        <strong>Specialization:</strong>{" "}
        {t.specialization?.join(", ") || t.specialty || "General Fitness"}
      </p>

      <p className="text-sm text-gray-700 mt-1">
        Experience: {t.experience || 0} yrs
      </p>

      <p className="text-indigo-600 font-semibold mt-3">
        ₹{t.pricePerSession || "Contact"}/session
      </p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={handleBookSession}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
        >
          Book Session
        </button>
        <button
          onClick={handleContact}
          className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg text-sm hover:bg-indigo-50 transition"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default TrainerCard;
