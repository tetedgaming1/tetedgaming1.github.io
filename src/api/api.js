// This replaces Base44 completely

// Save alliance data
export function saveAlliance(data) {
  localStorage.setItem("alliance", JSON.stringify(data));
}

// Load alliance data
export function loadAlliance() {
  const data = localStorage.getItem("alliance");
  return data ? JSON.parse(data) : null;
}
