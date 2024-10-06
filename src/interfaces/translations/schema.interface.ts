import { Regional } from '../../constants/languages/regionals';
import { Name } from '../../constants/languages/names';
import { Shortcut } from '../../constants/languages/shortcuts';

/** @inner */
export interface TranslationProps {
  [key: string]: string | TranslationProps;
}

type Only<T, U, V> = {
  [key in keyof T]: T[key];
} & {
  [key in keyof U]?: never;
} & {
  [key in keyof V]?: never;
};

type Either<T, U, V> = Only<T, U, V> | Only<U, T, V> | Only<V, U, T>;

type NameTranslationSchema = {
  [key in Name]?: TranslationProps;
};

type ShortcutTranslationSchema = {
  [key in Shortcut]?: TranslationProps;
};

type RegionalTranslationSchema = {
  [key in Regional]?: TranslationProps;
};

type TranslationSchema = Either<
  NameTranslationSchema,
  ShortcutTranslationSchema,
  RegionalTranslationSchema
>;
/** @inner */
export type LanguageNameMix = Name | Shortcut | Regional;

type Language =
  | LanguageNameMix
  | [Name, ...Name[]]
  | [Shortcut, ...Shortcut[]]
  | [Regional, ...Regional[]];

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
