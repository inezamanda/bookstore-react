import React, { Fragment } from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import MemberComponent from "./MemberComponent"

const MemberList = ({ dataMember }) => {
    return (
        <Container>
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
                        dataMember.map((member) => (
                            <MemberComponent
                                key={member.id}
                                firstname={member.firstname}
                                lastname={member.lastname}
                                username={member.username}
                                email={member.email}
                            />
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default MemberList
