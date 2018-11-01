<template>
  <div class="quotes-list">
    <NewQuote
      @addNewQuote="addQuote"
      :limitReached="limitReached"
    />

    <h1>My Quotes</h1>
    <ul>
      <li v-for="quote in quotes" v-bind:key="quote.id" >
        <Quote :quote="quote.value" />
      </li>
    </ul>
    <Button
      text="Add Quote"
      @click.native="addQuote()" 
    />
    <Notification
      v-if="notificationText !== ''"
      :text="notificationText"
      @click.native="notificationText = ''"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Quote as QuoteInterface } from '../interfaces/quote.interface';
import Quote from './Quote.vue';
import Button from './layout/Button.vue';
import Notification from './layout/Notification.vue';
import NewQuote from './NewQuote.vue';

@Component({
  components: {
    Quote,
    Button,
    Notification,
    NewQuote
  }
})
export default class QuotesList extends Vue {

  public quotes: QuoteInterface[] = [{
    'id': this._generateUid(),
    'value': 'Lorem Ipsum'
  }];
  public notificationText?: string = '';
  public limitReached: boolean = false;

  public addQuote(quote?: string) {
    this.limitReached ?
      this._notifyLimitReached() :
      this._pushNewQuote(quote);
  }

  private _generateUid(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  private _getRandomQuote(): string {
    const words = [ 'Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet' ];
    return words[ this._getRandomNumber() ] + ' ' + words[ this._getRandomNumber() ];
  }

  private _getRandomNumber(): number {
    return Math.floor(Math.random() * 5);
  }

  private _pushNewQuote(quote?: string): void {
    this.quotes.push({
      'id': this._generateUid(),
      'value': quote ? quote : this._getRandomQuote()
    });
    this.limitReached = this.quotes.length === 5;
  }

  private _notifyLimitReached(): void {
    this.notificationText = 'Limit reached';
    setTimeout(() => this.notificationText = '', 3000);
  }

}
</script>

<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
