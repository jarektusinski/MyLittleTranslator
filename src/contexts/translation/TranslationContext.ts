import { createContext } from 'react';
import { Translation } from '../../index';
import { LanguageNameMix } from '../../interfaces/Translation';

/** @inner */
export interface TranslationContextProps {
  translation: Translation;
  language?: LanguageNameMix;
}

/** @inner */
const TranslationContext = createContext<TranslationContextProps | null>(null);

export default TranslationContext;
