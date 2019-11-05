import React, { useEffect, Fragment, useReducer } from 'react';
import Line from './Line.js';
import { getLineNumber, getHalfDeck } from '../services';
import Spinner from './layouts/Spinner.js';
import LastCard from './LastCard';

const initialState = {
  pileOne: [],
  pileTwo: [],
  pileThree: [],
  finalDeck: [],
  repeat: 3,
  card: null,
  halfDeck: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIRST_PILES':
      return {
        ...state,
        pileOne: action.payload.slice(0,7),
        pileTwo: action.payload.slice(7,14),
        pileThree: action.payload.slice(14,21)
      }
    case 'UPDATE_HALFDECK':
      return {
        ...state,
        halfDeck: action.payload
      }
    case 'RESET_GAME':
      console.log(initialState)
      console.log(state)
      return {
        initialState,

      }

    case 'SET_FINAL_DECK':
      return {
        ...state,
        finalDeck: action.payload
      }
    case 'SET_NEW_PILES':
      return {
        ...state,
        pileOne: action.payload.newPileOne,
        pileTwo: action.payload.newPileTwo,
        pileThree: action.payload.newPileThree
      }
    case 'REPEAT':
      return {
        ...state,
        repeat: action.payload
      }
    case 'SET_LAST_CARD':
      return {
        ...state,
        card: action.payload
      }
    default:
      return state;
  }
}

const ThreeLines = () => {

  const [ state, dispatch ] = useReducer(reducer, initialState)

  const resetGame = async () => {
    dispatch({
      type: 'RESET_GAME'
    })
  }

  const updateHalf = async () => {
    const response = await getHalfDeck()
    await dispatch({
      type: 'UPDATE_HALFDECK',
      payload: response.data.cards

    })
  }

  useEffect(()=>{
    if(state.halfDeck === null) updateHalf()


  },[state.halfDeck])

  useEffect(() => {
    if(state.halfDeck){
      dispatch({
        type: 'SET_FIRST_PILES',
        payload: state.halfDeck
      })
    }
  }, [state.halfDeck])

  useEffect(()=>{
    if(state.repeat === 0) setLastCard(state.finalDeck)
    // eslint-disable-next-line
  },[state.repeat])

  const setLastCard = async (deck) => {
    await dispatch({
      type: 'SET_LAST_CARD',
      payload: deck[10]
    })
  }

  const selectLine = async (lineNum) => {
    const response = await getLineNumber(lineNum, state.pileOne, state.pileTwo, state.pileThree);
    const { newPileOne, newPileTwo, newPileThree, newDeck } = response;
      await dispatch({
        type: 'SET_NEW_PILES',
        payload: {newPileOne,newPileTwo,newPileThree}
      })
      await dispatch({
        type: 'SET_FINAL_DECK',
        payload: newDeck
      })
      await dispatch({
        type: 'REPEAT',
        payload: state.repeat - 1
      })
  }

    return (
        <div>
        {!state.halfDeck ? <Spinner/> : null}
          {state.card ? <LastCard card={state.card} resetGame={resetGame} /> : <Fragment>
            <Line pile={state.pileOne} selectLine={selectLine} lineNum={1} />
            <Line pile={state.pileTwo} selectLine={selectLine} lineNum={2} />
            <Line pile={state.pileThree} selectLine={selectLine} lineNum={3} />
          </Fragment>}

        </div>
    )
}

export default ThreeLines;
