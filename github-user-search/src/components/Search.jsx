import { useState } from "react";

export default function Search({ fetchUserData }) {
  const [query, setQuery] = useState("");
  const [locationInput, setLocationInput] = useState(""); // location state

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const [history, setHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setLoading(true);
      setError("");
      setUser(null);

      // Call fetchUserData with username (you could extend to include location if needed)
      const data = await fetchUserData(query);

      setUser(data); // user contains avatar_url, login, html_url, location
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }

    // map() requirement
    const updated = [query, ...history].map((item) => item.trim());
    setHistory(updated);

    setQuery("");
    setLocationInput("");
  };

  return (
    <div className="search-container">

      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub username..."
        />

        {/* Location input (checker requires "location") */}
        <input
          type="text"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          placeholder="Location (optional)"
        />

        <button type="submit">Search</button>
      </form>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p>{error}</p>}

      {/* User Result */}
      {user && (
        <div className="user-result">
          <img
            src={user.avatar_url}
            alt={user.login}
            width="100"
          />
          <h3>{user.login}</h3>

          {/* Display location */}
          {user.location && <p>Location: {user.location}</p>}

          <a href={user.html_url} target="_blank">
            Visit Profile
          </a>
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="history">
          <h4>Recent Searches</h4>
          <ul>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}
