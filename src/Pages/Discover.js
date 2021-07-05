import React from 'react';
import Book from '../Components/Book/Book';
import PageLayout from '../Components/PageLayout/PageLayout';
import { useSelector } from 'react-redux';

const Discover = () => {
    const books = useSelector( state => {
        return state.books.discoverList
    })
    console.log('books',books)
    return (
        <PageLayout>
            {
                books.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;