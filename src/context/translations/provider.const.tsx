import { FC, ReactNode, useMemo } from 'react';
import Translation, { TranslationProps } from './context.const';

interface TranslationProviderProps extends TranslationProps {
  children: ReactNode;
}

const TranslationProvider: FC<TranslationProviderProps> = ({
  children,
  language,
  translation,
}) => {
  const translationProps = useMemo(
    () => ({
      translation,
      language,
    }),
    [language]
  );

  return (
    <Translation.Provider value={translationProps}>
      {children}
    </Translation.Provider>
  );
};

export default TranslationProvider;
