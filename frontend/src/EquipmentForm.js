import React, { useEffect, useState } from "react";

function EquipmentForm({ addEquipment, updateEquipment, editingEquipment }) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    status: "",
    lastCleaned: "",
  });

  useEffect(() => {
    if (editingEquipment) {
      setForm(editingEquipment);
    }
  }, [editingEquipment]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.type || !form.status || !form.lastCleaned) {
      alert("All fields are required");
      return;
    }

    if (editingEquipment) {
      updateEquipment(form);
    } else {
      addEquipment(form);
    }

    setForm({ name: "", type: "", status: "", lastCleaned: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />

      <select name="type" value={form.type} onChange={handleChange}>
        <option value="">Select Type</option>
        <option>Machine</option>
        <option>Vessel</option>
        <option>Tank</option>
        <option>Mixer</option>
      </select>

      <select name="status" value={form.status} onChange={handleChange}>
        <option value="">Select Status</option>
        <option>Active</option>
        <option>Inactive</option>
        <option>Under Maintenance</option>
      </select>

      <input
        type="date"
        name="lastCleaned"
        value={form.lastCleaned}
        onChange={handleChange}
      />

      <button type="submit">
        {editingEquipment ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default EquipmentForm;
