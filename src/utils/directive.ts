import { Directive } from 'vue';

export const phone: Directive = {
  created(el: HTMLInputElement) {
    el.addEventListener('input', function() {
      const regex = /[^0-9]/g;
      el.value = el.value.replace(regex, '');
    });
  },
};
