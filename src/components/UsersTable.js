import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/esm/Table'
import axios from 'axios'
import Error from './Error'
import Map from './Map'
import Button from 'react-bootstrap/esm/Button'
function UsersTable () {
  const [user, setUser] = useState([])
  const [show, setShow] = useState(true)
  const [message, setMessage] = useState('')
  const [isStatus, setIsStatus] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [longitute, setLongitute] = useState(0)

  const toggleShowA = () => {
    setShow(false)
    setMessage('')
    setIsStatus(0)
  }
  //   AIzaSyC8dT4lrRJXOcnlG06z4vpTMWfdubiZQuY
  useEffect(() => {
    try {
      async function fetch () {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )

        setUser(response.data)
      }
      fetch()
    } catch (e) {
      setShow(true)
      setMessage(e.message)
      setIsStatus(e.response.status)
    }
  }, [])

  const clickHandler = user => {
   
    setLatitude(user.address.geo.lat)
    setLongitute(user.address.geo.lng)
  }
  return (
    <>
      {message && (
        <Error
          showA={show}
          toggleShowA={toggleShowA}
          message={message}
          status={isStatus}
        />
      )}
      <main className='box'>
        <Map lat={latitude} lng={longitute} />
      </main>
      <div className='box'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {user.length > 0 &&
              user.map((user, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button onClick={() => clickHandler(user)}>Mark on Map </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default UsersTable
