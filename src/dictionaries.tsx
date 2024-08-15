const dictionaries: any = {
    en: () => import("./dictionaries/en.json").then((module) => module.default),
    sr: () => import("./dictionaries/sr.json").then((module) => module.default),
};

export const getDictionary = async (locale: any) => dictionaries[locale]();