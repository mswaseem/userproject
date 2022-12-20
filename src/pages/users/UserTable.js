import { Card, Input, Empty, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { BsArrowDownUp } from "react-icons/bs";
import moment from 'moment'

const UserTable = (props) => {
    return (
        <Card className="bg-light text-left">
            <table className="table table-sm table-bordered table-striped text-left">
                <thead>
                    <tr>
                        <td colSpan={9} className="cu-bg-green">Open loan tendering case</td>
                    </tr>
                    <tr className="align-middle cu-text-small">
                        <td className="cu-bg-green"><Input placeholder={"Search"} suffix={<BsArrowDownUp
                            onClick={() => {

                            }
                            }
                            role={"button"} />}  name="loan_data_customerid" /></td>
                        <td className="cu-bg-green"><Input placeholder={"Search"} suffix={<BsArrowDownUp
                            onClick={() => {

                            }
                            }
                            role={"button"} />}  name="loan_data_customername" /></td>
                        <td className="cu-bg-green"><Input placeholder={"Search"} suffix={<BsArrowDownUp
                            onClick={() => {

                            }
                            }
                            role={"button"} />}  name="loan_data_name" /></td>
                        <td className="cu-bg-green"><Input placeholder={"Search"} suffix={<BsArrowDownUp
                            onClick={() => {

                            }
                            }
                            role={"button"} />}  name="loan_data_agreement" /></td>
                        <td className="cu-bg-green"><Input placeholder={"Search"} suffix={<BsArrowDownUp
                            onClick={() => {

                            }
                            }
                            role={"button"} />}  name="loan_data_margin" /></td>
                        <td className="cu-bg-green"><Input placeholder={"Search"} suffix={<BsArrowDownUp
                            onClick={() => {

                            }
                            }
                            role={"button"} />}  name="loan_data_margin" /></td>
                        <td className="cu-bg-green"><Input placeholder={"Search"} suffix={<BsArrowDownUp
                            onClick={() => {

                            }
                            }
                            role={"button"} />} name="loan_data_margin" /></td>
                        <td className="cu-bg-green"></td>
                    </tr>
                    <tr className="align-middle cu-text-small">
                        <td className="cu-bg-lightgreen">{'Name'}</td>
                        <td className="cu-bg-lightgreen">{'Age'}</td>
                        <td className="cu-bg-lightgreen">{'Address'}</td>
                        <td className="cu-bg-lightgreen">{'Date of Birth'}</td>
                        <td className="cu-bg-lightgreen">{'Email'}</td>
                        <td className="cu-bg-lightgreen">{'Phone'}</td>
                        <td className="cu-bg-lightgreen">{'Pincode'}</td>
                        <td className="cu-bg-lightgreen">{'Actions'}</td>
                    </tr>
                </thead>
                <tbody className="cu-text-small">
                    {props?.userData?.length > 0 ? props?.userData?.map((val) => {
                        return (
                            <tr  >
                                <td>{val?.name}</td>
                                <td>{val?.age}</td>
                                <td>{val?.address}</td>
                                <td>{moment(val?.dob).format("DD.MM.YYYY")}</td>
                                <td>{val?.email}</td>
                                <td>{val?.phone}</td>
                                <td>{val?.pincode}</td>
                                <td className="text-center" role='button'>
                                    <div className="d-flex">
                                        <div>
                                            <Tooltip title={"Delete"}>
                                                <DeleteOutlined
                                                    onClick={() => { props.onDeleteUser(val) }}
                                                    className="fs-5"
                                                />
                                            </Tooltip>
                                        </div>
                                        <div>&nbsp;</div>
                                        <div>
                                            <Tooltip title={"Edit"}>
                                                <EditOutlined
                                                    className="fs-5"
                                                    onClick={() => { props.onEditUser(val) }}
                                                />
                                            </Tooltip>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    }) : <tr><td colSpan={9}><Empty description={"Empty"} /></td></tr>
                    }
                </tbody>
            </table>
        </Card>
    )
}

export default UserTable;