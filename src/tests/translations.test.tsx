import { render, RenderResult } from '@testing-library/react';
import translationMock from '../__mocks__/translations.mock';
import {
  ENGLISH,
  GERMAN,
  POLISH,
  Translation,
  TranslationProvider,
} from '../index';
import TestComponent from './TestComponent.comp';
import { LanguageNameMix } from '../interfaces/translations/schema.interface';

const { translation } = translationMock;
const { English, Polish } = translation;

const ENGLISH_SOME_TEXT =
  '<p>This is translation with some parameter and <a href="#test">link</a>!</p>';

const createPlayground = (lng?: LanguageNameMix): RenderResult =>
  render(
    <TranslationProvider
      language={lng}
      translation={translationMock as unknown as Translation}
    >
      <TestComponent />
    </TranslationProvider>
  );

const englishSomethingTranslationTest = ({
  container,
  queryByText,
}: RenderResult) => {
  expect(container).toContainHTML(ENGLISH_SOME_TEXT);
  expect(queryByText(Polish.something)).not.toBeInTheDocument();
};

const polishSomethingTranslationTest = ({
  container,
  getByText,
}: RenderResult) => {
  expect(getByText(Polish.something)).toBeInTheDocument();
  expect(container).not.toContainHTML(ENGLISH_SOME_TEXT);
};

const englishGreetingTranslationTest = ({
  getByText,
  queryByText,
}: RenderResult) => {
  expect(getByText(English.greetings.greeting)).toBeInTheDocument();
  expect(queryByText(Polish.greetings.greeting)).not.toBeInTheDocument();
};

const polishGreetingTranslationTest = ({
  getByText,
  queryByText,
}: RenderResult) => {
  expect(getByText(Polish.greetings.greeting)).toBeInTheDocument();
  expect(queryByText(English.greetings.greeting)).not.toBeInTheDocument();
};

const seasonGreetingsTranslationTest = ({ getByText }: RenderResult) => {
  expect(getByText(English.greetings.season.autumn)).toBeInTheDocument();
  expect(getByText(English.greetings.season.summer)).toBeInTheDocument();
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
      browserLang.mockReturnValue(ENGLISH);
      testEnglishTranslations(createPlayground());
    });

    test('Should translate to Polish', () => {
      browserLang.mockReturnValue(POLISH);
      testPolishTranslations(createPlayground());
    });

    test('Should translate to Polish because of missing German translations', () => {
      browserLang.mockReturnValue(GERMAN);
      // There is no translation for German. Translation file is setup to prior Polish language. Because of that tests results should be same as for Polish translations.
      testPolishTranslations(createPlayground());
    });
  });

  describe('with setup language', () => {
    test('Should translate to English', () => {
      testEnglishTranslations(createPlayground(ENGLISH));
    });

    test('Should translate to Polish', () => {
      testPolishTranslations(createPlayground(POLISH));
    });

    test('Should translate to Polish because of missing German translations', () => {
      // There is no translation for German. Translation file is setup to prior Polish language. Because of that tests results should be same as for Polish translations.
      testPolishTranslations(createPlayground(GERMAN));
    });
  });
});
