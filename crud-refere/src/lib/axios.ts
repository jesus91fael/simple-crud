import axios from "axios"

export const api = axios.create({
  baseURL: 'http://localhost:3000/'
})

export const AddClient = (xMeet: object) => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(xMeet),
  };
  return fetch("http://localhost:3000/dados", options)
    .then((response: any) => response.json())
    .then(() => {});
};


export const EditClient = (dados: object, id: any) => {
  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  };
  return fetch(`http://localhost:3000/dados/${id}`, options)
    .then((response: any) => response.json())
    .then(() => {
    });
};
