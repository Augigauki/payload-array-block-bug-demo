import { Block } from "payload/types";

export const ItemsBlock: Block = {
    slug: 'items',
    fields: [
        {
            name: 'array',
            type: 'array',
            labels: {
                singular: 'Item',
                plural: 'Items',
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