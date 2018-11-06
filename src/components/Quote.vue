<template>
  <p class="quote">
    {{ quote }}
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Quote extends Vue {

  @Prop() public quote!: string;

}
</script>

<style scoped lang="scss">
  p.quote {
    display: inline-block;
    cursor: pointer;
    border: 1px solid lightgrey;
    border-radius: 4px;
    padding: 10px 20px;
    margin: 0px 0px 25px 0px;

    &:hover {
      background: rgba(255, 0, 0, 0.2);
    }
  }

  @media only screen and (max-width: 478px) {
    p.quote {
      margin: 0px 0px 20px 0px;
    }
  }
</style>
