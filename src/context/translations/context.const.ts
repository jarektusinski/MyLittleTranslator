import { createContext } from 'react';
import { Translation } from '../../index';
import { LanguageNameMix } from '../../interfaces/translations/schema.interface';

/** @inner */
export interface TranslationProps {
  translation: Translation;
  language?: LanguageNameMix;
}

/** @inner */
const TranslationContext = createContext<TranslationProps | null>(null);

export default TranslationContext;
