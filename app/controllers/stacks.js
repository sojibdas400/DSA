import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class StacksController extends Controller {
  @tracked names = ['index', 'methods', 'properties'];

  @tracked index = {
    methods: ['push', 'pop', 'peek', 'size', 'isEmpty'],
    properties: [],
  };

  @tracked methods = [
    {
      name: 'push',
      description:
        'Adds an item to the stack. If the stack is full, then it is said to be an Overflow condition.',
      code: `
      @action push(element, event) {
        this.items.pushObject(element);
      }`,
    },
    {
      name: 'pop',
      description: '',
      code: `
      @action pop() {
        if (this.items.length === 0) {
          return 'Underflow';
        }

        return this.items.popObject();
      }`,
    },
    {
      name: 'peek',
      description: '',
      code: `
      get peek() {
        return this.items[this.items.length - 1];
      }`,
    },
    {
      name: 'size',
      description: '',
      code: `
      get size() {
        return this.items.length;
      }`,
    },
    {
      name: 'isEmpty',
      description: '',
      code: `
      get isEmpty() {
        return this.items.length === 0;
      }`,
    },
  ];
  @tracked properties = [];

  @tracked stacks = `
  @tracked items = A([]);
  @tracked pushValue;

  constructor() {
    super(...arguments);
    this.items = A([]);
  }`;
}
