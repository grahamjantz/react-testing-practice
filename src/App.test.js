import React from 'react'
import { render } from '@testing-library/react'

import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'

describe('render App component', () => {
  test('render App', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })
})