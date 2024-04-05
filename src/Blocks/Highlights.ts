import { Block } from "payload/types";

export const ItemsBlock: Block = {
    slug: 'items',
    fields: [
        {
            name: 'array',
            type: 'array',
            fields: [
                {
                    name: 'tag',
                    type: 'text',
                    localized: true,
                },
                {
                    name: 'title',
                    type: 'text',
                    localized: true,
                }
            ]
        }
    ]
}