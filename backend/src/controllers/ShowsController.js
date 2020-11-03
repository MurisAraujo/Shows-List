const connection = require('../database/connection');
const { response, request } = require("express");


module.exports = {

  async index(request, response) {
    const shows = await connection("shows").select('*');

    return response.json(shows)
  },

  async create(request, response) {
    const {
      name,
      launchYear,
      seasons,
      synopsis,
      category,
      state,
      image
    } = request.body;
    try {
      await connection("shows").insert({
        name,
        launchYear,
        seasons,
        synopsis,
        category,
        state,
        image
      });
    } catch (error) {
      return response.status(400).json({ message: error });
    }
    return response.status(200).json({ message: "Show successfully added", data: request.body});
  },
  
  async delete(request, response){
    const {id} = request.params;

    try {
      await connection("shows").where('id', id).delete();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
    return response.status(200).json({message: "Show successfully deleted"});
  },

  async update(request, response){

    const {id} = request.params;

    const {
      name,
      launchYear,
      seasons,
      synopsis,
      category,
      state,
      image
    } = request.body;

    try {
      await connection("shows").where('id', id).update({
        name: name,
        launchYear: launchYear,
        seasons: seasons,
        synopsis: synopsis,
        category: category,
        state: state,
        image: image
      });
    } catch (error) {
      return response.status(400).json({ error });
    }
    return response.status(200).json({ message: "Show successfully updated" });
  },

  async patch(request, response){
    const {id} = request.params;

    const {state} = request.body;

    try {
      await connection("shows").where('id', id).update('state', state);
    } catch (error) {
      return response.status(400).json({ error });
    }
    return response.status(200).json({ message: "Show successfully updated" });
  }
};
