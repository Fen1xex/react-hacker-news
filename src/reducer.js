const reducer = (state, action) => {
  if (action.type === 'FETCH_NEWS') {
    return { ...state, hits: action.payload }
  }
}

export default reducer
