import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pho1 from './USPA_Logo_e5e8f319-4b6a-47dd-bd4d-4422173c3ebb_600x (1).avif'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import pho2 from './AMERICAN_INDEPENDENCE_BANNER_1800x800_1.webp';
import pho3 from './FOOTWEAR_DEKSTOP_BANNER_1800x800__3.webp';
import pho4 from './SALE_SEC_CAT_TILE_2_d1b0647d-6d84-447a-b620-2cca8adef2ab_360x.webp';
import pho5 from './SALE_SEC_CAT_TILE_4_607490ed-424e-41b5-bc30-f0a39b8ce381_360x.webp';
import pho6 from './FOOTWEAR_EOSS_STC_1_360x.webp';
import pho7 from './SALE_SEC_CAT_TILE_3_e34622ac-1b35-47e1-b861-a13651d323e1_360x.webp';
import Carousel from 'react-bootstrap/Carousel';
/*import ExampleCarouselImage from 'components/ExampleCarouselImage';*/
import pho8 from './NEW_ARRIVALS_-_WOMEN_DEKSTOP_BANNER (1).webp';
import pho9 from './NEW_ARRIVALS_-_MEN_DEKSTOP_BANNER_copy_1.webp';
import pho10 from './COMING_SOON_DEKSTOP_BANNER_copy_4_2.webp';
import pho11 from './SMF_new_1800x.webp';
import pho12 from './HP_BANNER_with_shop_now_1.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import pho14 from './WW_CB_02_copy_129d550e-f97a-4112-8147-2cfb1662cdd5_720x.webp'
import pho13 from './WW_CB_01_613ca6c2-8712-402c-824f-019269b18a0a_720x.webp';
import { Link } from 'react-router-dom';
function App() {



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
                <Link to="/Explore"> <Button type="submit" id='butt1'>Explore</Button></Link>
                <Link to="/Newuser"> <Button type="submit" id='butt'>Create New Account</Button></Link>
              </Col>
            </Row>
          </Form>
          <div id='but'>
            <Link to="/"><Button
              variant="primary"
              disabled={isLoading}
              onClick={!isLoading ? handleClick : null}
            >
              {isLoading ? 'Loading…' : 'Log Out'}
            </Button>
            </Link>
          </div>
        </Navbar>

      </div>

      <div>
        <img src={pho1} alt='prop' id='pic1'></img>
      </div>
      <div id='mid'>
      </div>
      <div id='midd'>

        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="New Arrival" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Women
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Innerwear
                  </NavDropdown.Item>


                </NavDropdown> <NavDropdown title="Collections" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Men's Liquid Polo Shirts</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Signature Shirts Store
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Holiday Collections</NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    The U.S.Polo Assn.Store
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">
                    Men's SS'24 Lookbook
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Women's SS'24 Lookbook
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Everything Denium
                  </NavDropdown.Item>
                </NavDropdown> <NavDropdown title="Men" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Bestsellers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Polo Shirts</NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    Shirts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">
                    Jeans
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">
                    T-Shirts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.7">
                    Trousers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.8">
                    Assessories
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.9">
                    Joggers & Trackpants
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/4.0">
                    Shorts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/4.1">
                    Outerwear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/4.2">
                    Footwear
                  </NavDropdown.Item>
                </NavDropdown> <NavDropdown title="Women" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Coord Set
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Polo Shirts</NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    Trousers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">
                    Jeans
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">
                    Tops
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.7">
                    Dresses
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.8">
                    HandBags
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.9">
                    T-Shirts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/4.0">
                    Shirts
                  </NavDropdown.Item>
                </NavDropdown> <NavDropdown title="Innerwear" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Women
                  </NavDropdown.Item>

                </NavDropdown> <NavDropdown title="Kids" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Bestsellers</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    All
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Boys</NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    Girls
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Sales
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">Sport</Nav.Link>
                <NavDropdown title="Sales" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">BUY 2 GET 1 FREE </NavDropdown.Item>

                </NavDropdown>
                <div id='ico1'>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div id='ioc2'>
                  <FontAwesomeIcon icon={faBagShopping} />
                </div>
                <div id='ioc3'>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div id='ioc4'>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div id='slider'>
        <Carousel>
          <Carousel.Item>
            <img src={pho8} alt='prop' id='pic8'></img>
            <Carousel.Caption>
              <h3>New Arrivals</h3>
              <p>For Women</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pho9} alt='prop' id='pic9'></img>
            <Carousel.Caption>
              <h3>New Arrivals</h3>
              <p>For Men</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pho10} alt='prop' id='pic10'></img>
            <Carousel.Caption>
              <h3>USPA Sports</h3>
              <p>
                Men And Women
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <img src={pho3} alt='prop' id='pic3'></img>
        <img src={pho12} alt='prop' id='pic12'></img>
      </div>
      <div id='one'>
        <p>END OF SEASON SALES</p>
      </div>
      <div id='j1'>
        <img src={pho13} alt='prop' id='pic13'></img>
        <img src={pho14} alt='prop' id='pic14'></img>
      </div>


      <div>
        <img src={pho2} alt='prop' id='pic2'></img>
      </div>
      <div id='k1'>
        <img src={pho4} alt='prop' id='pic4'></img>
        <img src={pho5} alt='prop' id='pic5'></img>
        <img src={pho6} alt='prop' id='pic6'></img>
        <img src={pho7} alt='prop' id='pic7'></img>
      </div>
      <div id='k2'>
        <img src={pho11} alt='prop' id='pic11'></img>
      </div>
      <div id='e1'>
        <p>Sport   Meets   Fashion</p>
      </div>
      <div id='e2'>
        <p>U.S. Polo Assn. is more than just a brand- it’s an experience. When you purchase U.S. Polo Assn. products, you own a piece of the sport of polo.
        </p>
      </div>
      <div id='e3'>
        <p>We are the official clothing brand of the United States Polo Association (USPA)—one of the oldest sports in the United States.</p>
      </div>
      <div id='e4'>
        <p>This is a proud distinction that links our illustrious past to a bright future that you are an important part of.</p>
      </div>
      <div id='e5'>
        <p>U.S. Polo Assn. is the official brand of the United States Polo Association (USPA), the non-profit governing body for the sport of polo in the United States and one of the oldest sports governing bodies, having been founded in 1890. With a multi-billion-dollar global footprint and worldwide distribution through some 1,100 U.S. Polo Assn. retail stores and thousands of department stores as well as sporting goods channels, independent retailers and e-commerce, U.S. Polo Assn. offers apparel for men, women, and children, as well as accessories and footwear in more than 190 countries worldwide.</p>
      </div>
    </div>
  );
}

export default App;
