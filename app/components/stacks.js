import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A } from '@ember/array';

export default class StacksComponent extends Component {
  @tracked items = A([]);
  @tracked pushValue;

  constructor() {
    super(...arguments);
    this.items = A([]);
  }

  @action push(element, event) {
    event.preventDefault();
    this.items.pushObject(element);
    this.pushValue = '';
  }

  @action pop() {
    if (this.items.length === 0) {
      return 'Underflow';
    }

    return this.items.popObject();
  }

  get peek() {
    return this.items[this.items.length - 1];
  }

  get isEmpty() {
    return this.items.length === 0;
  }

  get size() {
    return this.items.length;
  }
}
