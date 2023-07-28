import { positionVariants, textVariants } from "./types";

interface textComponent {
  body: string;
  position: positionVariants;
  variant: textVariants;
}

interface cardComponent {
  variant: "default" | "expandable";
  size: "large" | "small";
  header: string;
  body: string;
}

type img = { data: { attributes: { url?: string } } };
type images = { data: [attributes: { url?: string }] };
type imgPosition = "right" | "left";
type mobileImgPosition = "top" | "bottom";
type objfit = "none" | "contain" | "cover" | "fill" | "scale-down";
type buttonVariant = "outlined" | "default" | "text";
type buttonSize = "small" | "medium" | "large";
type buttonColor = "primary" | "error" | "success";
type card = {
  variant: "default" | "expandable";
  size: "large" | "small";
  header: string;
  body: string;
  img: img;
};

interface buttonComponent {
  text: string;
  color: buttonColor;
  size: buttonSize;
  variant: buttonVariant;
  destination: string;
}

type sectionComponent = {
  __typename: string;
  text: [textComponent];
  objectFit: objfit;
  imgPosition: imgPosition;
  mobileImgPosition: mobileImgPosition;
  gap: number;
  img: img;
  backgroundImg: img;
  darkBackgroundImg: img;
  buttons: [buttonComponent];
};

type heroSectionComponent = {
  __typename: string;
  text: [textComponent];
  imagesPosition: imgPosition;
  mobileImagesPosition: mobileImgPosition;
  gap: number;
  images: img;
  backgroundImage: img;
  darkBackgroundImage: img;
  buttons: [buttonComponent];
};

type featuresSectionComponent = {
  title: string;
  cards: [card];
};

interface cardsComponent {
  __typename: string;
  cards: [cardComponent];
}

interface sectionProps {
  component: sectionComponent;
}

interface heroSectionProps {
  component: heroSectionComponent;
}

interface featuresSectionProps {
  component: featuresSectionComponent;
}

export type {
  card,
  featuresSectionProps,
  heroSectionProps,
  sectionComponent,
  cardsComponent,
  sectionProps,
  textComponent,
  buttonComponent,
};
