import { useState } from "react";
import { saveUser } from "../utils/api";
import { Link } from "react-router-dom";
import { Plus, Save, User, Link2 } from "lucide-react";

export default function Home() {
  const [form, setForm] = useState({
    username: "",
    name: "",
    bio: "",
    profilePic: "",
    links: [{ platform: "", url: "" }],
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "platform" || name === "url") {
      const newLinks = [...form.links];
      newLinks[index][name] = value;
      setForm({ ...form, links: newLinks });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const addLink = () => {
    setForm({ ...form, links: [...form.links, { platform: "", url: "" }] });
  };

  const handleSubmit = async () => {
    await saveUser(form);
    alert("✅ Profile saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6A11CB] to-[#2575FC] flex flex-col items-center justify-center py-12 px-4">
      {/* Header */}
      <div className="mb-8 text-center text-white">
        <h1 className="text-4xl font-extrabold tracking-tight">Social Bio Dashboard 🌐</h1>
        <p className="text-white/80 text-lg mt-2">
          Create your personalized bio link with style 🚀
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl">
        {/* Form Section */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 text-white w-full md:w-1/2 transition transform hover:scale-[1.02]">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <User className="text-pink-400" /> Create Profile
          </h2>

          <div className="space-y-4">
            <input
              name="username"
              placeholder="Unique Username"
              className="w-full p-3 rounded-xl bg-white/20 focus:ring-2 focus:ring-pink-400 outline-none"
              onChange={handleChange}
            />
            <input
              name="name"
              placeholder="Full Name"
              className="w-full p-3 rounded-xl bg-white/20 focus:ring-2 focus:ring-pink-400 outline-none"
              onChange={handleChange}
            />
            <textarea
              name="bio"
              placeholder="Short Bio"
              className="w-full p-3 rounded-xl bg-white/20 focus:ring-2 focus:ring-pink-400 outline-none"
              onChange={handleChange}
            />
            <input
              name="profilePic"
              placeholder="Profile Picture URL"
              className="w-full p-3 rounded-xl bg-white/20 focus:ring-2 focus:ring-pink-400 outline-none"
              onChange={handleChange}
            />

            <h3 className="text-lg font-semibold mt-6 flex items-center gap-2">
              <Link2 className="text-blue-300" /> Social Links
            </h3>
            {form.links.map((link, i) => (
              <div
                key={i}
                className="flex gap-3 items-center bg-white/10 p-3 rounded-xl"
              >
                <input
                  name="platform"
                  placeholder="Platform (e.g. Instagram)"
                  className="w-1/2 p-2 rounded-lg bg-transparent border border-white/20 focus:ring-1 focus:ring-pink-400 outline-none"
                  onChange={(e) => handleChange(e, i)}
                />
                <input
                  name="url"
                  placeholder="URL"
                  className="w-1/2 p-2 rounded-lg bg-transparent border border-white/20 focus:ring-1 focus:ring-pink-400 outline-none"
                  onChange={(e) => handleChange(e, i)}
                />
              </div>
            ))}

            <button
              onClick={addLink}
              className="flex items-center gap-2 mt-3 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition"
            >
              <Plus size={18} /> Add Link
            </button>

            <button
              onClick={handleSubmit}
              className="w-full mt-6 bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90 transition text-lg py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <Save size={20} /> Save Profile
            </button>
          </div>
        </div>

        {/* Live Preview */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 text-white w-full md:w-1/2 text-center">
          <h2 className="text-2xl font-semibold mb-4">Live Preview 👀</h2>
          <img
            src={
              form.profilePic ||
              "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            }
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white/30 object-cover"
          />
          <h3 className="text-xl font-semibold">{form.name || "Your Name"}</h3>
          <p className="text-white/70 mb-4">{form.bio || "Your short bio..."}</p>
          <div className="space-y-3">
            {form.links.map(
              (l, i) =>
                l.platform && (
                  <button
                    key={i}
                    className="block w-full bg-white/20 hover:bg-white/30 py-3 rounded-xl transition text-lg font-medium"
                  >
                    {l.platform} 🔗
                  </button>
                )
            )}
          </div>
        </div>
      </div>

      <footer className="mt-10 text-white/80 text-sm">
        Built with ❤️ by Nisha Kumari
      </footer>
    </div>
  );
}
