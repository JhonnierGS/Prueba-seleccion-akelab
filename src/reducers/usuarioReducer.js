const INITIAL_STATE = {
    usuarios: [],
    filterMovies: [],
    orderMovies: []
}

const usuarioReducer =  

        (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case 'traer_usuarios':
                return {...state, usuarios: action.payload}
            case 'upDateFilter':
                    return {...state, filterMovies: action.payload}
            case '@cargarFiltros':
                    return {...state, filterMovies: action.payload}
                
                    default: return state
            }
        }

export default usuarioReducer


