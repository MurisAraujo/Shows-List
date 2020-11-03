import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height:100vh;
`;

export const Header = styled.div`
  height:10%;
  width:100%;
  display:flex;
  justify-content: space-between;
  padding: 0 5%;
  align-items:center;
  h1{
    font-size: 40px;
    color: #E5CE1E;
    font-family: Arial, Helvetica, sans-serif;
    text-shadow: 2px 2px rgba(0,0,0,.3);
  }
  button{
    height:32px;
    width:135px;
    font-size: 18px;
    background-color: #7C3299;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.2), 0 3px 10px 0 rgba(0,0,0,.4);
  }
`;

export const Content = styled.div`
  width:100%;
  height:90%;
  padding:3%;
  overflow-y:auto;
  display:flex;
  flex-wrap:wrap;
`;