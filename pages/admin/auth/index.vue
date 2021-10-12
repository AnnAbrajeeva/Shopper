<template>
  <div class="auth">
    <section class="auth__wrapper">
      <div class="container">
          <login-form />
      </div>
    </section>
  </div>
</template>

<script>
import LoginForm from '~/components/Auth/LoginForm'
export default {
  components: { LoginForm },
  layout: "auth",
};
</script>