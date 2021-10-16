<template>
  <v-dialog
    class="dashboard-todo"
    persistent
    max-width="600px"
    :style="this.getTaskModal ? 'display: block' : 'display: none'"
    v-on:input="closeTaskModal($event)"
    data-app
    :value="getTaskModal"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">Создать задачу</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Введите задачу"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-checkbox
               color="red darken-3"
                v-model="urgent"
                label="Эта задача срочная?"
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="this.closeTaskModal">
          Отмена
        </v-btn>
        <v-btn color="blue darken-1" text @click="this.addTask"> Добавить </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "",
      urgent: false,
      status: false,
      edit: false
    };
  },
   validations: {
      name: { required },
   },
  computed: {
    ...mapGetters("todo", ["getTaskModal", "getTodos"]),

    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Введите задачу");
      return errors;
    },
  },
  methods: {
    closeTaskModal() {
      this.$store.dispatch("todo/closeModal");
    },
    addTask() {
      let task = {
        id: this.getTodos && this.getTodos.length > 0 ? this.getTodos.length+1 : 1,
        name: this.name,
        status: this.status,
        urgent: this.urgent === true ? "urgent" : "regular",
        edit: this.edit
      };
      this.$store.dispatch("todo/addTask", task);
      this.name = "",
      this.urgent = false,
      this.closeTaskModal()
    },
  },
};
</script>