import React from "react";

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form,
} from "react-bootstrap";
import {uploadFile} from "../api/file";
import Alert from 'react-bootstrap/Alert';

function TableList() {
    const [file, setFile] = React.useState(null);
    const [res, setRes] = React.useState({"columns": [], "values": [], "error": ""})
    const handleSubmit = async(e) => {
        const res = await uploadFile(file);
        setRes(res)
    }
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                                <Card.Title as="h4">Striped Table with Hover</Card.Title>
                                <p className="card-category">
                                    Here is a subtitle for this table
                                </p>
                                {
                                    res.error !== "" &&
                                    <Alert key={'danger'} variant={'danger'}>
                                        {res.error}
                                    </Alert>
                                }

                                <Form>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Upload File</Form.Label>
                                        <Form.Control type="file" onChange={(e) => {
                                            setFile(e.target.files[0]);
                                            console.log(e.target.files[0])
                                        }}/>
                                        <Button
                                            variant="primary"
                                            onClick={handleSubmit}>
                                            Submit
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                                    <thead>
                                    <tr>
                                        {res.columns.length > 0 && res["columns"].map((item, index) => {
                                            return <th className="border-0" key={index}>{item}</th>
                                        })}
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {res.values.length > 0 && res["values"].map((item, index) => {
                                            return <tr key={index}><th>{item}</th></tr>
                                        })}

                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    );
}

export default TableList;
