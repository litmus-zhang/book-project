import axios from 'axios';


export const getBooks = () => {
    return axios.get('http://localhost:4000/api/books')
}

export const createBook = (book) => {
    return axios.post('http://localhost:4000/api/books', book)
}

