import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/auth");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <div className="container mx-auto p-16 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-600">Profile</h1>
      <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-green-600">Name:</h2>
        <p className="mb-4">{user.name}</p>
        <h2 className="text-lg font-semibold text-green-600">Email:</h2>
        <p className="mb-4">{user.email}</p>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;