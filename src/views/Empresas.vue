<template>
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12">
      <h1>Listado de empresas</h1>
      <table class="table table-striped table-hover">
        <thead class="thead-dark bg-primary">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Domicilio</th>
            <th>Localidad</th>
            <th>Contacto</th>
            <th>email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="empresa in empresas" :key="empresa.id" :empresa="empresa">
            <td>{{ empresa.id }}</td>
            <td>{{ empresa.nombre }}</td>
            <td>{{ empresa.domicilio }}</td>
            <td>{{ empresa.localidad }}</td>
            <td>{{ empresa.contacto }}</td>
            <td>{{ empresa.email }}</td>
            <td>
              <button
                class="btn btn-sm"
                title="Ver empresa"
                @click="verEmpresa(empresa.id)"
              >
                <b-icon-eye-fill></b-icon-eye-fill>
              </button>
              <button
                class="btn btn-sm"
                title="Ver ofertas"
                @click="verOfertas(empresa.id)"
              >
                <b-icon-calendar-fill></b-icon-calendar-fill>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "empresas-table",
  props:['id'],
  computed: {
    empresas() {
      return this.$store.state.empresas;
    },
  },
  methods: {
    verEmpresa(id){
      this.$router.push('/empresa/'+id)
    },
    verOfertas(id){
    this.$router.push('/ofertas/'+id)
    },
  },
  mounted(){
    if (this.id){
       this.$store.dispatch('loadOneEmpresa',this.id);
    }
  }
};
</script>