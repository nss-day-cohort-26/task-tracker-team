const cardDatabase = [];


const databaseMethods = {
    save:(databaseObject, localStorageKey) => {
            const stringifiedDatabase = JSON.stringify(databaseObject)
            localStorage.setItem(localStorageKey, stringifiedDatabase)
        },
    load:localStorageKey => {
            const databaseString = localStorage.getItem(localStorageKey)
            return JSON.parse(databaseString)
        }
};