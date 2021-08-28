import styled from 'styled-components';
import { Button as Btn } from './Button';

export const Hero = ({variant, text, color}) => {
    return (
      <Div_sty>                      
        <Btn variant={variant} text={text} color={color} />        
      </Div_sty>
    )
}
const Div_sty = styled.div`
 
 background-image: url(https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
 background-repeat: repeat;
 padding: 50px;
 width: 100%;
 height:40vh;
 background-color: blue;
 background-size: container;
 `
