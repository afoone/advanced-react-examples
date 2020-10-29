import {  screen } from '@testing-library/react';
import {setupServer} from 'msw/node'
import configureMockStore from 'redux-mock-store'
import CommentList from './CommentList';
import {render} from '../redux/render'

const mockStore = configureMockStore()
const initialState ={
    comments: [
        "hola",
        "adios",
        "cuando"
    ]
}

const store = mockStore(initialState)


describe('comprobamos los comentarios', () => {

    beforeEach(()=>{
       
        render(<CommentList/>, initialState)
    })

    test("muestra un li por comentario", ()=>{
        
        const nComentarios = store.getState().comments;
        const nLis = screen.getAllByRole("listitem").length;
        expect(nLis).toBe(nComentarios);

        
    })
    
    test("el texto de cada comentario es visible", ()=>{
        
    })
}

)

