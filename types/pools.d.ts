import { Helper } from "./helper";

 //pool functions
 export class Pools{

    helper: any;
    
    
    constructor(config) {
        this.helper = new Helper(config);
    }
    async list (callback) {
        const data = {};
        const url = '/pools';
        return await this.helper.httpGet(url, data);
    }
    async create (data) {
        const url = '/pools';
        return await this.helper.httpPost(url, data);
    }
    async get (pool) {
        const data = {};
        const url = '/pools/' + pool;
        return await this.helper.httpGet(url, data);
    }
    async update (pool, data) {
        const url = '/pools/' + pool;
        return await this.helper.httpPut(url, data);
    }
    async delete  (pool) {
        const data = {};
        const url = '/pools/' + pool;
        return await this.helper.httpDel(url, data);
    }
}