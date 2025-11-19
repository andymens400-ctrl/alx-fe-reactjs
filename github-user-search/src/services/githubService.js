import axios from "axios";

export async function fetchAdvancedUsers({ username, location, minRepos }) {
  // Build GitHub search query
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query.trim()}`
    );

    return response.data.items; // list of users
  } catch (error) {
    throw new Error("Search failed");
  }
}
