<template>
  <div class="notification">
    <transition-group name="transition-animate" class="messages-list">
      <div
        class="notification__content"
        v-for="message in messages"
        :key="message.id"
        :class="message.icon"
      >
        <div class="content__text">
          <span class="mr-2">{{ message.name }}</span>
          <b-icon :icon="message.icon"></b-icon>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style lang="scss">
.notification {
  position: fixed;
  top: 120px;
  right: 16px;
  z-index: 10;
  &__messages-list {
    display: flex;
    flex-direction: column-reverse;
  }
  &__content {
    padding: 16px;
    border-radius: 4px;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    margin-bottom: 16px;
    background: green;
    &.exclamation-circle-fill {
        background: red;
    }
    &.exclamation-triangle-fill {
        background: orange;
    }
    &.check-circle-fill {
        background: green;
    }
  }
  .content {
    &__text {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .transition-animate {
    &-enter {
      transform: translateX(120px);
      opacity: 0;
    }
    &-enter-active {
      transition: all 0.6s ease;
    }
    &-enter-to {
      opacity: 1;
    }
    &-leave {
      height: 60px;
      opacity: 1;
    }
    &-leave-active {
      transition: transform 0.6s ease, opacity 0.6s, height 0.6s 0.2s;
    }
    &-leave-to {
      height: 0;
      transform: translateX(120px);
      opacity: 0;
    }
    &-move {
      transition: transform 0.6s ease;
    }
  }
}
</style>