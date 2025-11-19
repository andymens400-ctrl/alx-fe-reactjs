import { useState } from "react";

export default function Search({ fetchUserData }) {
  const [query, setQuery] = useState("");

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

      // await requirement
      const data = await fetchUserData(query);

      setUser(data); // user contains avatar_url, login, html_url
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }

    // map() requirement
    const updated = [query, ...history].map((item) => item.trim());
    setHistory(updated);

    setQuery("");
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
