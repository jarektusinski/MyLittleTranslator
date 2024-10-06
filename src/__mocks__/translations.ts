import { EN, PL } from '../index';

const translationMock = {
  defaultLang: [EN, PL],
  translation: {
    English: {
      something: 'This is translation with `parameter` and `html`!',
      parameter: 'some parameter',
      greetings: {
        greeting: 'Hello',
        season: {
          summer: 'Goodbye Spring! Hello Summer!',
          autumn: 'Winter is coming',
        },
      },
    },
    Polish: {
      something: 'To jest tłumaczenie bez parametru!',
      greetings: {
        greeting: 'Cześć',
      },
    },
  },
};

export default translationMock;
