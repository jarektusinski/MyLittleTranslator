import {
  ENGLISH_LANG_NAME_SHORTCUT,
  POLISH_LANG_NAME_SHORTCUT,
  Translation,
} from '../index';

const translationMock: Translation = {
  defaultLang: [POLISH_LANG_NAME_SHORTCUT, ENGLISH_LANG_NAME_SHORTCUT],
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
