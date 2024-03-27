import Component from '@glimmer/component';

export default class StacksComponent extends Component {
  names = ['index', 'methods', 'properties'];

  index = {
    methods: ['push', 'pop', 'top', 'size', 'isEmpty'],
    properties: ['test'],
  };

  methods = [
    {
      name: 'push',
      description:
        'Adds an item to the stack. If the stack is full, then it is said to be an Overflow condition.',
      code: `
      import Component from '@glimmer/component';

      export default class StacksComponent extends Component {
        names = ['index', 'methods', 'properties'];

        properties = [];
        index = {
          methods: ['push', 'pop', 'top', 'size', 'isEmpty'],
          properties: ['test'],
        };

        methods = [
          {
            name: 'push',
            description:
              'Adds an item to the stack. If the stack is full, then it is said to be an Overflow condition.',
          },
        ];
      }`,
    },
  ];

  properties = [];
}
