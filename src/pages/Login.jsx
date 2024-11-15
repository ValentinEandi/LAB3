import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

function Login() {
  const { login, currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <Card className="p-4 shadow-lg">
            <Card.Body>
              <h2 className="text-center mb-4">Iniciar sesión</h2>
              {!currentUser ? (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Introduce tu email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Introduce tu contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Iniciar sesión
                  </Button>
                </Form>
              ) : (
                <Button variant="danger" onClick={handleLogout} className="w-100">
                  Cerrar sesión
                </Button>
              )}
              {!currentUser && (
                <p className="text-center mt-3">
                  ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
                </p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
