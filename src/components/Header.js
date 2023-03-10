import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {
    const [burgerOpen, burgerClose] = useState(false);

    const cars = useSelector(selectCars);//here we use useSelector hook
    console.log(cars);
    return (
        <Container>
            <a>
                <img src='/images/logo.svg' alt='imge' />
            </a>
            <Menu>
                {/* redux used here */}
                {cars && cars.map((car, index) => (
                    <a key={index} href='#'>{car}</a>
                ))}
                {/* <a href='#'>Model X</a>
                <a href='#'>Model 3</a>
                <a href='#'>Model S</a>
                <a href='#'>Model Y</a> */}
            </Menu>
            <RightMenu>
                <a href='#'>SHOP</a>
                <a href='#'>Tesla  Account</a>
                <CustomMenu onClick={() => burgerClose(true)} />
            </RightMenu>

            <BurgerNav show={burgerOpen}>
                <CloseWrapper>
                    <CustomClose onClick={() => burgerClose(false)} />
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li key={index}><a href='#'>{car}</a></li>
                ))}

                <li><a href='#'>Existing Inventry</a></li>
                <li><a href='#'>Used Inventry</a></li>
                <li><a href='#'>Trade-In</a></li>
                <li><a href='#'>CyberTruck</a></li>
                <li><a href='#'>Roaster</a></li>

            </BurgerNav >
        </Container>
    )
}

export default Header;

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;

padding:0 20;
top:0;
left:0;
right:0;
z-index:1;

`

const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

a{
    text-transform:uppercase;
    font-weight:600;
    padding:0 10px;
    flex-wrap:nowrap;
}

@media(max-width:768px){
    display:none;
}
`
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
    text-transform:uppercase;
    font-weight:600;
    margin-right:10px;
}
`

const CustomMenu = styled(MenuIcon)`
curser:pointer;
`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
// display:flex;
// text-align:column;
// justify-content:flex-start;
transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition:transform .5s ;

li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);

    a{
        font-weight:600;
    }
}
 
`


const CustomClose = styled(CloseIcon)`
cursor:pointer;
`

const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`
