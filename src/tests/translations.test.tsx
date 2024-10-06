import { render, RenderResult } from '@testing-library/react';
import translationMock from '../__mocks__/translations';
import { ENGLISH, Name, POLISH, Regional, Shortcut } from '../index';
import TestComponent from './TestComponent.comp';

const { translation } = translationMock;
const { English, Polish } = translation;

const ENGLISH_SOME_TEXT = (
  <p>
    This is translation with some parameter and <a href='#test'>link</a>!
  </p>
);

const createPlayground = (lng?: Name | Shortcut | Regional): RenderResult =>
  render(
    <TranslationProvider language={lng} translation={translationMock}>
      <TestComponent />
    </TranslationProvider>
  );

const englishSomethingTranslationTest = ({
  container,
  getByText,
}: RenderResult) => {
  expect(container.innerHTML).toContain(ENGLISH_SOME_TEXT);
  expect(getByText(Polish.something)).not.toBeInTheDocument();
};

const polishSomethingTranslationTest = ({
  container,
  getByText,
}: RenderResult) => {
  expect(getByText(Polish.something)).toBeInTheDocument();
  expect(container.innerHTML).not.toContain(ENGLISH_SOME_TEXT);
};

const englishGreetingTranslationTest = ({ getByText }: RenderResult) => {
  expect(getByText(English.greetings.greeting)).toBeInTheDocument();
  expect(getByText(Polish.greetings.greeting)).not.toBeInTheDocument();
};

const polishGreetingTranslationTest = ({ getByText }: RenderResult) => {
  expect(getByText(Polish.greetings.greeting)).toBeInTheDocument();
  expect(getByText(English.greetings.greeting)).not.toBeInTheDocument();
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
  });

  describe('with setup language', () => {
    test('Should translate to English', () => {
      testEnglishTranslations(createPlayground(ENGLISH));
    });

    test('Should translate to Polish', () => {
      testPolishTranslations(createPlayground(POLISH));
    });
  });
});
