<template>
  <div class="container">
    <h1>{{ id ? "Editar" : "Añadir" }} oferta</h1>
    <div class="row">
      <ValidationObserver ref="form" v-slot="{ handleSubmit, invalid }">
        <form novalidate v-on:submit.prevent="handleSubmit(addOferta)">
         
            <div class="form-group">
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              name="empresa"
            >
            <select v-model="oferta.empresa">
              <option v-for="empresa in empresas" :key="empresa.id" :value="empresa.id">
                {{empresa.name}}
              </option>
            </select>
              <span class="error"> {{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <ValidationProvider
              rules="min:10|max:50"
              v-slot="{ errors }"
              name="nombre"
            >
              <input
                placeholder="Nombre"
                type="text"
                class="form-control"
                v-model="oferta.nombre"
                required
              />
              <span class="error"> {{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <ValidationProvider rules="" v-slot="{ errors }" name="contrato">
              <input
                placeholder="Contrato"
                type="text"
                class="form-control"
                v-model="oferta.contrato"
                required
              />
              <span class="error"> {{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <ValidationProvider rules="" v-slot="{ errors }" name="contacto">
              <input
                placeholder="Contacto"
                type="text"
                class="form-control"
                v-model="oferta.contacto"
                required
              />
              <span class="error"> {{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <ValidationProvider rules="email" v-slot="{ errors }" name="email">
              <input
                placeholder="Email"
                type="email"
                class="form-control"
                v-model="oferta.email"
                required
              />
              <span class="error"> {{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <button
            type="submit"
            class="btn btn-default btn-primary"
            :disabled="invalid"
          >
            {{ id ? "Editar" : "Añadir" }}
          </button>
          <button class="btn btn-danger" @click="volverEmpresas()">
            Cancelar
          </button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
import {
  required,
  alpha_spaces,
  email,
  min,
  max,
} from "vee-validate/dist/rules";
import { localize } from "vee-validate";
import es from "vee-validate/dist/locale/es.json";

localize("es", es);

extend("required", {
  ...required,
  message: "El campo {_field_} es obligatorio",
});
extend("alpha_spaces", alpha_spaces);
extend("email", email);
extend("min", min);
extend("max", max);
extend("password", {
  params: ["target"],
  validate(value, { target }) {
    return value === target;
  },
  message: "Las contraseñas no coinciden",
});

export default {
  name: "register",
  props: ["id"],
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      oferta: {},
      EmpresaEdit: "",
    };
  },
  computed:{
    empresas(){
      return this.$store.state.empresas;
    }
  },
  mounted() {
    this.$store.dispatch('loadEmpresas')
    .then ( () => {
      this.$store.dispatch("loadAllOfertas")
    .then(() => {
      if (this.id) {
        this.oferta = this.$store.getters.getOneOferta(this.id);
      } else {
        this.oferta={};
      }
    })
    .catch((err) => alert(err));
    })
    .catch((err) => alert(err));
  },
  methods: {
    addOferta() {
      if (this.id) {
        this.$store
          .dispatch("editOferta", this.oferta)
          .then(() => {
            this.$router.push("/ofertas/" + this.id);
          })
          .catch((err) => alert(err));
      } else {
        this.$store
          .dispatch("addOferta", this.oferta)
          .then(() => {
            this.$router.push("/ofertas/" + this.id);
          })
          .catch((err) => alert(err));
      }
    },
    volverEmpresas() {
      this.$router.push("/empresas");
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>