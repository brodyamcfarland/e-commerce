import React from "react";
import { client, urlFor } from "../../lib/client";
import { GetStaticProps, GetStaticPaths } from "next";
import { Product } from "../../types";

type Props = {
    product: Product;
    products: Product[];
};

const ProductDetails = ({ product, products }: Props) => {
    // const { image, name, details, price } = product;
    return (
        <div>
            <div>
                <div>
                    <div>
                        <img
                            src={urlFor(
                                product.image && product.image[0]
                            ).url()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const query = `*[_type == "product"]{
      slug {
        current
      }
    }
    `;

    const products = await client.fetch(query);
    const paths = products.map((product: Product) => ({
        params: {
            slug: product.slug.current,
        },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({
    params: { slug },
}: any) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = `*[_type == "product"]`;

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    console.log(product);

    return {
        props: { products, product },
    };
};

export default ProductDetails;
