import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showDefinitions } from '../../utils';
import DefinitionItem from '../DefinitionItem/DefinitionItem';
import { addDef, addF } from '../../redux/favorites';


function DefinitionList() {
  const wordsDefinitions = useSelector(showDefinitions).definitions.map((word, index) =>  {
    return{
      word: word.word,
      partOfSpeech: word.meanings.map((meaning, index) => meaning.partOfSpeech),
      meanings: word.meanings
    }
  }
  )
  const dispatch = useDispatch();

  return (
    <div>
       <div className='container container-min-max-width '>
        {
       (wordsDefinitions)
       ? wordsDefinitions.map((definition, index) => {
                return <div className='d-flex'>
                <DefinitionItem
                meanings={definition.meanings} 
                partOfSpeech={definition.partOfSpeech}
                word={definition.word}
                key={index}
                id={index+1}
                />
                <button
                aria-label="Adauga la favorite"
                className='align-self-start fav-col'
                onClick={() => {
                  const newDefinition = JSON.stringify(definition) 
                  if(localStorage.getItem('wordsDefinitions')!==null){
                    if(localStorage.getItem('wordsDefinitions')===''){
                        localStorage.setItem('wordsDefinitions','[' + newDefinition +']')
                    } else{
                      const newTemp = [...JSON.parse(localStorage.getItem('wordsDefinitions')), definition]
                      localStorage.setItem('wordsDefinitions',JSON.stringify(newTemp))
                    }  
                  }else {
                    localStorage.setItem('wordsDefinitions','[' + newDefinition +']')
                }
                dispatch(addDef(definition));
                dispatch(addF(definition.word))
                    let newWord = definition.word;
                    if(localStorage.getItem('favoritesWords')!==null){
                        if(localStorage.getItem('favoritesWords')===''){
                            localStorage.setItem('favoritesWords',newWord)
                        } else{
                            const temp = localStorage.getItem('favoritesWords') + ',' + newWord;
                            localStorage.setItem('favoritesWords',temp)
                        }  
                    }else {
                        localStorage.setItem('favoritesWords',newWord)
                    }
                    }}    
                >
                    Adauga la favorite
                    </button>
                   </div>
            }
            ).reverse()   
        : null}
        
        </div>
    </div>
  )
}

export default DefinitionList
