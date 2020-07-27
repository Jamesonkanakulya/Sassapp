import styled from 'styled-components'
import desktop from '../images/desktop.jpg'

const Background = styled.header`
background:url(${props => props.image?props.image:desktop}) ;
width:${props =>props.width?props.width:"100%"};;
height:${props =>props.height?props.height:"100%"};
opacity:${props =>props.opacity?props.opacity:"1"};
position:${props =>props.position?props.position:"relative"};
background-size:cover;

&:hover{
  transform: scale(1.5);
  transition: all 0.3s linear;
}


`

const Button = styled.button`
display:block;
flex-direction:row;
font-size:12px;
background:${props =>props.backColor?props.backColor:"#D526DE"};
padding:10px 15px;
text-align:center;
color:white;
text-transform: uppercase;
border-radius:5px;
outline:none;
border:none;
&:hover{
  background:${props =>props.hoverColor?props.hoverColor:"#141619"};
  transition: all 0.3s linear;
  

}

`

export{Background,Button}