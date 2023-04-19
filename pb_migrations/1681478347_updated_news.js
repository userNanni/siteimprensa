migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eevlcjlbbzmst2g")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zwqwkkhb",
    "name": "abstract",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eevlcjlbbzmst2g")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
