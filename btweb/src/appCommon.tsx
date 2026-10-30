import { useEffect } from 'react';

export const useSetLanguage = (languageCode: string) => {
  useEffect(() => {
    document.documentElement.setAttribute('lang', languageCode);
  }, [languageCode]);
};
