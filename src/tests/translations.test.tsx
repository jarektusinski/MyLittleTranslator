import { render, RenderResult } from '@testing-library/react';
import translationMock from '../__mocks__/translations.mock';
import {
  ENGLISH_LANG_NAME_SHORTCUT,
  GERMAN_LANG_NAME,
  POLISH_LANG_NAME_REGIONAL_SHORTCUT,
  TranslationProvider,
} from '../index';
import TestComponent from './TestComponent';
import { LanguageNameMix } from '../interfaces/Translation';

const ENGLISH_GREETING_SUMMER_TEXT = 'Goodbye Spring! Hello Summer!';
const ENGLISH_GREETING_AUTUMN_TEXT = 'Winter is coming';
const ENGLISH_GREETING_TEXT = 'Hello';
const ENGLISH_SOME_TEXT =
  '<p>This is translation with some parameter and <a href="#test">link</a>!</p>';
const POLISH_SOME_TEXT = 'To jest tłumaczenie bez parametru!';
const POLISH_GREETING_TEXT = 'Cześć';

const createPlayground = (lng?: LanguageNameMix): RenderResult =>
  render(
    <TranslationProvider language={lng} translation={translationMock}>
      <TestComponent />
    </TranslationProvider>
  );

const englishSomethingTranslationTest = ({
  container,
  queryByText,
}: RenderResult) => {
  expect(container).toContainHTML(ENGLISH_SOME_TEXT);
  expect(queryByText(POLISH_SOME_TEXT)).not.toBeInTheDocument();
};

const polishSomethingTranslationTest = ({
  container,
  getByText,
}: RenderResult) => {
  expect(getByText(POLISH_SOME_TEXT)).toBeInTheDocument();
  expect(container).not.toContainHTML(ENGLISH_SOME_TEXT);
};

const englishGreetingTranslationTest = ({
  getByText,
  queryByText,
}: RenderResult) => {
  expect(getByText(ENGLISH_GREETING_TEXT)).toBeInTheDocument();
  expect(queryByText(POLISH_GREETING_TEXT)).not.toBeInTheDocument();
};

const polishGreetingTranslationTest = ({
  getByText,
  queryByText,
}: RenderResult) => {
  expect(getByText(POLISH_GREETING_TEXT)).toBeInTheDocument();
  expect(queryByText(ENGLISH_GREETING_TEXT)).not.toBeInTheDocument();
};

const seasonGreetingsTranslationTest = ({ getByText }: RenderResult) => {
  expect(getByText(ENGLISH_GREETING_AUTUMN_TEXT)).toBeInTheDocument();
  expect(getByText(ENGLISH_GREETING_SUMMER_TEXT)).toBeInTheDocument();
};

const missingTranslationTest = ({ getByText }: RenderResult) =>
  expect(getByText('missingTranslation')).toBeInTheDocument();

const testEnglishTranslations = (playground: RenderResult) => {
  englishSomethingTranslationTest(playground);
  englishGreetingTranslationTest(playground);
  seasonGreetingsTranslationTest(playground);
  missingTranslationTest(playground);
};

const testPolishTranslations = (playground: RenderResult) => {
  polishSomethingTranslationTest(playground);
  polishGreetingTranslationTest(playground);
  seasonGreetingsTranslationTest(playground);
  missingTranslationTest(playground);
};

describe('Translation test', () => {
  describe('with browser language', () => {
    let browserLang: jest.SpyInstance<string, [], any>;

    beforeEach(() => {
      browserLang = jest.spyOn(window.navigator, 'language', 'get');
    });

    test('Should translate to English', () => {
      browserLang.mockReturnValue(ENGLISH_LANG_NAME_SHORTCUT);
      testEnglishTranslations(createPlayground());
    });

    test('Should translate to Polish', () => {
      browserLang.mockReturnValue(POLISH_LANG_NAME_REGIONAL_SHORTCUT);
      testPolishTranslations(createPlayground());
    });

    test('Should translate to Polish because of missing German translations', () => {
      browserLang.mockReturnValue(GERMAN_LANG_NAME);
      // There is no translation for German. Translation file is setup to prior Polish language. Because of that tests results should be same as for Polish translations.
      testPolishTranslations(createPlayground());
    });
  });

  describe('with setup language', () => {
    test('Should translate to English', () => {
      testEnglishTranslations(createPlayground(ENGLISH_LANG_NAME_SHORTCUT));
    });

    test('Should translate to Polish', () => {
      testPolishTranslations(
        createPlayground(POLISH_LANG_NAME_REGIONAL_SHORTCUT)
      );
    });

    test('Should translate to Polish because of missing German translations', () => {
      // There is no translation for German. Translation file is setup to prior Polish language. Because of that tests results should be same as for Polish translations.
      testPolishTranslations(createPlayground(GERMAN_LANG_NAME));
    });
  });
});
