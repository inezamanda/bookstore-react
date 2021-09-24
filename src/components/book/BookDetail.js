import React from 'react'

const BookDetail = ({match}) => {

    // Destructuring
    const { id } = match.params;

    return (
        <div>
            <h3>Book Detail By ID {id}</h3>
        </div>
    )
}

export default BookDetail
