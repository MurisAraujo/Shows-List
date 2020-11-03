import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  visibility: ${(props) => (props.state === true ? "visible" : "hidden")};
`;

export const Modal = styled.div`
  width: 25%;
  height: 65%;
  background-color: #7c3299;
  padding: 0 2%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  form {
    margin: auto;
    label,
    input,
    textarea {
      width: 100%;
      margin: 10px 0;
    }
    div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      .cancel {
        background-color: #e94242;
        transition: background-color 0.25s;
        width: 30%;
        height: 30px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        &:hover {
          background-color: ${darken(0.1, "#E94242")};
        }
      }
      .submit {
        background-color: #52E33B;
        transition: background-color 0.25s;
        width: 30%;
        height: 30px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        &:hover {
          background-color: ${darken(0.1, "#52E33B")};
        }
      }
    }
    label {
      color: #e5ce1e;
      font-size: 19px;
    }
  }

  @media(max-height: 1000px){
    height: 95%;
  }

  @media (max-width: 1100px) {
    width: 45%;
    
  }
  @media (max-width: 900px) {
    width: 65%;
    
  }
  @media (max-width: 650px) {
    width: 80%;
    
  }

`;

export const Input = styled.input`
  height: 30px;
  padding: 5px;
`;
