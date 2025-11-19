import axios from "axios";

// Basic user fetch (required by the task)
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // single user object
  } catch (error) {
    throw new Error("User not found");
  }
}

// Advanced search functionality
export async function fetchAdvancedUsers({ username, location, minRepos }) {
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
