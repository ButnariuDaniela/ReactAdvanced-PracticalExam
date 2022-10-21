import React from 'react';
import { Button } from 'primereact/button';
import { deleteF } from '../../redux/favorites';
import { useDispatch } from "react-redux";
// import { showDefinitions } from '../../utils';
import {Link} from 'react-router-dom';

function FavoritesItem(props) {
    const {word, id} = props;
    const dispatch = useDispatch();
    return (
    <div className='container my-3'>
      <div className='row d-flex justify-content-start'>
        <Link to={`/favorites/${word}`} className="text-decoration-none col-4">
          <div className='fs-4 text-uppercase fav-col-text'><strong>{id}. </strong> {word}</div>
        </Link>
        <Button className='col-2 fav-col' id='delete-button' label="Sterge" icon="pi pi-trash" onClick={() => dispatch(deleteF(word))}/>
      </div>
    </div>
  )
}

export default FavoritesItem
