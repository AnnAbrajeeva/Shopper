<template>
  <div class="col-lg-6 col-md-12">
    <div class="card">
      <div class="card-header card-header-tabs card-header-primary">
        <div class="nav-tabs-navigation">
          <div class="nav-tabs-wrapper">
            <div class="nav-tabs-title">
              <h4 class="card-title">Список задач</h4>
              <v-spacer></v-spacer>
              <button
                @click.stop="taskModalShow"
                class="nav-tabs-addTask btn btn-primary btn-sm"
              >
                Добавить
              </button>
            </div>

            <v-tabs v-model="tab" fixed-tabs slider-color="white">
              <v-tab
                v-for="type in tasksType"
                :key="type.type"
                :href="'#tab-' + type.type"
              >
                {{ type.text }}
              </v-tab>
            </v-tabs>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="tab-content">
          <client-only>
            <div class="tab-pane active">
              <table class="table">
                <tbody>
                  <v-tabs-items v-model="tab">
                    <v-tab-item
                      v-for="task in getTodos"
                      :key="task.name"
                      :value="'tab-' + task.urgent"
                    >
                      <tr class="table-row">
                        <td>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                :value="task.done"
                                @change="doneTask(task.id)"
                              />
                              <span class="form-check-sign">
                                <span class="check"></span>
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <span @click="edit = !edit" v-if="edit === false">{{ task.name }}</span> 
                           <v-text-field
                           v-else
                            :value="task.name"
                            @change="editTodo($event, task.id)"
                            v-on:keyup.enter="edit = !edit"
                          ></v-text-field>
                        </td>
                       
                        <td class="td-actions text-right table-action">
                          <v-icon left color="#9c27b0" @click="editTodo(id)">mdi-pencil</v-icon>
                          <v-icon right color="#f44336" @click="delTodo(task.id)">mdi-close</v-icon>
                        </td>
                      </tr>
                    </v-tab-item>
                  </v-tabs-items>
                </tbody>
              </table>
            </div>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      tasksType: [
        {
          type: "urgent",
          text: "Срочные",
        },
        {
          type: "regular",
          text: "Обычные",
        },
      ],
      tab: null,
      edit: false
    };
  },

  methods: {
    taskModalShow() {
      this.$store.dispatch("todo/openModal");
    },
    doneTask(id) {
      this.$store.dispatch("todo/changeStatus", id)
    },
    delTodo(id) {
      this.$store.dispatch("todo/deleteTodo", id)
    },
    editTodo(value, id) {
      let editValue = {
        value: value,
        id: id
      }
      this.$store.dispatch("todo/editTodo", editValue)
    }
  },
  computed: {
    ...mapGetters('todo', ['getTodos'])
  }
};
</script>