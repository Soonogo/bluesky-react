import styled from "styled-components";
import { Button} from 'antd';

const CButton = styled(Button)`
  @media(max-width: 768px) {
    margin : -0.5px !important;
    
  }
`;


export {CButton}