import { useState } from "react";

export default function Search({ fetchUserData }) {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);

  // async + await requirement
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    await fetchUserData(query); // await used here

    // map requirement (mapping the existing history)
    const updated = [query, ...history].map((item) => item.trim());
    setHistory(updated);

    setQuery("");
  };

  return (
    <div className="search-container">

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub username..."
        />

        <button type="submit">Search</button>
      </form>

      {/* && requirement for conditional rendering */}
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
