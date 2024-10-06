import { FC } from 'react';

const TestComponent: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('greetings.greeting')}</h1>
      <h2>{t('greetings.season.summer')}</h2>
      <h3>{t('greetings.season.autumn')}</h3>
      <p>
        {t('something', {
          parameter: t('parameter'),
          html: <a href='#test'>link</a>,
        })}
      </p>
      <p>{t('missingTranslation')}</p>
    </>
  );
};

export default TestComponent;
