const API_URL = "http://localhost:5000/api/equipment";

export const getEquipment = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addEquipment = async (item) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
};

export const updateEquipment = async (id, item) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
};

export const deleteEquipment = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
