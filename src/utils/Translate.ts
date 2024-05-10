export const translate = (tag: string): string => {
  const translations: Record<string, string> = {
    elevator: 'Elevador',
    furniture: 'Armário Embutido',
    parking: 'Garagem',
  };
  return translations[tag] || tag;
};
