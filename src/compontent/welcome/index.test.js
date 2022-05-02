import React from 'react'
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import Welcome from './index'
import { MemoryRouter } from 'react-router-dom'

describe('test start button', () => {
    it('test click to tell us page', () => {
        render(<Welcome />, {wrapper: MemoryRouter})

        const history = createMemoryHistory()
        const clickHandler = jest.fn(evt => { 
          evt.preventDefault()
          evt.stopPropagation()
          history.push('/tellUs')
        })
        screen.getByText('Start').onclick = evt => clickHandler(evt) 

        act(() => {
          userEvent.click(screen.getByText('Start'))
        })

        expect(clickHandler).toHaveBeenCalled() 
        expect(history.location.pathname).toBe("/tellUs") 
    })
})