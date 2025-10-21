import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../utils/api";

export default function ProfilePage() {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(username).then((res) => setUser(res.data));
  }, [username]);

  if (!user) return <p className="text-center mt-10 text-gray-700">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl text-white p-8 w-full max-w-md text-center">
        <img
          src={user.profilePic || "https://via.placeholder.com/120"}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white/30"
        />
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p className="text-white/80 mb-6">{user.bio}</p>

        <div className="space-y-3">
          {user.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-white/20 py-3 rounded-xl hover:bg-white/30 transition text-lg font-medium"
            >
              {link.platform} 🔗
            </a>
          ))}
        </div>

        <p className="mt-6 text-sm text-white/70">Linktree clone by Nisha 🚀</p>
      </div>
    </div>
  );
}
