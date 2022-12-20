import { Spin, Form } from "antd";
import { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const Users = (props) => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState([]);
    const [editId, setEditId] = useState();

    const onFormSubmit = (values) => {
        if (editId) {
            const userValue = { ...values, id: editId }
            let editUserArr = userData;
            editUserArr = editUserArr.map((user) => {
                if (user.id == editId) {
                    return { ...user, ...userValue }
                } else {
                    return user;
                }
            })
            setUserData(editUserArr);
            setEditId();
            form.resetFields();
        } else {
            const userValue = { ...values, id: Math.floor(1000 + Math.random() * 9000) }
            setUserData([...userData, userValue])
            form.resetFields();
        }
    };


    const onDeleteUser = (value) => {
        let userArr = userData;
        userArr = userArr.filter((el) => el.id != value.id);
        setUserData(userArr);
    };

    const onEditUser = (value) => {
        form.setFieldValue('name', value?.name);
        form.setFieldValue('age', value?.age);
        form.setFieldValue('address', value?.address);
        form.setFieldValue('dob', value?.dob);
        form.setFieldValue('email', value?.email);
        form.setFieldValue('phone', value?.phone);
        form.setFieldValue('pincode', value?.pincode);
        setEditId(value.id);
    };

    return (
        <>
            <Spin spinning={loading}>
                <UserForm
                    form={form}
                    onFormSubmit={onFormSubmit}
                    editId={editId}
                    setEditId={setEditId}
                />
                <UserTable
                    userData={userData}
                    onDeleteUser={onDeleteUser}
                    onEditUser={onEditUser}
                />
            </Spin>
        </>
    );
};
export default Users;