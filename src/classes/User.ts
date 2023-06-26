import {DataStoreInterface, UserInterface} from "./interfaces.ts";

class User implements UserInterface {
    addUser(
        user: { firstName: string; lastName: string; email: string },
        datastore: DataStoreInterface): boolean {
        this._user = user;
        this._datastore = datastore;
        return true;
    }

}

export default User;