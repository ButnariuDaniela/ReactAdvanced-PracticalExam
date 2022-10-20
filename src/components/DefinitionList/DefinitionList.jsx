import React from 'react';
import { useSelector } from 'react-redux';
import { showDefinitions } from '../../utils';
import DefinitionItem from '../DefinitionItem/DefinitionItem';


function DefinitionList() {
  const partOfSpeech = useSelector(showDefinitions).definitions.map((word) =>  {
    return{
      word: word.word,
      partOfSpeech: word.meanings.map((meaning) => meaning.partOfSpeech),
      meanings: word.meanings
    }
  }
  )
  console.log(useSelector(showDefinitions).definitions)

  return (
    <div>
       <div className='container container-min-max-width '>
        {
       (partOfSpeech)
       ? partOfSpeech.map((partOfSpeech, index) => {
                return <DefinitionItem
                meanings={partOfSpeech.meanings} 
                partOfSpeech={partOfSpeech.partOfSpeech}
                word={partOfSpeech.word}
                key={index}
                id={index+1}
                />
            }
            ).reverse()   
        : null}
        </div>
    </div>
  )
}

export default DefinitionList
