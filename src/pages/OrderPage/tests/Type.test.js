import { render, screen } from '@testing-library/react';
import Type from '../Type'
import { test } from 'msw'

test("display product images from server", async () => {
    render(<Type orderType="products" />)

    const productsImages = await screen.findAllByRole("img", {
        name: /products$/i
    })

    expect(productsImages).toHaveLength(2);

    const altText = productsImage.map((element) => element.alt);
    expect(altText).toEqual(['America product', 'England product'])
})

test("when fetching product datas, face an error", async () => {
    server.resetHandlers(
        rest.get('http://localhost:5000/products', (res, req, ctx) =>
            res(ctx.status(500))
        )
    )

    render(<Type orderType="products" />)
    const errorBanner = await screen.findByTestId('error-banner');
    expect(errorBanner).toHaveTextContent("에러가 발생했습니다.")
})