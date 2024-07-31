import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Explore.css';
import { Link } from 'react-router-dom';
import pho1 from './USPA_Logo_e5e8f319-4b6a-47dd-bd4d-4422173c3ebb_600x (1).avif';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import pho90 from './2_f4bc10d7-f374-4d42-a258-3a8daad85f4c_540x.jpg'
import pho91 from './2_10339604-75a1-4057-a63e-055bf859d458_540x.jpg'
import pho92 from './2_ca3f3415-d351-4dd2-bd2b-d190c46594ef_540x.webp'
import pho93 from './2_17391cf7-fb3b-43e7-ad12-5e8b6fe719d8_540x.webp'
import pho94 from './2_df52e153-b424-4897-b693-113461c37826_540x.webp'
import pho95 from './2_fdbe88ba-2fed-4754-8fb3-13fb98f0e91f_540x.webp'
import pho96 from './2_7e20ef5b-0e80-4c59-aa9a-ce618972f7a9_540x.webp'
import pho97 from './2_369c4525-dff2-4616-b65d-c1376d817b6f_540x.webp'

const Explore = () => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        function simulateNetworkRequest() {
            return new Promise((resolve) => setTimeout(resolve, 2000));
        }

        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);
    const handleClick = () => setLoading(true);
    return (
        <div>
            <div id="header">
                <div id="head">
                    <p>Buy 2, Get 1 Free on new season styles. *T&C Apply.</p>
                </div>
            </div>
            <div id='sea'>
                <Navbar className="bg-body-tertiary justify-content-between">
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">

                                <Button
                                    variant="primary"
                                    disabled={isLoading}
                                    onClick={!isLoading ? handleClick : null}
                                >
                                    {isLoading ? 'Loading…' : 'Click to load'}
                                </Button>
                                <Link to="/App"> <Button type="submit" id='butt1'>Home</Button></Link>
                                <Link to="/Newuser"> <Button type="submit" id='butt'>Create New Account</Button></Link>
                            </Col>
                        </Row>
                    </Form>
                    <div id='but'>
                        <Button
                            variant="primary"
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}
                        >
                            {isLoading ? 'Loading…' : 'Shop All'}
                        </Button>
                    </div>
                </Navbar>

            </div>

            <div>
                <img src={pho1} alt='prop' id='pic1'></img>
            </div>
            <div>
                <p id='hm'>Home / AW-24 Shop All</p>
                <p id='hn'>AW-24 Shop All</p>
            </div>
            <hr></hr>
            <div id='fir'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" id="pho90" alt='prop' src={pho90} />
                    <Card.Body>
                        <Card.Title id='txt'>Pure Cotton Slim Polo Shirt</Card.Title>
                        <Card.Text>
                            ₹1,699.00
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <div id='sec'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" id="pho91" alt='prop' src={pho91} />
                        <Card.Body>
                            <Card.Title id='txt'>Contrast Logo Slim Polo Shirt for Men</Card.Title>
                            <Card.Text>
                                ₹1,499.00
                            </Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div id='tri'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" id="pho92" alt='prop' src={pho92} />
                        <Card.Body>
                            <Card.Title id='txt'>Boys Mid Rise Twill Solid</Card.Title>
                            <Card.Text id='tex1'>
                                ₹ 1,899.00
                            </Card.Text>
                            <Card.Text id='txt'> ₹ 1,330.00   - 30% OFF  </Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div id='for'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" id="pho93" alt='prop' src={pho93} />
                        <Card.Body>
                            <Card.Title id='txt'>Boys Mid Rise Twill Solid</Card.Title>
                            <Card.Text id='tex1'>
                                ₹ 2,299.00
                            </Card.Text>
                            <Card.Text id='txt'> ₹ 1,610.00   - 30% OFF  </Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div><br>
            </br>
            <hr></hr>
            <div id='fiv'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" id="pho94" alt='prop' src={pho94} />
                    <Card.Body>
                        <Card.Title id='txt'>Girls Stone Wash Slim Jeans</Card.Title>
                        <Card.Text id='tex1'>
                            ₹ 1,899.00
                        </Card.Text>
                        <Card.Text id='txt'> ₹ 1,330.00   - 30% OFF  </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>

           
            <div id='six'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" id="pho95" alt='prop' src={pho95} />
            <Card.Body>
                <Card.Title id='txt'>Boys Stone Wash Bootcut Slim Jeans</Card.Title>
                <Card.Text id='tex1'>
                    ₹ 1,999.00
                </Card.Text>
                <Card.Text id='txt'> ₹ 1,400.00   - 30% OFF  </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
            </div>
            <div id='svn'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" id="pho96" alt='prop' src={pho96} />
            <Card.Body>
                <Card.Title id='txt'>Boys Hooded Solid Puffer Jacket</Card.Title>
                <Card.Text id='tex1'>
                    ₹ 3,699.00
                </Card.Text>
                <Card.Text id='txt'> ₹ 2,590.00   - 30% OFF  </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
            </div>
            <div id='nin'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" id="pho97" alt='prop' src={pho97} />
            <Card.Body>
                <Card.Title id='txt'>Boys Sleeveless Solid Puffer Jacket</Card.Title>
                <Card.Text id='tex1'>
                    ₹ 2,999.00
                </Card.Text>
                <Card.Text id='txt'> ₹ 2,100.00   - 30% OFF  </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
            </div>
            </div><br>
            </br>
            <hr></hr>
            <div>
            
            </div>
        </div>
    )
}

export default Explore
