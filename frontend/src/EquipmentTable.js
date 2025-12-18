import React from "react";

function EquipmentTable({ equipment, deleteEquipment, setEditingEquipment }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Last Cleaned</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {equipment.length === 0 ? (
          <tr>
            <td colSpan="5">No equipment found</td>
          </tr>
        ) : (
          equipment.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.status}</td>
              <td>{item.lastCleaned}</td>
              <td>
                <button className="edit" onClick={() => setEditingEquipment(item)}>
                  Edit
                </button>
                <button className="delete" onClick={() => deleteEquipment(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default EquipmentTable;
