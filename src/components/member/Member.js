import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import MemberForm from './MemberForm'
import MemberList from './MemberList'

const Member = () => {
    const [ getMember, setMember ] = useState([
        {
            id : 1,
            firstname : 'Inez',
            lastname : 'Amanda',
            email : 'inezyamanda@gmail.com',
            username : 'inezyamanda',
            password : 'helloworld'
        }
    ])

    const eventCreateMember = (member) => {
        setMember(getMember.concat(member))
        console.log(getMember)
    }

    return (
        <Container>
            <Row>
                <MemberForm onCreateMember = { eventCreateMember }/>
            </Row>
            <Row>
                <MemberList dataMember = { getMember }/>
            </Row>
        </Container>
    )
}

export default Member
