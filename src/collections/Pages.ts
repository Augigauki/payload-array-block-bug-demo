import { CollectionConfig } from "payload/types";
import { ItemsBlock } from "../Blocks/Highlights";

export const Pages: CollectionConfig = {
    slug: 'pages',
    versions: {
        drafts: true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            //localized: true,
        },
        {
            name: 'layout',
            type: 'blocks',
            labels: {
                singular: 'Block',
                plural: 'Blocks',
            },
            blocks: [ItemsBlock]
        }


    ]
}