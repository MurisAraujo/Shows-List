import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  width: 20%;
  margin: 1.5% 2%;
  background-color: #7c3299;
  padding: 1% 2%;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  position: relative;
  @media (max-width: 1100px) {
    width: 25%;
    margin: 1.5% 3.5%;
  }
  @media (max-width: 900px) {
    width: 40%;
    margin: 1.5% auto;
  }
  @media (max-width: 650px) {
    width: 80%;
    margin: 1.5% auto;
  }
`;

export const CardHead = styled.div`
  margin-bottom: 5px;
  h1 {
    font-size: 22px;
    color: #e5ce1e;
    margin-bottom: 2px;
    small {
      font-size: 14px;
      color: #e5ce1e;
    }
  }
  small {
    font-size: 14px;
    color: #e9e9e9;
  }
`;

export const CardBody = styled.div`
  margin: 5px 0;
  img {
    width: 100%;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05), 0 3px 10px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 5px;
    height: 289px;
  }
  small {
    font-size: 16px;
    color: #e9e9e9;
  }
  p {
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  button {
    width: 30%;
    height: 30px;
    background-color: ${(props) => (props.state === 0 ? "#E94242" : "#52E33B")};
    transition: background-color 0.25s;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 3px 5px 0 rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: ${(props) =>
        props.state === 0 ? "#e62b2b" : "#36ce1d"};
    }
  }
  .edit {
    background-color: #3b7ee3;
    transition: background-color 0.25s;
    &:hover {
      background-color: #1d64ce;
    }
  }
  #delete {
    background-color: #e94242;
    transition: background-color 0.25s;
    &:hover {
      background-color: ${darken(0.1, "#E94242")};
    }
  }
`;
