migrate((db) => {
  const collection = new Collection({
    "id": "4tmui7254n0iimt",
    "created": "2022-12-31 21:55:55.518Z",
    "updated": "2022-12-31 21:55:55.518Z",
    "name": "projects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xro8zb3k",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 64,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "etuohvlt",
        "name": "tagline",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 64,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lf9ku66i",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 512,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ti18d0oo",
        "name": "url",
        "type": "url",
        "required": true,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "vdkq34lc",
        "name": "thumbnail",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": [
            "80x80"
          ]
        }
      },
      {
        "system": false,
        "id": "exbjge4d",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id != '' && @request.auth.id = @request.data.user",
    "updateRule": "@request.auth.id = user",
    "deleteRule": "@request.auth.id = user",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4tmui7254n0iimt");

  return dao.deleteCollection(collection);
})
