# PayloadCMS bug demo repo

This is a quick demo set up to showcase a bug with PayloadCMS when using both localization and versioning on a collection that has a Block field that itself has blocks with array fields.

Works fine when using MongoDB, only an issue for Postgres-DB as far as I can tell.

Steps to reproduce:

1. Clone repo
1. Create a new page
1. Add a block to the layout, selecting "Item" as the block
1. Add an item (or more) to the block
1. Add some content to localized textfield
1. Add another block to the layout, selecting "Item" again
1. Add some content to localized textfield
1. Save

## Expected result

Document should save properly.

## Actual result

Document gives error on saving.

---

The bug goes away when either versioning or localization is disabled. If you only add content to the non-locallized fields, you never get the bug. It only happens as soon as more than one block has a separate instance of the same array with a localized field with content in it.

It does work fine if you have multiple blocks with arrays that are separate. For instance selecting one "Item" Block and one "Card" Block works as expected.

```txt
[14:08:09] ERROR (payload): There was an error cleaning up old versions for the collection pages
[14:08:09] ERROR (payload): TypeError: Cannot read properties of undefined (reading 'version')
    at saveVersion (/Users/username/Documents/Digiveloper/testing/arrayblock/node_modules/payload/src/versions/saveVersion.ts:151:31)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at updateByID (/Users/username/Documents/Digiveloper/testing/arrayblock/node_modules/payload/src/collections/operations/updateByID.ts:280:16)
    at updateByIDHandler (/Users/username/Documents/Digiveloper/testing/arrayblock/node_modules/payload/src/collections/requestHandlers/updateByID.ts:36:17)
```
