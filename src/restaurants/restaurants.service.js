const knex = require("../db/connection");

const list = () => {
  return knex("restaurants").select("restaurant_name", "restaurant_cuisine");
}

const create = (restaurant) =>{
  return knex("restaurants").insert(restaurant).returning("*").then((createdRestaurant) => createdRestaurant[0]);
}

const read = (restaurant_id = 0) => {
  return knex("restaurants").select("*").where({ restaurant_id }).first();
}

const update = (updatedRestaurant) => {
  return knex("restaurants")
    .select("*")
    .where({ restaurant_id: updatedRestaurant.restaurant_id })
    .update(updatedRestaurant, "*");
}

const destroy = (restaurant_id) => {
  return knex("restaurants").where({ restaurant_id }).del(); }

module.exports = {
  create,
  list,
  read,
  update,
  delete: destroy,
};