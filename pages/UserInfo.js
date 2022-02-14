import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { Form, Button ,Container,Row , Col,Card} from 'react-bootstrap'
import '../resources/profilecss/profile.css'
import { useForm } from "react-hook-form";


const UserInfo = () => {
  const [image, setImage] = useState(
    "https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
  );

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };


  useEffect(() => {
   
  }, [])


  
  const {
    register,
    handleSubmit,
    
    formState: {  isSubmitting, touchedFields },
  } = useForm()
  
  const onSubmit = (data: mydata) =>{
    setName(data.name)
    setTitle(data.title)
    setEmail(data.email)
    setAddress(data.address)
  } 

  return (
      <>
      

      
      <Container className="bg-light" >

      <Row>
      <div className="pro">

         <h1 className="text-center">Profile Page</h1>
      </div>


      
      </Row>
     

           
            <Row className="py-3">

            <Col>

        <Card  className="card-container">
        
        <label htmlFor="input" className="image-upload">            
                     
        <Card.Img 
                    src={image}
                    className="image-holder img-fluid rounded-circle m-3"
                    id="img"
                    style={{
                      margin: "auto",
                      width: "153px",
                      height: "153px",
                      border: "2px solid gray",
                      borderRadius: "50%",
                      marginTop: "1rem",
                    }}/>
                    <input
                    type="file"
                    name="image-upload"
                    id="input"
                    accept="image/*"
                    onChange={imageHandler}
                    style={{ display: "none" }}
                  />
                  <input
                    type="file"
                    name="image-upload"
                    id="input"
                    accept="image/*"
                    onChange={imageHandler}
                    style={{ display: "none" }} />
                    </label>
        <h2 className="text-light">{name ? name : "name" }</h2>
        <h5 className="text-light">{title ? title : "Job Title"}</h5>
        <h6 className="text-light">{email ? email : "Email"}</h6>
        <p>{address ? address : "Address"}</p>
        
        </Card>
            </Col>
            
           
            <Col>
            <Card className="card-container">
            <Form onSubmit={handleSubmit(onSubmit)} >

                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    {...register("name")}
                                    type='name'
                                    placeholder='Enter name'
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='title'>
                                <Form.Label>Job title</Form.Label>
                                <Form.Control
                                {...register("title")}
                                    type='text'
                                    placeholder='Enter Job title'
                                    // value={title}
                                    // onChange={(e) => setTitle(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                {...register("email")}
                                    type='email'
                                    placeholder='Enter Email'
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>


                            <Form.Group controlId='address'>
                            <Form.Label>Address</Form.Label>
                                <Form.Control
                                {...register("address")}
                                    type='text'
                                    placeholder="Address"
                                    // value={address}
                                    // onChange={(e) => setAddress(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                                <div className="buttons">
                    <button type="submit" className="primary m-4">
                      Update
                    </button>
                     </div>
                           
                        </Form>
            </Card>
                   
                    </Col>
                    </Row>
            </Container>
            
      
    </>
  );
};

export default UserInfo;