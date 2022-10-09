export type DogsApiResponse = DogResponse[];

export interface DogResponse {
    readonly name: string;
    readonly temperament: string;
}

export interface DogWithImage {
    readonly namePart: string;
    readonly image: string;
}

export interface Dog {
    readonly image: string;
    readonly name: string;
    readonly temperament: string;
}
