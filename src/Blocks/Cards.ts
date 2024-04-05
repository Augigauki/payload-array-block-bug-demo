import { Block } from "payload/types";

export const CardsBlock: Block = {
    slug: 'cards',
    fields: [
        {
            name: 'array',
            type: 'array',
            labels: {
                singular: 'Card',
                plural: 'Cards',
            },
            fields: [
                {
                    name: 'tag',
                    type: 'text',
                    label: 'Localized Tag',
                    localized: true,
                    admin: {
                        description: 'This field is localized'
                    }
                },
                {
                    name: 'title',
                    type: 'text',
                    admin: {
                        description: 'This field has no localization'
                    }
                }
            ]
        }
    ]
}