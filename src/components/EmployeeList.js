import Employee from "./Employee";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useEffect, useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import AddForm from "./AddForm";
import Pagination from "./Pagination";

function EmployeeList() {
  const { sortedEmployees } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(2);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      //   return () => {
      //     handleShowAlert();
      //   };
      //   showAlert(false);
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    handleClose();

    return () => {
      handleShowAlert();
    };
  }, [sortedEmployees]);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              className="btn btn-success"
              data-toggle="modal"
              onClick={handleShow}
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>

      <Alert
        variant="danger"
        show={showAlert}
        onClose={() => setShowAlert(false)}
        dismissible
      >
        Employee list updated successfully
      </Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((emp) => (
            <tr key={emp.id}>
              <Employee employee={emp} />
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
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

export default EmployeeList;
