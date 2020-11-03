import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { Container, Header, Content } from "./styles";
import ShowCard from '../ShowCard';
import EditModal from '../EditModal';

import api from "../../services/api";

import { openCreateModal } from '../../redux';
import InsertModal from "../InsertModal";


function Main() {

  const dispatch = useDispatch();

  const {update} = useSelector((state) => state);

  const[shows, setShows] = useState([]);

  const loadShows = async () => {
    const { data } = await api.get("shows");
    setShows(data);
  };

  const openModal = () => {
    dispatch(openCreateModal())
  }

  useEffect(() => {
    loadShows();
    console.log("entrei aqui");
  }, [update]);

  return(
    <Container> 
      <EditModal/>
      <InsertModal/>
      <Header>
        <h1>My Series List</h1>
        <button onClick={() => openModal()}>Nova Série</button>
      </Header>
      <Content>
        {shows.map( show => (
          <ShowCard show={show} key={show.id}/>
        ))}
      </Content>
    </Container>
  );
}

export default Main;
