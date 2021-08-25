import axios from "axios"

export const traerTodos = () => async (dispatch) =>{
    const respuesta = await axios.get('http://localhost:6969/results')

    dispatch({
        type: 'traer_usuarios',
        payload: respuesta.data
    })
}