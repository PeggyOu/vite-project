export interface DataStoreInterface {

}

export interface UserInterface {

    /**
     * Adds a new user to a Datastore
     *
     * @param {Object} user
     * @param {DataStoreInterface} datastore
     */
    addUser(user: { firstName: string, lastName: string, email: string }, datastore: DataStoreInterface): boolean;

}





