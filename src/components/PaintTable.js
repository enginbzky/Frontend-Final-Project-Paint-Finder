import React from "react";
import Swal from "sweetalert2";
import { deletePaint } from "../service/paintService.js";
import EditIcon from "../assets/EditIcon";
import TrashIcon from "../assets/TrashIcon";
import "../App.css";

function PaintTable({ paints, getData, handleEdit }) {
  const handleDelete = async (pId) => {
    if (await confirmDialog()) {
      try {
        const result = await deletePaint(pId);
        if (result) {
          await getData();
          Swal.fire("Deleted!", "The paint has been deleted.", "success");
        } else {
          throw new Error("Failed to delete the paint.");
        }
      } catch (error) {
        console.error(error);
        Swal.fire("Error!", error.message, "error");
      }
    }
  };

  const confirmDialog = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    return result.isConfirmed;
  };

  return (
    <table className="mt-5 text-dark  table  table-hover table-bg table-bordered  ">
      <thead>
        <tr>
          <th>#</th>
          <th>Brand</th>
          <th>Paint Name</th>
          <th>Material</th>
          <th>Season</th>
          <th>Budget</th>
          <th style={{ width: 300 }}>Description</th>
          <th>Maximum Speed</th>
          <th>Paint Image</th>
        </tr>
      </thead>
      <tbody>
        {paints.map((paint) => (
          <tr key={paint.id}>
            <th scope="row">{paint.id}</th>
            <td>{paint.brand}</td>
            <td>{paint.paintName}</td>
            <td>{paint.material}</td>
            <td>{paint.season}</td>
            <td>{paint.budget}</td>
            <td style={{ width: 300 }}>{paint.description}</td>
            <td>{paint.maxSpeed}</td>
            <td>
              <img src={`http://localhost:9000/paints/${paint.id}/image`} />
            </td>
            <td>
              <button
                className="btn btn-danger mx-2"
                onClick={() => handleDelete(paint.id)}
                aria-label="delete user"
              >
                <TrashIcon />
              </button>
              <button
                aria-label="edit user"
                className="btn btn-primary mx-2"
                onClick={() => handleEdit(paint)}
              >
                <EditIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default PaintTable;
