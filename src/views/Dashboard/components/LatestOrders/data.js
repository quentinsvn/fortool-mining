import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    ref: 'FTORD89658',
    amount: 30.5,
    customer: {
      name: 'Skin Fortnite'
    },
    createdAt: '25/01/2020',
    status: 'En cours'
  },
  {
    id: uuid(),
    ref: 'FTORD69685',
    amount: 25.1,
    customer: {
      name: 'PayPal 5€'
    },
    createdAt: '02/01/2020',
    status: 'Envoyé'
  },
  {
    id: uuid(),
    ref: 'FTORD92585',
    amount: 10.99,
    customer: {
      name: 'PayPal 5€'
    },
    createdAt: '24/12/2019',
    status: 'Envoyé'
  },
  {
    id: uuid(),
    ref: 'FTORD12858',
    amount: 96.43,
    customer: {
      name: 'Amazon 5€'
    },
    createdAt: '01/12/2019',
    status: 'Envoyé'
  },
  {
    id: uuid(),
    ref: 'FTORD35658',
    amount: 32.54,
    customer: {
      name: 'PayPal 25€'
    },
    createdAt: '12/11/2019',
    status: 'Envoyé'
  },
  {
    id: uuid(),
    ref: 'FTORD42658',
    amount: 16.76,
    customer: {
      name: 'Skin Fortnite'
    },
    createdAt: '24/10/2019',
    status: 'Envoyé'
  }
];
