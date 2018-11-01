<template>
  <div class="new-quote">
    <p>Type new quote and hit enter!</p>
    <form>
      <textarea
        rows="3"
        v-model="newQuote"
        @keyup.enter="addNewQuote"
        :disabled="limitReached"
      ></textarea>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import { Quote as QuoteInterface } from '../interfaces/quote.interface';

@Component
export default class NewQuote extends Vue {

  @Prop() public limitReached!: boolean;

  public newQuote: string = '';

  public addNewQuote(): void {
    this.$emit('addNewQuote', this.newQuote);
    this.newQuote = '';
  }
}
</script>

<style scoped lang="scss">

</style>
