import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addF } from "../../redux/favorites";
import { getDefi } from '../../redux/definitionsSlice';
import { showFavorites } from '../../utils';
import { showDefinitions } from '../../utils';
import Layout from '../../components/Layout/Layout';
import DefinitionList from '../../components/DefinitionList/DefinitionList';



function Home() {
    const presentFavorites = useSelector(showFavorites)
    const def = useSelector(showDefinitions)
    const dispatch = useDispatch();
    function getVal() {
        const val = document.querySelector('#input').value;
        return val;
      }
    
  return (
    <div className='container container-min-max-width'>
     <Layout>
        <br />
        <div className='row my-5 mx-1'>
            <label className='col-3 col-lg-2 border-info' htmlFor="word"><strong>Introdu cuvantul cautat</strong></label>
            <input
                className='col-9 col-lg-6 border-info'
                id='input'
                type='text'
                name='word'
                required='yes'
                // onChange={(event) =>console.log(event)}
            />
            <button
                aria-label="Cauta"
                className='col-12 col-md-6 col-lg-2 fav-col'
                onClick={() => {
                    let newWord = getVal();
                    dispatch(getDefi(newWord));
                    }}    
                >
                    Cauta
                </button>
            <button
                aria-label="Adauga la favorite"
                className='col-12 col-md-6 col-lg-2 fav-col'
                onClick={() => {
                    let newWord = getVal();
                    dispatch(getDefi(newWord));
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
                    dispatch(addF(newWord));
                    }}    
                >
                    Adauga la favorite
                    </button>
        </div>  

            <div>Favorite: {presentFavorites}</div>
            {(def.error !== 'Cuvant inexistent')
            ?null
            :<div className='text-danger fst-italic fs-3'>Cuvantul <strong>{getVal()} </strong>nu exista sau definitie indisponibila.</div>
            }
            <DefinitionList></DefinitionList>
            
     </Layout>
    </div>
  )
}

export default Home
