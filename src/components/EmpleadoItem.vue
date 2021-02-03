<template>
  <tr>
    <td>{{ empleado.id }}</td>
    <td>{{empleado.apellido1}} {{empleado.apellido2}}, {{ empleado.nombre }} </td>
    <td>
      <b-icon icon="pencil-fill" @click="editarEmpleado(empleado.id)"></b-icon>
      <b-icon
        icon="trash-fill"
        @click="removeEmpleado(indice, empleado)"
      ></b-icon>
      <b-icon-people @click="verClientes(empleado.id)"></b-icon-people>
    </td>
  </tr>
</template>
<script>
export default {
name: "empleado-item",
props: ["empleado","indice"],

methods:{
    removeEmpleado(indice,empleado){
        if(confirm(`SEGURO QUE QUIERES BORRAR EL EMPLEADO CON ID ${empleado.name} ?`)){
      this.$store.dispatch('borrarEmpleado',{indice,id:empleado.id});
      }

    },
    verClientes(id){
      this.$router.push('/clientes/'+id);
    }
}
}
</script>

<style>

</style>