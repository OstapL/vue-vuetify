import Vue from 'vue';
import Vuetify, {
  VApp, // required
  VBtn,
  VContainer,
  VContent,
  VFlex,
  VForm,
  VLayout,
  VTextField,
  VTooltip,
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VApp, // required
    VBtn,
    VContainer,
    VContent,
    VFlex,
    VForm,
    VLayout,
    VTextField,
    VTooltip,
  },
  theme: {
    primary: '#FFF',
    secondary: '#9D9C9C',
    accent: '#90BE6D',
    error: '#EF626C',
  },
});
