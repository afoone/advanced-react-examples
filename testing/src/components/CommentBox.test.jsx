import { fireEvent, render, screen } from '@testing-library/react';
import CommentBox from './CommentBox';


describe("comment box text", ()=>{

    beforeEach(()=>render(<CommentBox/>))
    test("Muestra un text area y un botón", () =>{
        expect(screen.getAllByRole('textbox').length).toBe(1)
        expect(screen.getAllByRole('button').length).toBe(1)
    })

    test("Un usuario puede introducir un texto en el textarea y pulsar el botón", ()=> {
        const textbox = screen.getByRole('textbox');
        fireEvent.change(textbox, { target: { value: "pepe" } });
        expect(textbox.value).toBe("pepe");
        fireEvent.click(screen.getByRole("button"))
    })
    test("cuando se pulsa el botón el textarea se queda vacio", ()=>{
        const textbox = screen.getByRole('textbox');
        fireEvent.change(textbox, { target: { value: "pepe" } });
        expect(textbox.value).toBe("pepe");
        fireEvent.click(screen.getByRole("button"))
        expect(textbox.value).toBeFalsy()
    })
})

