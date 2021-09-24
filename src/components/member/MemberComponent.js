import React, { useMemo } from 'react'
import { Button, ButtonGroup, Card, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useTable } from 'react-table'

const MemberComponent = ({memberId, path, firstname, lastname, username, email, status, handleDelete}) => {
    return (
        <>
            <tr>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                    <ButtonGroup aria-label="Basic Example">
                        <Link to={`${path}/edit/${memberId}`} className="btn btn-sm btn-outline-warning">
                            Update
                        </Link>
                        {
                            status > 0 || status === null ? 
                            <button onClick={() => handleDelete(memberId)} className="btn btn-sm btn-outline-danger" disabled={true}>
                                Delete
                            </button> :
                            <button onClick={() =>handleDelete(memberId)} className="btn btn-sm btn-outline-danger">
                                Delete
                            </button> 
                        }
                    </ButtonGroup>
                </td>
            </tr>
        </>
    )
};

export default MemberComponent;