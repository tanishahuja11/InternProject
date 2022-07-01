import React, { useState } from 'react'
import { Button, Col, Toast } from 'react-bootstrap'
function Error (props) {
  const colors = props.status <= 300 ? true : false

  return (
    <Col className=''>
      <div
        style={{
          position: 'fixed',
          top: '11%',
          left: '70%',
          backgroundColor: colors,
          zIndex: '150',
          color: 'white'
        }}
      >
        <Toast
          className='d-inline-block m-1'
          onClose={ props.toggleShowA}
          show={props.show}
          delay={3000}
          autohide
          bg={colors === true ? 'success' : 'danger'}
        >
          <Toast.Header>
            <img
              src='holder.js/20x20?text=%20'
              className='rounded me-2'
              alt=''
            />
            <strong className='me-auto'>
              {colors === true ? 'Success' : 'Error'}
            </strong>
          </Toast.Header>
          <Toast.Body>{props.message}</Toast.Body>
        </Toast>
      </div>
    </Col>
  )
}

export default Error
