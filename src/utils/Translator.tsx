import { Children, cloneElement, FC, Fragment, ReactNode } from "react";
import { Translator as Translate } from "./../i18n/Translator";

const Translator: FC<{ children: ReactNode; langs: any }> = ({
  children,
  langs,
}) => {
  let t = new Translate(langs);
  const childNode = Children.map(children, (child: any) => {
    const clone = cloneElement(child, {
      t: t,
    });
    return clone;
  });
  return <Fragment>{childNode}</Fragment>;
};

export default Translator;
