import React from 'react';
import { GifItem } from "../../src/componets/GIfItem";
import { render, screen} from "@testing-library/react"

   

describe ('Pruebas en GIfItem', () => {

    const title = "Saitama"
    const url = "https://one-punch.com/saitama.jpg"

    test('DEBE DE HACER MATCH CON EL SNAPSHOT', () => {

       const {container} = 
       render (<GifItem title={title} url={url} />)
        expect (container).toMatchSnapshot();

    })
    
    test('DEBE MOSTRAR IMAGEN CON URL Y EL ATL INDICADO', () => {
      
        render (<GifItem title={title} url={url} />)
        // screen.debug();
        // expect (screen.getByRole('img').src).toBe(url)
        // expect (screen.getByRole('img').alt).toBe(title)

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    })
    
        test('DEBE MOSTRAR EL TITULO EN EL COMPONENTE', () => {

            render (<GifItem title={title} url={url} />)
            expect (screen.getByAltText(title)).toBeTruthy();
        })
        

})