import React from "react";
import { Button, Form } from "react-bootstrap";

function AddForm() {
  return (
    <>
      {/* <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Name *"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Email *"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder="Address"
            rows={3}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Phone"></Form.Control>
        </Form.Group>

        <Button variant="success" type="submit" block>
          Add New Employee
        </Button>
      </Form> */}

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name *" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com *" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Phone" />
        </Form.Group>

        <Button variant="success" type="submit" block>
          Add New Employee
        </Button>
      </Form>
    </>
  );
}

export default AddForm;
