// export const translate = (key?:string):any => {
// //   let langData: any = {};
// //   let lang = localStorage.getItem("lang");
// //   let selectLang = JSON.parse(`${lang}`);
// // //   if (selectLang === "fa") {
// // //     langData = fa;
// // //   } else if (selectLang === "en") {
// // //     langData = en;
// // //   }
// //   return this;
// //   //return langData[key];
// let setLang=(lang:any)=>{
//     console.log(this);
// }

// return setLang;

// };
// export class Translator {
//   lang: any;
//   constructor(...lang: any) {
//     let langCode = JSON.parse(`${localStorage.getItem("lang")}`);
//     console.log(lang);
//     lang.forEach((element: any) => {
//       if (element["LANG"] === langCode) {
//         this.lang = element;
//       }
//     });
//     // this.lang = lang;
//   }
//   _(key: string): string {
//     return this.lang[key];
//   }
// }
// const l = JSON.parse(`${localStorage.getItem('lang')}`)
// export let t = new Translator(l);
export class Translator {
  lang: any;
  constructor(lang: any) {
    let langCode = JSON.parse(`${localStorage.getItem("lang")}`);
    this.lang = lang[langCode] ?? "";
  }
  _(key: string): string {
    return this.lang[key] ? this.lang[key] : "";
  }
}
