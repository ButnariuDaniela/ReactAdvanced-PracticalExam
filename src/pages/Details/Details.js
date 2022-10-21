import React from 'react';
import Layout from '../../components/Layout/Layout';
import DefinitionItem from '../../components/DefinitionItem/DefinitionItem';
import {useParams} from 'react-router-dom'

function Details() {

  const presentWord = useParams().word;
  const storedDefinitions = JSON.parse(localStorage.getItem("wordsDefinitions"))
  const presentDefinition = storedDefinitions.filter((definition, index)=>definition.word === presentWord);
  return (
    <div>
        <Layout>
            <DefinitionItem
            meanings={presentDefinition[0].meanings} 
            partOfSpeech={presentDefinition[0].partOfSpeech}
            word={presentDefinition[0].word}
            key={presentDefinition[0].index}
            id={presentDefinition[0].index+1}
            ></DefinitionItem>
        </Layout>
    </div>
  )
}

export default Details
