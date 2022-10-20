import React from 'react';
import { Button } from 'primereact/button';
import { deleteF } from '../../redux/favorites';
import { useDispatch } from "react-redux";
// import { showDefinitions } from '../../utils';
import {Link} from 'react-router-dom';

function FavoritesItem(props) {
    const {word, id} = props;
    const dispatch = useDispatch();
    // const wordsDetails = useSelector(showDefinitions).definitions;
    // console.log(word)
    // console.log(useSelector(showDefinitions).definitions)
    // const partOfSpeech = useSelector(showDefinitions).definitions.map((word, index) =>  {
    //   return{
    //     index: index,
    //     word: word.word,
    //     partOfSpeech: word.meanings.map((meaning) => meaning.partOfSpeech),
    //     meanings: word.meanings
    //   }
    // })
    // const wordDetails = wordsDetails.filter((details) => details.word === word)
    // function findWord(wordS) {
    //   const wordDetails = wordsDetails.filter((details) => details.word === wordS)
    //   // return wordDetails[0].meanings
    //   return <DefinitionItem
    //             meanings={wordDetails[0].meanings} 
    //             word={wordDetails[0].word}
    //             key={wordDetails[0].index}
    //             id={wordDetails[0].index}
    //             />

    // }
    // console.log(findWord('home'))
    
    // console.log(partOfSpeech)
    return (
    <div className='container my-3'>
      <div className='row d-flex justify-content-start'>
        <Link to={`/favorites/${word}`} className="text-decoration-none col-4">
          <div className='fs-4 text-uppercase fav-col-text'><strong>{id}. </strong> {word}</div>
        </Link>
        {/* <input type="hidden" id="wordId" name="custId" value={word}></input> */}
        <Button className='col-2 fav-col' id='delete-button' label="Sterge" icon="pi pi-trash" onClick={() => dispatch(deleteF(word))}/>
        {/* <Button className='' label="Detalii" icon="pi pi-list" onClick={() => findWord(word)} /> */}
      </div>
    </div>
  )
}

export default FavoritesItem
