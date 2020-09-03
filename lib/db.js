import firebase, { usersDB, sitesDB } from './firebase';

export function createUser(uid, data) {
    return usersDB.doc(uid).set(data, { merge: true });
}

export function createSite(data) {
    const site = sitesDB.doc();
    site.set(data);

    return site;
}
