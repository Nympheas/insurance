import React from 'react'
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import TellUs from './index'
import { MemoryRouter } from 'react-router-dom'

describe('test back button', () => {
    it('test click to welcome page', () => {
        render(<TellUs />, {wrapper: MemoryRouter})

        const history = createMemoryHistory()
        const clickHandler = jest.fn(evt => { 
          evt.preventDefault()
          evt.stopPropagation()
          history.push('/')
        })
        screen.getByText('Back').onclick = evt => clickHandler(evt) 

        act(() => {
          userEvent.click(screen.getByText('Back'))
        })

        expect(clickHandler).toHaveBeenCalled() 
        expect(history.location.pathname).toBe("/") 
    })
})

describe('test next button', () => {
    it('test click to summary page', () => {
        render(<TellUs />, {wrapper: MemoryRouter})

        const history = createMemoryHistory()
        const clickHandler = jest.fn(evt => { 
          evt.preventDefault()
          evt.stopPropagation()
          history.push('/summary')
        })
        screen.getByText('Next').onclick = evt => clickHandler(evt) 

        act(() => {
          userEvent.click(screen.getByText('Next'))
        })

        expect(clickHandler).toHaveBeenCalled() 
        expect(history.location.pathname).toBe("/summary") 
    })
})