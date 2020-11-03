import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import { Container, Modal, Input } from "./styles";

import { updateContent, closeCreateModal } from "../../redux";
import api from "../../services/api";

function InsertModal() {
  const dispatch = useDispatch();

  const {createModal} = useSelector((state) => state);

  const createShow = async (event) => {
    event.preventDefault();

    await api.post(`shows`, {
      name: document.querySelector("#createShowName").value,
      launchYear: document.querySelector("#createShowYear").value,
      seasons: document.querySelector("#createShowSeason").value,
      synopsis: document.querySelector("#createShowSynopsis").value,
      category: document.querySelector("#createShowCategory").value,
      state: false,
      image: document.querySelector("#createShowImage").value,
    });
    dispatch(updateContent());
    dispatch(closeCreateModal());
    document.querySelector("#createShowName").value = '';
    document.querySelector("#createShowYear").value = '';
    document.querySelector("#createShowSeason").value = '';
    document.querySelector("#createShowSynopsis").value = '';
    document.querySelector("#createShowCategory").value = '';
    document.querySelector("#createShowImage").value = '';
  };

  const closeModal = () => {
    document.querySelector("#createShowName").value = '';
    document.querySelector("#createShowYear").value = '';
    document.querySelector("#createShowSeason").value = '';
    document.querySelector("#createShowSynopsis").value = '';
    document.querySelector("#createShowCategory").value = '';
    document.querySelector("#createShowImage").value = '';
    dispatch(closeCreateModal());
  }

  return (
    <Container state={createModal}>
      <Modal>
        <form onSubmit={createShow}>
          <label htmlFor="">Nome</label>
          <Input
            type="text"
            id="createShowName"
            required
          />
          <label htmlFor="">Ano</label>
          <Input
            type="number"
            id="createShowYear"
            required
          />
          <label htmlFor="">Numero de Temporadas</label>
          <Input
            type="number"
            id="createShowSeason"
            required
          />
          <label htmlFor="">Endereço da imagem</label>
          <Input
            type="text"
            id="createShowImage"
            required
          />
          <label htmlFor="">Genero</label>
          <Input
            type="text"
            id="createShowCategory"
            required
          />
          <label htmlFor="">Sinopse</label>
          <textarea
            cols="30"
            rows="10"
            id="createShowSynopsis"
          ></textarea>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                closeModal();
              }}
              className="cancel"
            >
              Cancelar
            </button>
            <button className="submit" type="submit">
              Salvar
            </button>
          </div>
        </form>
      </Modal>
    </Container>
  );
}

export default InsertModal;