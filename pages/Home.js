import React, { useState, useEffect,useContext } from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'


const Home = () =>{
    const [propList,setPropList] = useState([])
    const [govList,setGovList] = useState([])
    const [searchProp, setSearchProp] = useState({
        searchText: ""
    });

    const [searchPropList , setSearchPropList] = useState([])


    const AllPropApi = 'http://127.0.0.1:8000/api/allproperty'
    const AllGovApi = ' http://127.0.0.1:8000/api/allgovernorate'
    const searchPropAPi = ' http://127.0.0.1:8000/api/search/'


    const reqOneAllProp = axios.get(AllPropApi);
    const reqTwoAllGov = axios.get(AllGovApi);


    const handleEvent = (e) => {

        if (e.target.name === "searchBar") {
            setSearchProp({
                ...searchProp,
                searchText: e.target.value
            });

        }

    }

    const handelSubmit = (e) => {
        e.preventDefault();
        axios
            // console.log(searchProp.searchText)
            .get(`${searchPropAPi}${searchProp.searchText}`)
            .then((res) => {
                console.log(res.data)
                setPropList(res.data) 
            })
            .catch((err) => console.log(err))




    }

    useEffect(()=>{

        axios.all([reqOneAllProp,reqTwoAllGov]).then(axios.spread((...responses)=>{
            console.log(responses[0].data)
            console.log(responses[1].data)
            setPropList(responses[0].data)
            setGovList(responses[1].data)

        }))
        .catch((err)=>console.log(err))
   
    },[])
    useEffect(()=>{
   
    },[propList])

    return(
        <>

            <div className='container-xxl bg-dark'>  
                
                <div className="row d-flex justify-content-end align-items-center my-2">
                    <div className="col-md-5 my-2 ">

                        <input type="text" className="form-control" placeholder="Search by description"
                            name="searchBar"
                            onChange={(e) => handleEvent(e)}
                            value={searchProp.searchText}

                        />


                    </div>

                    <button className="btn btn-primary col-md-1" onClick={(e) => handelSubmit(e)}>Search</button>
                </div>

                <div className='row'>
                    <div className='col-md-2 bg-dark'>

                    <Form>
                        {govList.map((gov) => {
                            return (
                                <div key={gov.id} className="mb-3">
                                <Form.Check 
                                    className='text-light' 
                                    type='checkbox'
                                    id={gov.id}
                                    label={gov.name}
                                    
                                />

                           
                            </div>
                            )
                        })}
                        {/* {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    className='text-light' 
                                    type={type}
                                    id={`default-${type}`}
                                    label={`default ${type}`}
                                    
                                />

                           
                            </div>
                    ))} */}
                    </Form>

                    </div>
                    <div className='col-md-9'>
                        <div className='row justify-content-around'>
                        {propList.map((prop)=>{
                            return(
                                <div className='col-md-5 col-sm-6 my-3' key={prop.id}>

                                    <Card className='' >
                                        {/* <Link to={`/films/${prop.id}`} > */}
                                            {/* <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${prop.poster_path}`} /> */}
                                            <Card.Body className=''>
                                                <h5>{prop.describiton}</h5>
                                                <Card.Subtitle className="mb-2 text-muted">Seller: {prop.seller}</Card.Subtitle>
                                                <Card.Text>
                                                   Price: {prop.price}
                                                </Card.Text>
                                                <Card.Text>
                                                   Governorate: {prop.governorate}
                                                </Card.Text>
                                                <Card.Text>
                                                    Area: {prop.area}
                                                </Card.Text>
                                                <Card.Text>
                                                    Street: {prop.street}
                                                </Card.Text>
                                                <Card.Text>
                                                    Building: {prop.building_number}
                                                </Card.Text>
                                                <Card.Text>
                                                        Size: {prop.size}
                                                    </Card.Text>
                                                </Card.Body>
                                            {/* </Link> */}
                                        </Card>
                                
                                </div>
                            )
                        })}

                        </div>
                    </div>
            </div>

            </div>
        
            
        </>
    )
    
}

export default Home ;