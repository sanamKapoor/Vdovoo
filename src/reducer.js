
export default (state, action) => {
  switch(action.type){
    case 'PLAY_VIDEO': 
      return {
        ...state,
        error: '',
        loading: false,
        searchResult: [],
        video: action.payload,
      }
    case 'REMOVE_VIDEO':
      return{
        ...state,
        error: '',
        loading: false,
        searchResult: [],
        video: '',
      }
    case 'SEARCH_VIDEOS':
      return {
        ...state,
        searchResult: action.payload,
        loading: false,
        video: '',
        error: '',
      }
    case 'ERROR':
      return{
        ...state,
        loading: false,
        video: '',
        searchResult: [],
        error: action.payload
      }
    default: 
      return state
  }
}
