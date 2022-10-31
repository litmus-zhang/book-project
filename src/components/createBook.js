import React from 'react'
import {createBook } from '../utils/book'
function CreateBook() {
    const submitBook = (e) => {
        e.preventDefault()
        const book = {
            author: e.target.author.value,
            year: e.target.year.value,
            pages: e.target.pages.value
    }
    createBook(book).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })}
    return (
        <div className='create-book'>
        <form className='form' onSubmit={submitBook}>
            <input type='text' name='author' placeholder='Book Author' />
            <input type='text' name="year" placeholder='Year of Publication' />
            <input type='text' name='pages' placeholder='Number of Pages' />
            <button type='submit'>Create a Book</button>
        </form>
        <style jsx>{`
            .create-book {
                border: 1px solid #000;
                width: 200px;
                height: 200px;
                padding: 10px;
                margin: 10px;
            }
            .form {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
        `}</style>
        </div>
    )
}

export default CreateBook;
