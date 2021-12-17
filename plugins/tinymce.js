import Vue from 'vue'
// import TinyMCE from 'tinymce-vue-2'
import Editor from '@tinymce/tinymce-vue'

if (process.env.BROWSER) {
  window.Theme = Theme
}
Vue.component(Editor)