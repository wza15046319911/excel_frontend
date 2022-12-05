import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {uploadFile} from "../../api/file";

const UploadFile = () => {
    const [file, setFile] = React.useState(null);
    const [res, setRes] = React.useState([])
    const handleSubmit = async(e) => {
        const res = await uploadFile(file);
        console.log(res)
    }
    return (
        <>
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
            {res && res.map((item, index) => {
                return <p key={index}>{item}</p>

            })}
        </>
    )
}

export default UploadFile;
