import styled from 'styled-components';
import { Button as Btn } from './Button';

export const Hero = ({variant, text, color}) => {
    return (
      <Div_sty>
        Wellcome to my Web - Hero Section
        <br/>
        <br/>       
        <Btn variant={variant} text={text} color={color} />        
      </Div_sty>
    )
}
const Div_sty = styled.div`
 background-color: rgba(236, 180, 190, 0.616);
 padding: 50px;
 width: 100%;
 height:40vh;
 `