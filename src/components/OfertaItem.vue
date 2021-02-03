<template>
  <tr>
    <td>{{ oferta.id }}</td>
    <td>{{ empresa.nombre }}</td>
    <td>{{ oferta.nombre }}</td>
    <td>{{ oferta.contrato }}</td>
    <td>{{ oferta.contacto }}</td>
    <td>{{ oferta.email }}</td>
    <td>
      <b-icon icon="pencil-fill" @click="editarOferta(oferta.id)"></b-icon>
      <b-icon
        icon="trash-fill"
        @click="removeOferta(indice, oferta)"
      ></b-icon>
      <b-icon-building @click="verEmpresa(oferta.empresa)"></b-icon-building>
    </td>
  </tr>
</template>
<script>
export default {
name: "oferta-item",
props: ["oferta","indice"],
computed:{
    empresa(){
        return this.$store.getters.getNombreEmpresa(this.oferta.empresa);
    }
},
methods:{
  editarOferta(id){
    this.$router.push('/edit/'+id)
  },
  removeOferta(indice,oferta){
    if(confirm(`SEGURO QUE QUIERES BORRAR LA OFERTA CON ID ${oferta.id} Y NOMBRE ${this.empresa.nombre} ?`)){
    this.$store.dispatch('borrarOferta',{indice,id:oferta.id});
    } 
  },
  verEmpresa(id){
    this.$router.push('/empresas/'+id);
  },
},
mounted(){
    console.log(this.$store.state.empresas);
}
}
</script>

<style>

</style>