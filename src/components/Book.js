import React from 'react'

function Book({author, year, pages}) {
    return (
        <div className='book'>
            <h1>{author}</h1>
            <span>
                <p>{year}</p>
                <p>{pages } pages</p>
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
