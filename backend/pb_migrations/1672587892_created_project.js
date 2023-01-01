migrate((db) => {
  const collection = new Collection({
    "id": "ehrq41bjj0p8fbn",
    "created": "2023-01-01 15:44:52.404Z",
    "updated": "2023-01-01 15:44:52.404Z",
    "name": "project",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7svdb8bd",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
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
  const collection = dao.findCollectionByNameOrId("ehrq41bjj0p8fbn");

  return dao.deleteCollection(collection);
})
