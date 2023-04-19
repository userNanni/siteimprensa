migrate((db) => {
  const collection = new Collection({
    "id": "eevlcjlbbzmst2g",
    "created": "2023-04-14 11:02:54.615Z",
    "updated": "2023-04-14 11:02:54.615Z",
    "name": "news",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kapmcezv",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zwqwkkhb",
        "name": "subtitle",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fg5nwdgk",
        "name": "text",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "2pmzbowx",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_wzl9xHv` ON `news` (`title`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("eevlcjlbbzmst2g");

  return dao.deleteCollection(collection);
})
