import { RegionalLanguageName } from '../constants/languages/regionals';
import { LanguageName } from '../constants/languages/names';
import { LanguageNameShortcut } from '../constants/languages/shortcuts';

/** @inner */
export interface TranslationProps {
  [key: string]: string | TranslationProps;
}

/** Determine to use first of three types */
type Only<T, U, V> = {
  [key in keyof T]: T[key];
} & {
  [key in keyof U]?: never;
} & {
  [key in keyof V]?: never;
};

/** Determine to use only one of three types in the same case */
type Either<T, U, V> = Only<T, U, V> | Only<U, T, V> | Only<V, U, T>;

type LanguageNameTranslationSchema = {
  [key in LanguageName]?: TranslationProps;
};

type ShortcutTranslationSchema = {
  [key in LanguageNameShortcut]?: TranslationProps;
};

type RegionalTranslationSchema = {
  [key in RegionalLanguageName]?: TranslationProps;
};

type TranslationSchema = Either<
  LanguageNameTranslationSchema,
  ShortcutTranslationSchema,
  RegionalTranslationSchema
>;

/**
 * Mixed of languages names, shortcuts and regionalisms
 * @inner
 */
export type LanguageNameMix =
  | LanguageName
  | LanguageNameShortcut
  | RegionalLanguageName;

type Language =
  | LanguageNameMix
  | [LanguageName, ...LanguageName[]]
  | [LanguageNameShortcut, ...LanguageNameShortcut[]]
  | [RegionalLanguageName, ...RegionalLanguageName[]];

/**
 * Translation file schema.
 * @prop { Language } defaultLang - Default translation language (language name/shortcut/region) or language array (order is important).
 * @prop { TranslationSchema } translation - Object where _key_ is a language name and _value_ is a string or object of strings.
 */
export interface Translation {
  /**
   * Default translation language (language name/shortcut/region) or language array (order is important).
   */
  defaultLang: Language;

  /**
   * Object where _key_ is a language name and _value_ is a string or object of strings.
   */
  translation: TranslationSchema;
}
