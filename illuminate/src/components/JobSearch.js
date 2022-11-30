import React from "react";
import { useReducer, useEffect } from "react";
import axios from "axios";



const ACTIONS = {
MAKE_REQUEST: 'make-request',
GET_DATA: 'get-data',
ERROR : 'error'

}

const BASE_URL='http://api.adzuna.com/v1/api/jobs/ca/search/1$3Fapp_id$3D07dac169$26app_key$3D28cf0caba0f7d5416c14a3f78570420d$26results_per_page$3D20$26content-type$3Dapplication/json'

function reducer(state,action){
    switch(action.type){
        case ACTIONS.MAKE_REQUEST:
            return {loading: true, jobs: [] }

        case ACTIONS.GET_DATA:
            return{ ...state, loading:false, jobs: action.payload.jobs}
        case ACTIONS.ERROR:
            return { ...state, loading:false, error:action.payload.error, jobs: [] }
        default:
            return state
    }}

export default function  JobSearch(params, page ){
const [state, dispatch] = useReducer(reducer, {jobs:[], loading: true})

useEffect(()=>{
    

    const cancelToken=axios.CancelToken.source()
    dispatch ({type: ACTIONS.MAKE_REQUEST })
    axios.get(BASE_URL, {
        "Content-Type": 'application/json',
        
        
        cancelToken: cancelToken.token,
        params: { ...params}
    }).then(res=>{
        dispatch({type:ACTIONS.GET_DATA, payload: {jobs: res.data.results}})
    }).catch(e=>{
        if(axios.isCancel(e)) return
        dispatch({type:ACTIONS.ERROR, payload: {error: e}})
    })

return ()=>{
    cancelToken.cancel()
}

},[params, page])

return state
}