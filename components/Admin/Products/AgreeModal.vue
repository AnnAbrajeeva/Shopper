<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <!-- <v-card> -->

          <v-toolbar color="primary" dark
            >Подтверждение удаления продукта</v-toolbar
          >
          <v-card-text>
            <div class="modal__text">
              Вы действительно хотите удалить этот продукт?
            </div>
            <div class="text-h2 pa-12">
              После удаления восстановление будет невозможно! Продолжить?
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              text
              class="btn btn-success mr-2"
              @click="agreeDel"
              >Ok</v-btn
            >
            <v-btn text class="btn btn-danger" @click="disagreeDel"
              >Отмена</v-btn
            >
          </v-card-actions>

          <!-- </v-card> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    agreeDialog: {
      type: Boolean,
    },
  },

  methods: {
    disagreeDel() {
      this.$emit("close");
    },
    agreeDel() {
        this.$emit("agreeToDel")
    }
  },
};
</script>