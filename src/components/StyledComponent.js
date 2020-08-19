import styled from 'styled-components'
import desktop from '../images/desktop.jpg'

const Background = styled.header`
background:url(${props => props.image ? props.image : desktop}) ;
width:${props => props.width ? props.width : "100%"};;
height:${props => props.height ? props.height : "100%"};
opacity:${props => props.opacity ? props.opacity : "1"};
position:${props => props.position ? props.position : "relative"};
background-size:cover;



`

const Button = styled.button`
display:block;
flex-direction:row;
font-size:12px;
background:${props => props.backColor ? props.backColor : "#0C95F7"};
padding:10px 15px;
text-align:center;
color:white;
text-transform: uppercase;
border-radius:5px;
outline:none;
border:none;

&:hover{
  background:${props => props.hoverColor ?props.hoverColor:"white"};
  transition: all 0.3s linear;
  border: 1px solid #0C95F7;
  color:#0C95F7;
  

}

`

export { Background, Button }