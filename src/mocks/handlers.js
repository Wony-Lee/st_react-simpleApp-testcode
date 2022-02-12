import { rest } from 'msw';

export const handlers = [
    rest.get('http://localhost:3333/products', (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    name: "America",
                    imagePath: "/images/america.jpeg"
                },
                {
                    name: "England",
                    imagePath: "/images/england.jpeg"
                }
            ])
        )
    }),
    rest.get('http://localhost:3333/options', (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    name: "Insurance"
                },
                {
                    name: "Dinner"
                }
            ])
        )
    }),
    rest.post('http://localhost:3333/order', (req, res, ctx) => {
        let dummyDate = [{ orderNumber: 213, price: 2000 }];
        return res(ctx.json(dummyDate))
    })
]