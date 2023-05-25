import { useReducer } from 'react';
import './App.css';
import data from './data.js';
import SingleTech from './components/SingleTech';

const initialState={
    tech:data,
    isListEmpty:false
};

const reducer = (state, action) => {

    let tempData=[...data];
    
    if(action.type==='CLEAR_LIST'){
      return {
        tech:[], isListEmpty:true
      }
    }

    if(action.type === 'REMOVE'){
      let newList = state.tech.filter((i)=> i.id !== action.payload.id);
      return {
        tech:newList, isListEmpty:false
      }
    }

    if(action.type === 'REFRESH'){
      return {
        tech:tempData, isListEmpty:false
      }
    }

    return state;
};

function App() {

  const [state, dispatch]=useReducer(reducer, initialState);
  
  const removeTech = (id) => {
      dispatch({type:'REMOVE', payload:{id}});
  }

  const clearList = () => {
    dispatch({type:'CLEAR_LIST'});
  };

  const refreshList = () => {
    dispatch({type:'REFRESH'});
  }

  if(state.isListEmpty){
    return <>
          <h3>List is Empty!</h3>
          <button onClick={refreshList}>Refresh</button>
    </>
  }

  return (
    <>
      useReducer Basics
      <br/>
      <hr/>
      <div>
        {
            state.tech?.map((tech)=>{
                return <SingleTech key={tech.id} {...tech} removeTech={removeTech}/>
            })
        }
      </div>
      <button onClick={clearList} style={{ background:'cyan'}}>Clear</button>
    </>
  )
}

export default App
