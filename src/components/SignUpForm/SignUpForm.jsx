import React from 'react'
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap'

import './SignUpForm.scss'

export default function SignUpForm(props) {
    const { setShowModal } = props

    const onSubmit = e => {
        e.preventDefault()
        setShowModal(false)
    }

  return (
    <div className='sign-up-form'>
        <h2>Crea tu cuenta</h2>
        <Form onSubmit={onSubmit}>
            <Form.Group> {/* Form group para el nombre y los apellidos */}
                <Row>
                    <Col>
                        <Form.Control type='text' placeholder='Nombre' />
                    </Col>
                    <Col>
                        <Form.Control type='text' placeholder='Apellidos' />
                    </Col>
                </Row>
            </Form.Group>
            <br/>
            <Form.Group>  {/* Form group para el correo */}
                <Form.Control type='email' placeholder='Correo electrónico' />
            </Form.Group>
            <br/>
            <Form.Group> {/* Form group para las contraseñas */}
                <Row>
                    <Col>
                        <Form.Control type='password' placeholder='Contraseña' />
                    </Col>
                    <Col>
                        <Form.Control type='password' placeholder='Repetir contraseña' />
                    </Col>
                </Row>
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">
                Crear cuenta
            </Button>
        </Form>
    </div>
  )
}
