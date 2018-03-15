module.exports = [
  {
    question: 'Каких операторов из этого списка нет в javascript?',
    options: [
      '*',
      '^',
      '%',
      '#',
      '&',
      '>>',
      '>>>',
      '!'
    ],
    answer: {
      compareByValue: true,
      value: '#'
    }
  },
  {
    question: `
    Что выведет этот код
      let a = (1,5 - 1) * 2;
      alert(a);
    `,
    options: [
      '0.9999999',
      '1',
      '0.5',
      '8',
      '-0.5',
      '4'
    ],
    answer: {
      compareByIndex: true,
      value: 3
    }
  },
  {
    question: 'Чему равна сумма [] + 1 + 2?',
    options: [
      '1',
      'NaN',
      'undefined',
      '12',
      'Другое'
    ],
    answer: {
      compareByExpression: true,
      value: '12'
    }
  }
];
