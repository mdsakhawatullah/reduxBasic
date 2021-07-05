import React from 'react';
import { Link } from 'react-router-dom';
import SingleBook from '../Components/Book/Book';
import PageLayout from '../Components/PageLayout/PageLayout';
import { useSelector } from 'react-redux';

const ReadingList = () => {

    const books = useSelector( (state) => {
         return state.books.readingList;
    })
    return (
        <PageLayout>
             {
                books.length ?
                 books.map((book) => (<SingleBook key={book.id} book={book} />))
                 :
                 <p>Looks like you've finished all your books! Check them out in your finished books </p>
             }
        </PageLayout>
    );
};

export default ReadingList;