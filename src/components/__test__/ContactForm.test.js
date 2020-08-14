import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '../ContactForm'

test('Fills out form', async () => {

  const { getByTestId, findByTestId } = render(<ContactForm />)

  const expectedFirstName = "Erik"
  const expectedLastName = "Faison"
  const expectedEmail = "erikf@email.com"

  const firstName = getByTestId('firstName')
  const lastName = getByTestId('lastName')
  const email = getByTestId('email')

  const button = getByTestId('submit')


  fireEvent.change(firstName, { target: { value: expectedFirstName } })
  fireEvent.change(lastName, { target: { value: 'Faison' } })
  fireEvent.change(email, { target: { value: 'erikf@email.com' } })
  fireEvent.click(button)

  expect(firstName.value.length).toBeGreaterThan(3)
  expect(firstName.value).toBe(expectedFirstName)
  expect(lastName.value).toBe(expectedLastName)
  expect(email.value).toBe(expectedEmail)

  await waitFor(() => findByTestId('print-out'))
})