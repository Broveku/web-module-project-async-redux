import React, { useEffect } from 'react'
import { getQuote } from '../actions'
import { connect } from 'react-redux'


const Quote = (props) =>{
    const {character, error, isFetching} = props

    useEffect(()=>{
        props.getQuote()
    }, [])



    if (error) {
        return <h2>Error:{error}</h2>
    }

    if (isFetching) {
        return <h2>Loading...</h2>
    }

    const handleClick = () =>{
        props.getQuote()
        
    }

    return (
        <>
            <div>
                <h2>{character.anime}</h2>
                <h3>{character.character}</h3>
                <p>'{character.quote}'</p>
                <button onClick={handleClick}>Get New Quote</button>
            </div>
        </>

    )
}

const mapStateToProps = state =>{
    return{
        character: state.character,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getQuote})(Quote)