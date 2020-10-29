import { render, screen } from '@testing-library/react';
import App from './App';


describe('muestra los elementos', () => {

  beforeEach( ()=>
    render(<App/>)
  )

  test('Muestra el commentbox en App', async ()  =>{
    const res = await screen.getByTitle("comment-box")
    expect(res).toBeTruthy()
    
  })
  
  test('Muestra el commentlist en App',async ()  =>{
    const res = await screen.getByTitle("comment-list");
    expect(res).toBeTruthy()
  })

})



