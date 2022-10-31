import React from 'react'

function Book() {
    return (
        <div className='book'>
            <h1>Book Author</h1>
            <span>
                <p>Year of publication</p>
                <p># of pages</p>
            </span>
            <style jsx>{`
            .book {
                border: 1px solid #000;
                width: 200px;
                height: 200px;
                padding: 10px;
                margin: 10px;
            }
            `}</style>
        </div>
    )
}

export default Book
