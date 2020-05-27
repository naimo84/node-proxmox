import { Helper } from "./helper";

export class Access {
  
    
    helper: any;
    
    
    constructor(config) {
        this.helper = new Helper(config);
    }


    async listUsers(callback) {
        const data = {};
        const url = '/access/users';
        return await this.helper.httpGet(url, data);
    }
    async createUser(data) {
        const url = '/access/users';
        return await this.helper.httpPost(url, data);
    }
    async getUser(user) {
        const data = {};
        const url = '/access/users/' + user;
        return await this.helper.httpGet(url, data);
    }
    async updateUser(user, data) {
        const url = '/access/users/' + user;
        return await this.helper.httpPut(url, data);
    }
    async deleteUser(user) {
        const data = {};
        const url = '/access/users/' + user;
        return await this.helper.httpDel(url, data);
    }
    async listGroups(callback) {
        const data = {};
        const url = '/access/groups';
        return await this.helper.httpGet(url, data);
    }
    async createGroup(data) {
        const url = '/access/groups';
        return await this.helper.httpPost(url, data);
    }
    async getGroup(group) {
        const data = {};
        const url = '/access/groups/' + group;
        return await this.helper.httpGet(url, data);
    }
    async updateGroup(group, data) {
        const url = '/access/groups/' + group;
        return await this.helper.httpPut(url, data);
    }
    async deleteGroup(group, data) {
        const url = '/access/groups/' + group;
        return await this.helper.httpDel(url, data);
    }
    async listRoles(callback) {
        const data = {};
        const url = '/access/roles';
        return await this.helper.httpGet(url, data);
    }
    async createRole(data) {
        const url = '/access/roles';
        return await this.helper.httpPost(url, data);
    }
    async getRole(role) {
        const data = {};
        const url = '/access/roles/' + role;
        return await this.helper.httpGet(url, data);
    }
    async updateRole(role, data) {
        const url = '/access/roles/' + role;
        return await this.helper.httpPut(url, data);
    }
    async deleteRole(role) {
        const data = {};
        const url = '/access/roles/' + role;
        return await this.helper.httpDel(url, data);
    }
    async listDomains(callback) {
        const data = {};
        const url = '/access/domains';
        return await this.helper.httpGet(url, data);
    }
    async createDomain(data) {
        const url = '/access/domains';
        return await this.helper.httpPost(url, data);
    }
    async getDomain(domain) {
        const data = {};
        const url = '/access/domains/' + domain;
        return await this.helper.httpGet(url, data);
    }
    async updateDomain(domain, data) {
        const url = '/access/domains/' + domain;
        return await this.helper.httpPut(url, data);
    }
    async deleteDomain(domain) {
        const data = {};
        const url = '/access/domains/' + domain;
        return await this.helper.httpDel(url, data);
    }
    async getAcl(callback) {
        const data = {};
        const url = '/access/acl';
        return await this.helper.httpGet(url, data);
    }
    async updateAcl(data) {
        const url = '/access/acl';
        return await this.helper.httpPut(url, data);
    }
    async getTicket(callback) {
        const data = {};
        const url = '/access/ticket';
        return await this.helper.httpGet(url, data);
    }
    async postTicket(data) {
        const url = '/access/ticket';
        return await this.helper.httpPost(url, data);
    }
    async password(data) {
        const url = '/access/password';
        return await this.helper.httpPut(url, data);
    }
}