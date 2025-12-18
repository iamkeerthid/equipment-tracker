import React, { useEffect, useState } from "react";
import "./App.css";
import EquipmentForm from "./EquipmentForm";
import EquipmentTable from "./EquipmentTable";
import { getEquipment, addEquipment as addAPI, updateEquipment, deleteEquipment } from "./api";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [editingEquipment, setEditingEquipment] = useState(null);

  // Search, filter, sort states
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // Load equipment on page load
  useEffect(() => {
    loadEquipment();
  }, []);

  const loadEquipment = async () => {
    const data = await getEquipment();
    setEquipment(data);
  };

  const addEquipment = async (item) => {
    await addAPI(item);
    loadEquipment();
  };

  const updateItem = async (item) => {
    await updateEquipment(item.id, item);
    setEditingEquipment(null);
    loadEquipment();
  };

  const handleDelete = async (id) => {
    await deleteEquipment(id);
    loadEquipment();
  };

  // Filter and sort equipment
  const filteredEquipment = equipment
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) =>
      filterStatus ? item.status === filterStatus : true
    )
    .sort((a, b) => {
      if (!sortOrder) return 0;
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      if (sortOrder === "desc") return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="container">
      <h1>EQUIPMENT TRACKER</h1>

      {/* Search, Filter, Sort */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Under Maintenance">Under Maintenance</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Name</option>
          <option value="asc">A → Z</option>
          <option value="desc">Z → A</option>
        </select>
      </div>

      <EquipmentForm
        addEquipment={addEquipment}
        updateEquipment={updateItem}
        editingEquipment={editingEquipment}
      />

      <EquipmentTable
        equipment={filteredEquipment}  // pass filtered list here
        deleteEquipment={handleDelete}
        setEditingEquipment={setEditingEquipment}
      />
    </div>
  );
}

export default App;
