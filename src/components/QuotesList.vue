<template>
  <div class="quotes-list">
    <ul>
      <li v-for="(quote, index) in quotes" v-bind:key="quote.id" >
        <Quote
          :quote="quote.value"
          @click.native="removeQuote(index)"
        />
      </li>
    </ul>

    <p class="obs" >
      <i v-if="quotes.length > 0" >obs: click on a quote to delete it!</i>
    </p>

    <h2>Add new quotes!</h2>
    <NewQuote
      @addNewQuote="addQuote"
      :limitReached="quotes.length === 10"
    />
    <p v-blink.delay.repeat="3" >
      or if you prefer...
    </p>
    <Button
      text="Generate Random Quote"
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
import { QuoteAPIResponse } from '../interfaces/quoteAPIResponse.interface';
import Quote from './Quote.vue';
import Button from './layout/Button.vue';
import Notification from './layout/Notification.vue';
import NewQuote from './NewQuote.vue';
import Blink from '../directives/Blink.vue';

@Component({
  components: {
    Quote,
    Button,
    Notification,
    NewQuote,
  },
  directives: {
    Blink,
  },
})
export default class QuotesList extends Vue {

  public quotes: QuoteInterface[] = [{
    id: this._generateUid(),
    value: 'We must all make the choice between what is right and what is easy',
  }];
  public notificationText?: string = '';

  public addQuote(quote?: string): void {
    this.quotes.length === 10 ?
      this._notifyLimitReached() :
      this._pushNewQuote(quote);
  }

  public removeQuote(index: number): void {
    this.quotes.splice(index, 1);
    this.$emit('updateProgress', this.quotes.length);
  }

  private _generateUid(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  private async _getRandomQuote() {
    try {
      const response = await this.$http.get(
        'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&noCache='
          + this._getRandomNumber(),
      );
      const quoteAPIResponse: QuoteAPIResponse[] = await response.json();

      this.quotes.push({
        id: this._generateUid(),
        value: this._getTextFromHtml( quoteAPIResponse[0].content ),
      });
      this.$emit('updateProgress', this.quotes.length);

    } catch (error) {
      alert('Ops, there was an error generating a random quote... Sorry about that.');
    }
  }

  private _getRandomNumber(): number {
    return Math.floor(Math.random() * 5);
  }

  private _pushNewQuote(quote?: string): void {
    if (quote) {
      this.quotes.push({
        id: this._generateUid(),
        value: quote,
      });
      this.$emit('updateProgress', this.quotes.length);

    } else {
      this._getRandomQuote();
    }
  }

  private _notifyLimitReached(): void {
    this.notificationText = 'Limit reached';
    setTimeout(() => this.notificationText = '', 3000);
  }

  private _getTextFromHtml(htmlContent: string): string {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = htmlContent;
    return tmp.textContent || tmp.innerText || '';
  }

}
</script>

<style scoped lang="scss">
  ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;
    margin-top: 25px;
    overflow-y: auto;
    max-height: calc(100vh - 560px);
  }
  p.obs {
    border-bottom: 1px dashed lightgray;
    padding-bottom: 25px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 478px) {
    ul {
      margin-top: 20px;
      max-height: calc(100vh - 500px);
    }
    p.obs {
      padding-bottom: 15px;
    }
  }
</style>
