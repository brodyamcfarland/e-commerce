interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface Product extends SanityBody {
    _type: "product";
    image: Image[];
    name: string;
    slug: string;
    price: number;
    details: string;
}

export interface Banner extends SanityBody {
    _type: "banner";
    image: Image;
    buttonText: string;
    product: string;
    desc: string;
    smallText: string;
    midText: string;
    largeText1: string;
    largeText2: string;
    discount: string;
    saleTime: string;
}
