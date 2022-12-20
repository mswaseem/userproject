import { Card, Form, Input, DatePicker, Button as AntdButton } from "antd";
import { Col, Row, Button } from "react-bootstrap";

const UserForm = (props) => {
    return (
        <Form
            form={props.form}
            layout={`vertical`}
            name="control-ref"
            onFinish={props.onFormSubmit}
            className="mb-5"
        >
            <Card className="bg-light text-left">
                <Row>
                    <Col sm={2}>
                        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter Name' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={2}>
                        <Form.Item name="age" label="Age">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={2}>
                        <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please enter address' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={2}>
                        <Form.Item name="dob" label="Date of Birth" rules={[{ required: true, message: 'Please select Date of Birth' }]}>
                            <DatePicker format={"DD.MM.YYYY"} className="w-100" placeholder={"Select Date"} />
                        </Form.Item>
                    </Col>
                    <Col sm={2}>
                        <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter Email' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={2}>
                        <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please enter Phone Number' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={2}>
                        <Form.Item name="pincode" label="Pincode">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Card>
            <br />
            <div className="d-flex justify-content-end px-3 my-3">
                <Button type="reset" className="btn btn-sm rounded-0 bg-secondary px-4 border-secondary"
                    onClick={() => {
                        props.form.resetFields();
                        props.setEditId()
                    }
                    }>{"Reset"}</Button>
                &nbsp;
                <Button type="submit" className="btn btn-sm rounded-0 cu-btn-green px-3">{props.editId ? "Edit" : "Submit"}</Button>
            </div>
        </Form>
    )
}

export default UserForm;