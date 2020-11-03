import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Modal, Input } from "./styles";

import { closeEdModal, updateContent } from "../../redux";
import api from "../../services/api";

function EditModal() {
  const dispatch = useDispatch();

  const { editShow } = useSelector((state) => state);
  const { modalVisi } = useSelector((state) => state);

  const updateShow = async (event) => {
    event.preventDefault();

    await api.put(`shows/${editShow.id}`, {
      name: document.querySelector("#showName").value,
      launchYear: document.querySelector("#showYear").value,
      seasons: document.querySelector("#showSeason").value,
      synopsis: document.querySelector("#showSynopsis").value,
      category: document.querySelector("#showCategory").value,
      state: editShow.state,
      image: document.querySelector("#showImage").value,
    });
    dispatch(updateContent());
    dispatch(closeEdModal());
  };

  return (
    <Container state={modalVisi}>
      <Modal>
        <form onSubmit={updateShow}>
          <label htmlFor="">Nome</label>
          <Input
            type="text"
            id="showName"
            required
            defaultValue={editShow.name}
          />
          <label htmlFor="">Ano</label>
          <Input
            type="number"
            id="showYear"
            required
            defaultValue={editShow.launchYear}
          />
          <label htmlFor="">Numero de Temporadas</label>
          <Input
            type="number"
            id="showSeason"
            required
            defaultValue={editShow.seasons}
          />
          <label htmlFor="">Endereço da imagem</label>
          <Input
            type="text"
            id="showImage"
            required
            defaultValue={editShow.image}
          />
          <label htmlFor="">Genero</label>
          <Input
            type="text"
            id="showCategory"
            required
            defaultValue={editShow.category}
          />
          <label htmlFor="">Sinopse</label>
          <textarea
            cols="30"
            rows="10"
            id="showSynopsis"
            defaultValue={editShow.synopsis}
          ></textarea>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(closeEdModal());
              }}
              className="cancel"
            >
              Cancelar
            </button>
            <button className="submit" type="submit">
              Editar
            </button>
          </div>
        </form>
      </Modal>
    </Container>
  );
}

export default EditModal;
