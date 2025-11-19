import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(input);
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
      {/* Button */}
        <button type="submit" style={{ marginLeft: "1rem", padding: "10px" }}>
          Search
        </button>
      </form>


      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {user && (
        <div style={{ marginTop: "1rem" }}>
          <img src={user.avatar_url} width="100" />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
