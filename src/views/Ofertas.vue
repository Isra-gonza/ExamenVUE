<template>
  <div class="container">
    <header>
      <h1>Tabla de ofertas</h1>
    </header>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12" id="almacen">
        <table class="table table-striped table-hover">
          <thead class="thead-dark bg-primary">
            <tr>
              <th>Id</th>
              <th>Empresa</th>
              <th>Nombre</th>
              <th>Contrato</th>
              <th>Contacto</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="tbody">
            <oferta-item
              v-for="(oferta, indice) in ofertas"
              :key="oferta.id"
              :oferta="oferta"
              :indice="indice"
            ></oferta-item>
          </tbody>
        </table>
       <button class="btn btn-primary" @click="crearOferta()"> Añadir Oferta</button>
      </div>
    </div>
  </div>
</template>
<script>
import OfertaItem from '../components/OfertaItem';
export default {
  name: "Ofertas",
  props: ['id'],
  components: {
    "oferta-item": OfertaItem
  },
  computed:{
    ofertas(){
      return this.$store.state.ofertas;
    }
  },
  mounted(){
    if (this.id){
      this.$store.dispatch('loadEmpresas')
      .then(() =>{
        this.$store.dispatch('loadOfertas',this.id)
      })
      .catch((err)=> alert(err));
    }
    else {
      alert('Error, falta poner la id');
      this.$router.push('/empresas');
    }
  },
  methods:{
    crearOferta(){
      this.$router.push('/add')
    }
  }
}
</script>

<style>

</style>