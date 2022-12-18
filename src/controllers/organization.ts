import { Organization } from "../service/organization";

function create(orgName: string) {
    let org = new Organization(orgName);
    return org.create();
}

function edit() {

}

function search() {

}

export default {create, edit, search};