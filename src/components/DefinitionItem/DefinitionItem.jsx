import React from 'react';

function DefinitionItem(props) {
  const { id, word, meanings } = props

  return (
    <div className='container container-min-max-width'>
      <div className='row mt-5'>
        <div className='container fs-4 text-uppercase fw-bold mt-3 d-flex fav-col-text'>{id} - {word}
        </div>
      </div>

      <div className='row ms-4'>
        {
          meanings.map((part, index) => {
            return <div className="" key={index}>
              <div className="">
                <p className='mb-0 mt-3 fst-italic fw-bold'>Part of speech: {part.partOfSpeech.toUpperCase()}</p>
              </div>
              <div className='ms-4'><i>Definitions</i>
                {
                  part.definitions.map((def, index) => {
                    return <div className="" key={index}>
                      <div className="">
                        <div>{index + 1}. {def.definition}</div>
                        {(def.synonyms.length > 0)
                          ? <div className='ms-4'><i>Synonyms: </i>{def.synonyms.join(', ')}</div>
                          : null
                        }
                        {(def.antonyms.length > 0)
                          ? <div className='ms-4'><i>Antonyms: </i>{def.antonyms.join(', ')}</div>
                          : null
                        }
                      </div>

                    </div>
                  })
                }
              </div>
              {(part.synonyms.length > 0)
                ? <div><i><strong>Synonyms: </strong></i>{part.synonyms.join(', ')}</div>
                : null
              }
              {(part.antonyms.length > 0)
                ? <div><i><strong>Antonyms: </strong></i>{part.antonyms.join(', ')}</div>
                : null
              }
            </div>
          })
        }
      </div>
    </div>
  )
}

export default DefinitionItem
