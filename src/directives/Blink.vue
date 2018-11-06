<script lang="ts">
import { DirectiveOptions } from 'vue';

const directive: DirectiveOptions = {
  bind(el, binding, node) {
    const initialDelay = binding.modifiers.delay ? 1500 : 0;
    const blinksAmount = binding.value ? binding.value : 1;

    binding.modifiers.repeat ?
      repeatBlinking(el, 250, initialDelay, 0, blinksAmount) :
      blinkElement(el, 250, initialDelay, 0, blinksAmount);
  },
};

function blinkElement(
  el: HTMLElement,
  duration: number, initialDelay: number,
  counter: number, blinksAmount: number,
) {
  setTimeout(() => {
    el.style.opacity = '0.1';

    setTimeout(() => {
      el.style.opacity = '1';

      counter++;
      if (counter < blinksAmount) {
        blinkElement(el, duration / 1.25, 0, counter, blinksAmount);
      }

    }, duration);
  }, initialDelay);
}

function repeatBlinking(
  el: HTMLElement,
  duration: number, initialDelay: number,
  counter: number, blinksAmount: number,
) {
  blinkElement(el, duration, initialDelay, counter, blinksAmount);

  setTimeout(() => {
    repeatBlinking(el, duration, initialDelay, counter, blinksAmount);
  }, 3000);
}

export default directive;
</script>