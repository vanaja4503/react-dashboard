const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://jsonplaceholder.typicode.com";

export async function apiRequest(endpoint) {
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`
  );

  if (!response.ok) {
    throw new Error(
      `Request failed: ${response.status}`
    );
  }

  return response.json();
}