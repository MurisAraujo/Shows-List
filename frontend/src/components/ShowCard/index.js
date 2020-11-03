import React from "react";
import { useDispatch } from "react-redux";

import { Container, CardHead, CardBody, CardFooter } from "./styles";

import api from "../../services/api";

import { openEdModal, upShow, updateContent } from "../../redux";

function ShowCard({ show }) {
  const dispatch = useDispatch();

  const changeState = async () => {
    const response = await api.patch(`shows/${show.id}`, {
      state: !show.state,
    });
    dispatch(updateContent());
    console.log(response);
  };

  const openEditModal = async () => {
    dispatch(upShow(show));
    dispatch(openEdModal());
  };

  const deleteShow = async () => {
    await api.delete(`shows/${show.id}`);
    dispatch(updateContent());
  }

  return (
    <Container>
      <button onClick={() => deleteShow()} id="delete"> Excluir </button>
      <CardHead>
        <h1>
          {show.name}
          <small>({show.launchYear})</small>
        </h1>
        <small>{show.seasons} Temporadas</small>
      </CardHead>
      <CardBody>
        <img src={show.image} alt="" />
        <small>{show.category}</small>
        <p>
         {show.synopsis}
        </p>
      </CardBody>
      <CardFooter state={show.state}>
        <button className="edit" onClick={() => openEditModal()}>
          Editar
        </button>
        <button onClick={() => changeState()}>
          {show.state === 0 ? "Quero Assistir" : "Assistido"}
        </button>
      </CardFooter>
    </Container>
  );
}

export default ShowCard;
