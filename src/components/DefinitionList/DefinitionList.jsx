import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showDefinitions } from '../../utils';
import DefinitionItem from '../DefinitionItem/DefinitionItem';
import { addDef, addF } from '../../redux/favorites';
import {Button} from 'primereact/button';
import { showFavorites } from '../../utils';
import { deleteF } from '../../redux/favorites';

function DefinitionList() {
  const wordsDefinitions = useSelector(showDefinitions).definitions.map((word, index) =>  {
    return{
      key: index,
      word: word.word,
      partOfSpeech: word.meanings.map((meaning) => meaning.partOfSpeech),
      meanings: word.meanings
    }
  }
  )
  const dispatch = useDispatch();
  const presentFavorites = useSelector(showFavorites);
  

  return (
    <div>
       <div className='container container-min-max-width '>
        {
        (wordsDefinitions)
        ? wordsDefinitions.map((definition, index) => {
                // console.log(index)
                const indexWord = presentFavorites.findIndex(fav => fav === definition.word)
                return <div className='d-flex justify-content-start'>
                <DefinitionItem
                meanings={definition.meanings} 
                partOfSpeech={definition.partOfSpeech}
                word={definition.word}
                key={index}
                id={index+1}
                />
                {
                  
                (indexWord === -1)
                ?<Button
                // aria-label="Adauga la favorite"
                icon="pi pi-heart"
                className='mt-5 align-self-start p-button-rounded p-button-lg p-button-text p-button-warning'
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
                  </Button>
                  :<Button icon="pi pi-heart"
                  className='mt-5 align-self-start fav-col p-button-rounded p-button-lg p-button-text p-button-outlined p-button-warning'
                  onClick={() => dispatch(deleteF(definition.word))}></Button>
                }
                   </div>
            }
            ).reverse()   
        : null}
        
        </div>
    </div>
  )
}

export default DefinitionList
