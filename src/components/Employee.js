import React, { useState } from "react";
import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import EditForm from "./EditForm";

function Employee({ employee }) {
  const { deleteEmployee } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <button className="btn text-warning btn-act" data-toggle="modal" onClick={handleShow}>
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </button>
        <button
          className="btn text-danger btn-act"
          data-toggle="modal"
          onClick={() => deleteEmployee(employee.id)}
        >
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm employeeInfo={employee} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Employee;
