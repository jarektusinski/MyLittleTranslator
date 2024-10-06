import { ReactNode, useContext, useEffect, useState } from 'react';
import TranslationContext from '../context/translations/context.const';
import {
  LanguageNameMix,
  TranslationProps,
} from '../interfaces/translations/schema.interface';
import { Name, NAMES } from '../constants/languages/names';
import { Shortcut, SHORTCUTS } from '../constants/languages/shortcuts';
import { Regional, REGIONALS } from '../constants/languages/regionals';
import { LanguageProps, LANGUAGES } from '../constants/languages/languages';

interface Options {
  [key: string]: ReactNode;
}

const useTranslation = (language?: LanguageNameMix) => {
  const value = useContext(TranslationContext);
  if (value === null) {
    throw new Error(
      'Translation provider is not applied! Add provider to the root project component.'
    );
  }

  const [getLangsProps, setLangsProps] = useState<LanguageProps[]>([]);
  const [getChosenLang, setChosenLang] = useState<LanguageNameMix | undefined>(
    undefined
  );
  const { language: lng, translation } = value;
  const { translation: transData } = translation;

  const checkIfLangTypeIsWrong = (lang: string) =>
    !SHORTCUTS.includes(lang as Shortcut) &&
    !REGIONALS.includes(lang as Regional) &&
    !NAMES.includes(lang as Name);

  const throwExceptionIfLangTypeError = (lang: string) => {
    if (checkIfLangTypeIsWrong(lang)) {
      throw new Error(`${lang} is not correct language value!`);
    }
  };

  const findTransProps = (key: string): (TranslationProps | string)[] => {
    const transProps: (TranslationProps | string)[] = [];
    getLangsProps.forEach((prop) => {
      const tranProps =
        transData?.[prop.name] ||
        transData?.[prop.shortcut] ||
        transData?.[prop.regional as Regional];

      if (tranProps && key in tranProps) {
        transProps.push(tranProps[key]);
      }
    });
    return transProps;
  };

  const findByKey = (
    tranProps: TranslationProps | string,
    keys: string[]
  ): string | undefined => {
    let tranProp: TranslationProps | string | undefined = tranProps;
    for (let i = 0; i < keys.length; i++) {
      const isString = typeof tranProp === 'string';
      const isLast = keys.length - 1 === i;
      if (isString) {
        if (isLast) {
          return tranProp as string;
        }
        return undefined;
      }

      tranProp = (tranProp as TranslationProps)?.[keys[i]];
      if (tranProp === undefined) {
        return undefined;
      }
    }
    return tranProp as string;
  };

  const getTranslation = (
    transProps: (TranslationProps | string)[],
    keys: string[]
  ): string | undefined => {
    for (let i = 0; i < transProps.length; i++) {
      const trans = findByKey(transProps[i], keys);
      if (trans) {
        return trans;
      }
    }
    return undefined;
  };

  const findTranslation = (key: string): string => {
    if (!getLangsProps.length || !key) {
      return key;
    }
    const keys = key.split('.');
    const transProps = findTransProps(keys.shift()!);
    if (!transProps.length) {
      return key;
    }
    return getTranslation(transProps, keys) || key;
  };

  const t = (key: string, options?: Options): ReactNode => {
    const trans = findTranslation(key);
    if (!options) {
      return trans;
    }

    const optionsKeys = Object.keys(options);
    let nodes: ReactNode[] = [trans];

    optionsKeys.forEach((optionsKey) => {
      let elements: ReactNode[] = [];
      nodes.forEach((node) => {
        if (typeof node === 'string') {
          const parts = node.split(`\`${optionsKey}\``)!;
          elements.push(parts.shift());
          parts.forEach((part) => elements.push(options[optionsKey], part));
        }
      });
      nodes = elements;
    });
    return nodes;
  };

  useEffect(() => {
    const lang = language || lng || window.navigator.language;
    throwExceptionIfLangTypeError(lang);
    setChosenLang(lang as LanguageNameMix);
  }, [language, lng]);

  useEffect(() => {
    setLangsProps(
      [
        ...(getChosenLang ? [getChosenLang] : []),
        ...[translation.defaultLang].flat(),
      ].map(
        (lang) =>
          LANGUAGES.find((langObj) =>
            [langObj.name, langObj.shortcut, langObj.regional].includes(lang)
          )!
      )
    );
  }, [getChosenLang]);

  return { language: getChosenLang, t };
};

export default useTranslation;
