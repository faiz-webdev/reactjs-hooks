import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext } from "react";

function EditForm({ employeeInfo }) {
  const { updateEmployee } = useContext(EmployeeContext);
  const [updatedEmployee, setUpdatedEmployee] = useState({
    name: employeeInfo.name,
    email: employeeInfo.email,
    address: employeeInfo.address,
    phone: employeeInfo.phone,
  });

  const onInputChange = (e) => {
    setUpdatedEmployee({ ...updatedEmployee, [e.target.name]: e.target.value });
  };

  const { name, email, address, phone } = updatedEmployee;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    updateEmployee(employeeInfo.id, updatedEmployee);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name *"
            required
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com *"
            required
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="address"
            value={address}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Edit Employee
        </Button>
      </Form>
    </>
  );
}

export default EditForm;
