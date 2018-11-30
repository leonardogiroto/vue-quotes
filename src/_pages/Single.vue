<template>
  <div class="single" >
    <router-link to="/" >
      go back
    </router-link>

    <h2>
      "{{ quote }}"
    </h2>

    <p>
      {{ comment }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as types from '../store/quotes/types';

@Component({})
export default class Single extends Vue {

  public quote: string | null = '';
  public comment: string = '';

  public created() {
    this.comment = this.$route.params.comment;
    this.quote = this.$store
      .getters[types.GET_QUOTE]
      .value;
  }
}
</script>

<style lang="scss">
  div.single {
    a {
      text-decoration: none;
      color: #FE5D26;

      &:hover {
        text-decoration: underline;
      }
    }
    h2 {
      width: 620px;
      margin: 0 auto;
      font-size: 40px;
      margin-top: 80px;
    }
    p {
      margin-top: 30px;
      font-style: italic;
    }
  }

  @media only screen and (max-width: 768px) {
    div.single {
      h2 {
        width: 95%;
        font-size: 24px;
        margin-top: 30px;
      }
    }
  }
</style>
