import React from "react";
import { 
  HiPlusCircle, 
  // HiMinusCircle,
  // HiCheckCircle 
} from 'react-icons/hi';
import styles from './book.css';
import { useDispatch } from 'react-redux';
import { addToReadingList, removeFromReadingList } from "../Redux/Action";
const SingleBook = (props) => {
  const { title, author, coverImageUrl, synopsis } = props.book;
  const dispatch = useDispatch()
  return (
    <div className='card d-flex mb-3 p-3' 
      style={{position: 'relative'}}
    >
      <div className='row'>
        <div className='col-md-3'>
          <img className="img-fluid" src={coverImageUrl} alt='' />
        </div>
        <div className='col-md-9'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <h6>{author}</h6>
            <p className='card-text'>{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons} >
        {/* <HiMinusCircle title="Remove from list" className={styles.minus_icon} /> */}
        
        <button onClick = { () => dispatch(addToReadingList(props.book))} >add to reading</button> 
        <button onClick = { () => dispatch(removeFromReadingList(props.book))}>remove</button>
        {/* <HiCheckCircle title="Mark as Finish" className={styles.check_icon} /> */}
      </div>
    </div>
  );
};

export default SingleBook;
