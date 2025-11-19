export default function Search({ fetchUserData }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    fetchUserData(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
