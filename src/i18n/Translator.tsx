import { getLocal } from "../utils/LocalStorage";

export class Translator {
  lang: any;
  constructor(lang: any) {
    // console.log(lang)
    let langCode: string;
    if (getLocal("lang")) {
      langCode = getLocal("lang");
    } else {
      langCode = "en";
    }
    this.lang = lang[langCode] ?? "";
  }
  _(key: string): string {
    return this.lang[key] ? this.lang[key] : "";
  }
}
