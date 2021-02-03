import axios from 'axios';
const urlTodo='http://localhost:3000';

const empresas = {
    getAll: () => axios.get(`${urlTodo}/empresas`),
    getOne: (id) => axios.get(`${urlTodo}/empresas/${id}`),
    create: (item) => axios.post(`${urlTodo}/empresas`, item),
    modify: (item) => axios.put(`${urlTodo}/empresas/${item.id}`, item),
    delete: (id) => axios.delete(`${urlTodo}/empresas/${id}`),
};
const ofertas = {
    getAll: () => axios.get(`${urlTodo}/ofertas`),
    getOne: (id) => axios.get(`${urlTodo}/ofertas?empresa=${id}`),
    create: (item) => axios.post(`${urlTodo}/ofertas`, item),
    modify: (item) => axios.put(`${urlTodo}/ofertas/${item.id}`, item),
    delete: (id) => axios.delete(`${urlTodo}/ofertas/${id}`),
};
const campos = {
    getAll: () => axios.get(`${urlTodo}/campos`),
    getOne: (id) => axios.get(`${urlTodo}/campos/${id}`),
    create: (item) => axios.post(`${urlTodo}/campos`, item),
    modify: (item) => axios.put(`${urlTodo}/campos/${item.id}`, item),
    delete: (id) => axios.delete(`${urlTodo}/campos/${id}`),
};

export default {
    empresas,
    ofertas,
    campos,
};