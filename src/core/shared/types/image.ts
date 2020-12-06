import { Color } from './color';
import { Gradient } from './gradient';
import { RBType, serializeAtomicValue } from './shared';
import { URI, URL } from './url';

type AtLeastOneRequired<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
    {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
    }[Keys];

type ImageTag = 'ltr' | 'rtl';

const serializeSrc = (x: URI | URL): string => {
    return `"${x.data}"`;
};

type ImageParamsObj = {
    direction?: ImageTag;
} & AtLeastOneRequired<{
    src: URL | URI;
    color: Color;
}>;

const serializeImage = (x: Image): string => {
    const { direction, src, color } = x.data;
    const firstPart = direction ? `${direction} ` : '';
    const secondsPart =
        src && color
            ? `${serializeSrc(src)} , ${serializeAtomicValue(color)}`
            : `${src ? serializeAtomicValue(src) : serializeAtomicValue(color as Color)}`;
    return `image(${firstPart}${secondsPart})`;
};

export class Image implements RBType<ImageParamsObj> {
    valueConstructor: Function;
    public data: ImageParamsObj;
    serialize: () => string;

    private constructor(data: ImageParamsObj) {
        this.data = data;
        this.valueConstructor = Image.image;
        this.serialize = () => serializeImage(this);
    }

    /**
     *
     * Constructs a value of type **`Image`** where the unit is **`mm`**.
     */
    static image(x: ImageParamsObj): Image {
        return new Image(x);
    }
}
/** @category Value constructor */
export const image = Image.image;

/** @global */
export type ImageValue = URI | URL | Gradient | Image;
