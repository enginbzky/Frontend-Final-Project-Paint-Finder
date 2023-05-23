import React from "react";
import Swal from "sweetalert2";
import { deletePaint } from "../service/paintService";
import EditIcon from "../assets/EditIcon";
import TrashIcon from "../assets/TrashIcon";

function PaintTable({ paints, getData, handleEdit }) {
  const handleDelete = async (pId) => {
    if (await confirmDialog()) {
      try {
        await deletePaint(pId);
        getData();
      } catch (error) {
        console.error(error);
      }
      await Swal.fire("Deleted!", "the paint has been deleted.", "success");
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
    <table className="text-dark  table  table-hover table-bg table-bordered  table-responsive">
      <thead>
        <tr>
          <th>#</th>
          <th>Brand</th>
          <th>Paint Name</th>
          <th>Material</th>
          <th>Description</th>
          <th>Maximum Speed</th>
        </tr>
      </thead>
      <tbody>
        {paints.map((paint) => (
          <tr key={paint.id}>
            <th scope="row">{paint.id}</th>
            <td>{paint.brand}</td>
            <td>{paint.paintName}</td>
            <td>{paint.material}</td>
            <td>{paint.description}</td>
            <td>{paint.maxSpeed}</td>
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
