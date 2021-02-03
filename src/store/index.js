import Vue from 'vue'
import Vuex from 'vuex'
import APIservice from '../APIservice'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    empresas:[],
    ofertas:[],
  },
  getters:{
    getNombreEmpresa: (state) => (id) => {
      return state.empresas.find(item => item.id === Number(id));
    },
    getOneOferta: (state) => (id) => {
      return state.ofertas.find(item => item.id === Number(id));
    }
  },
  mutations: {
    setEmpresas(state,empresas){
      state.empresas=empresas;
    },
    setOneEmpresa(state,empresa){
      state.empresas=[empresa];
    },
    setOfertas(state,oferta){
      state.ofertas=oferta;
    },
    addOferta(state,oferta){
      state.ofertas.push(oferta);
    },
    BorrarOferta(state,indice){
      state.ofertas.splice(indice,1);
    },
    editOferta(state,oferta){
      let index=state.ofertas.findIndex(prod => prod.id === oferta.id);
      state.ofertas.splice(index,1,oferta);
    },
  },
  actions: {
    loadEmpresas(context) {
      return new Promise((resolve,reject) => {
      APIservice.empresas.getAll()
        .then((response) => {
          context.commit('setEmpresas', response.data)
          resolve(response.data);
        })
        .catch((err) => reject(err));
      })
    },
    loadOneEmpresa(context,id){
      return new Promise((resolve,reject) => {
        APIservice.empresas.getOne(id)
          .then((response) => {
            context.commit('setOneEmpresa', response.data)
            resolve(response.data);
          })
          .catch((err) => reject(err));
        })
    },
    loadAllOfertas(context){
      return new Promise((resolve,reject) => {
        APIservice.ofertas.getAll()
          .then((response) => {
            context.commit('setOfertas', response.data)
            resolve(response.data);
          })
          .catch((err) => reject(err));
        })
      },
    loadOfertas(context,id) {
      return new Promise((resolve,reject) => {
      APIservice.ofertas.getOne(id)
        .then((response) => {
          context.commit('setOfertas', response.data)
          resolve(response.data);
        })
        .catch((err) => reject(err));
      })
    },
    addOferta(context,oferta){
      return new Promise((resolve, reject) => {
        APIservice.ofertas.create(oferta)
          .then((response) => {
            context.commit('addOferta', response.data);
            resolve(response.data);
          })
          .catch((err) => reject(err));
      })
    },
    editOferta(context,oferta){
      return new Promise((resolve, reject) => {
        APIservice.ofertas.modify(oferta)
          .then((response) => {
            context.commit('editOferta', response.data);
            resolve(response.data);
          })
          .catch((err) => reject(err));
      })
    },
    borrarOferta(context,oferta){
      APIservice.ofertas.delete(oferta.id)
      .then (() =>{
        context.commit('BorrarOferta',oferta.indice)
      })
      .catch((err) => alert(err));
    }
  },
  modules: {
  }
})
