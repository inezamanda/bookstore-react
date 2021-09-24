import React, { Fragment, useState } from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import MemberComponent from "./MemberComponent"

const MemberList = ({match}) => {    

    const { path } = match
    const [ members, setMember ] = useState([]);
    


    return (
        <>
            <h3>Member Page</h3>
            <Link to="/members/add" className="btn btn-sm btn-success mb-3 text-uppercase">Add Member</Link>
            <Table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        members.map((member) => (
                            <MemberComponent
                                key={member.id}
                                firstname={member.firstname}
                                lastname={member.lastname}
                                username={member.username}
                                email={member.email}
                            />
                        ))
                    }
                    {
                        members && !members.length && <h4>No member display</h4>
                    }
                </tbody>
            </Table>
        </>  
    )
}

export default MemberList
