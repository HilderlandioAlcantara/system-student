import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export function FormUpdate({modalClose, studentData, fetchStudents}) {
  const [validated, setValidated] = useState(false);
  const [studentDataForm, setStudentDataForm] = useState({
    id: studentData.id,
    name: studentData.name,
    email: studentData.email,
    phone: studentData.phone,
    city: studentData.city,
  });

  const API = "http://localhost:3000/students/"
  
  console.log(studentDataForm);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
      event.preventDefault();
      updateStudent();
  };

    function updateStudent() {
      axios.put(API +`${studentData.id}`, studentDataForm )
      .then((res)=>{
        alert(res.data);
        fetchStudents();
        modalClose();

      })
      .catch((error)=>alert(error.response.data))
    }

    function deleteStudent() {
      const isDelete = confirm('deseja realmente deletar o aluno');
      if (isDelete) {
        
        axios.delete(API +`${studentData.id}` )
          .then((res)=>{
          alert(res.data);
          fetchStudents();
          modalClose();
  
        }).catch((error)=>alert(error.response.data))
      }
    }


    function handleInputChange(event){
      const {name, value} = event.target;
      //console.log({name,value});

      setStudentDataForm({
        ...studentDataForm,
        [name]: value
      })
      
    }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
      <Row className="mb-3">
        <Form.Group as={Col} md="2,5" controlId="id">
          <Form.Label>Id</Form.Label>
          <Form.Control 
           type="text"
           placeholder="Id do aluno"
           disabled
           required 
           value={studentDataForm.id}
           />
          <Form.Control.Feedback type="invalid">
            Campo obrigatório
          </Form.Control.Feedback>
        </Form.Group>
        </Row>


      <Row className="mb-3">
        <Form.Group  md="6" controlId="name">
          <Form.Label>Nome</Form.Label>
          <Form.Control 
           type="text"
           placeholder="Nome do aluno"
           required
           name='name'
           value={studentDataForm.name}
          onChange={handleInputChange}

           />
          <Form.Control.Feedback type="invalid">
            Campo obrigatório
          </Form.Control.Feedback>
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group md="3" controlId="email">

          <Form.Label>Email</Form.Label>
          <Form.Control
           type="email" 
           placeholder="State" 
           required
           name='email'
           value={studentDataForm.email}
           onChange={handleInputChange}
           />

          <Form.Control.Feedback type="invalid">
            Campo Obrigatório
          </Form.Control.Feedback>

            </Form.Group>
        </Row>        


        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="phone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
           type="tel" 
           placeholder="telefone do aluno"
           required 
           name='phone'
           value={studentDataForm.phone}
           onChange={handleInputChange}

           />

          <Form.Control.Feedback type="invalid">
                 Campo Obrigatório
          </Form.Control.Feedback>
        </Form.Group>
      
      <Form.Group className="mb-3">
        
      <Form.Group as={Col} md="6" controlId="city">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
           type="text" 
           placeholder="cidade do aluno"
           required 
           name='city'
           value={studentDataForm.city}
           onChange={handleInputChange}

           />

          <Form.Control.Feedback type="invalid">
                 Campo Obrigatório
          </Form.Control.Feedback>
        </Form.Group>

      </Form.Group>

      </Row>

      <Modal.Footer>
          <Button variant="danger" onClick={deleteStudent}>
            Delete
          </Button>
          <Button type = "submit" variant="success" >
            Atualizar
          </Button>
        </Modal.Footer>

      
    </Form>
  );
}

