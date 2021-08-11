import axios from 'axios'


export const getQuote = () =>{
    return(dispatch) => {
        dispatch(fetchStart())
        axios.get('https://animechan.vercel.app/api/quotes')
            .then(res=>{
                dispatch(fetchSuccess(res.data[0]))
            })
            .catch(err=>{
                dispatch(fetchFail(err))
            })
    }
}



export const FETCH_START = 'FETCH_START'
export const fetchStart = ()=>{
    return({type: FETCH_START})
}

export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const fetchSuccess= (data)=>{
    return({type: FETCH_SUCCESS, payload:data})
}

export const FETCH_FAIL = 'FETCH_FAIL'
export const fetchFail = (error)=>{
    return({type:FETCH_FAIL, payload:error})
}