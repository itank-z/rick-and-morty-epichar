import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';
import './style.scss';

function NavigationTabs() {
    const eventKeyPathMap = {
        '/': 'episodes-link',
        '/characters': 'characters-link',
        '/about': 'about-link',
    };
    const location = useLocation();
    console.log('location: ', location.pathname);

    return (
        <Nav justify variant='tabs' defaultActiveKey={eventKeyPathMap[location.pathname]}>
            <Nav.Item>
                <Nav.Link eventKey='episodes-link' as={Link} to='/'>Episodes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='characters-link' as={Link} to='/characters'>Characters</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='about-link' as={Link} to='/about'>About</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavigationTabs;
