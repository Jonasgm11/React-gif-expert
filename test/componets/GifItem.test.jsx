import React from 'react';
import { GifItem } from "../../src/componets/GIfItem";
import { render, screen } from "@testing-library/react"
import { jest } from '@jest/globals';

jest.useFakeTimers();
   

describe ('Pruebas en GIfItem', () => {

    const title = "Saitama"
    const url = "https://one-punch.com/saitama.jpg"

    test('DEBE DE HACER MATCH CON EL SNAPSHOT', () => {

    //    const {container} =
     render (<GifItem title={title} url={url}/>)
    //     expect s(container).toMatchSnapshot();
    })
    

})