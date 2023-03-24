// NOTE: in a real world scenario, I would use something like zod or yup to do proper schema validation
// and infer my types from the scehma definitions. This way we could more accurately parse the input 
// and give better error messages to the user to indicate where the JSON has bad or misformatted data

export type ComponentType = 'hero' | 'image-text' | 'data';

export interface IBaseComponent {
  type: ComponentType;
}

export interface IBaseImageComponent extends IBaseComponent {
  imageURI: string; // URL
}

// keep this separate in case we need to extend later with additional properties
export interface HeroComponent extends IBaseImageComponent { }

export interface ImageComponent extends IBaseImageComponent {
  text: string;
  title?: string;
  leftToRight?: boolean;
}

export interface DataComponent extends IBaseComponent {
  url: string; // URL
}
