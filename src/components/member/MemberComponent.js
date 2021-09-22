import React, { useMemo } from 'react'
import { Button, Card, Col, Table } from "react-bootstrap";
import { useTable } from 'react-table'

const MemberComponent = ({firstname, lastname, username, email}) => {
    return (
        <>
            <tr>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{username}</td>
                <td>{email}</td>
            </tr>
        </>
    )
};

export default MemberComponent;