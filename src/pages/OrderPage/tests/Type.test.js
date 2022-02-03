import { render, screen } from '@testing-library/react';
import Type from '../Type'

test("display product images from server", async () => {
    render(<Type orderType="products" />)

    const productsImages = await screen.findAllByRole("img", {
        name: /products$/i
    })

    expect(productsImages).toHaveLength(2);

    const altText = productsImage.map((element) => element.alt);
    expect(altText).toEqual(['America product', 'England product'])
})