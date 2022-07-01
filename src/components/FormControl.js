import axios from 'axios'
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Error from './Error'
import './Form.css'
function FormControl () {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [show, setShow] = useState(true)
  const [message, setMessage] = useState('')
  const [isStatus, setIsStatus] = useState(0)

  const toggleShowA = () => {
    setShow(false)
    setMessage('')
    setIsStatus(0)
  }
  const submitHandler = async e => {
    e.preventDefault()
    try {
      if (!title) {
        setShow(true)
        setMessage('Title and Body should not be empty')
        setIsStatus(400)
        return
      }

      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          userId: 1,
          title: title,
          body: body
        }
      )

      console.log('response', response.data)

      setShow(true)
      setMessage('Added successfully')
      setIsStatus(response.status)
    } catch (e) {
      setShow(true)
      setMessage(e.message)
      setIsStatus(e.response.status)
    }

    setBody('')
    setTitle('')
  }
  return (
    <div>
      {message && (
        <Error
          showA={show}
          toggleShowA={toggleShowA}
          message={message}
          status={isStatus}
        />
      )}
      <div>
        <Form className='box' onSubmit={submitHandler}>
          <Form.Group className='mb-3 ' controlId='formBasicTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='title'
              placeholder='enter title'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicTitle'>
            <Form.Label>Body</Form.Label>
            <Form.Control
              type='text'
              placeholder='body'
              value={body}
              onChange={e => setBody(e.target.value)}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default FormControl
