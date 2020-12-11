import { Helper } from "./helper";

export class Network {
    helper: any;
    
    
    constructor(config) {
        this.helper = new Helper(config);
    }

    async list(node) {
        const data = {};
        const url = '/nodes/' + node + '/network';
        return await this.helper.httpGet(url, data);
    }
    async create(node, data) {
        const url = '/nodes/' + node + '/network';
        return await this.helper.httpPost(url, data);
    }
    async get(node, iface) {
        const data = {};
        const url = '/nodes/' + node + '/network/' + iface;
        return await this.helper.httpGet(url, data);
    }
    async update(node, iface, data) {
        const url = '/nodes/' + node + '/network/' + iface;
        return await this.helper.httpPut(url, data);
    }
    async deleteIface(node, iface) {
        const data = {};
        const url = '/nodes/' + node + '/network/' + iface;
        return await this.helper.httpDel(url, data);
    }
    async delete (node) {
        const data = {};
        const url = '/nodes/' + node + '/network';
        return await this.helper.httpDel(url, data);
    }
}