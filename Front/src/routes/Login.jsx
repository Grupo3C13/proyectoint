import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Login() {
  const [userInfo, setUserInfo] = useState({
    mail: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    mail: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación de email con expresión regular
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!userInfo.mail) {
      setErrors({ ...errors, mail: 'El campo de email es obligatorio' });
    } else if (!emailRegex.test(userInfo.mail)) {
      setErrors({ ...errors, mail: 'El email no es válido' });
    } else {
      setErrors({ ...errors, mail: '' });
    }
    
    // Validación de contraseña
    if (!userInfo.password) {
      setErrors({ ...errors, password: 'El campo de contraseña es obligatorio' });
    } else {
      setErrors({ ...errors, password: '' });
    }
    
    // Si no hay errores de validación, puedes realizar otras acciones, como enviar la solicitud al servidor.
  };

  return (
    <Form className='rounded loginForm p-4 p-sm-3' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dirección Email</Form.Label>
        <Form.Control
          type="email"
          name="mail"
          placeholder="Ingresa tu email"
          value={userInfo.mail}
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          No compartiremos tu mail con nadie más.
        </Form.Text>
        <Form.Text >{errors.mail}</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Contraseña"
          value={userInfo.password}
          onChange={handleChange}
        />
        <Form.Text >{errors.password}</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordarme" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}


