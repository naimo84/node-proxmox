import { Helper } from "./helper";

  
    //storage functions
    export class Storage {

        helper: any;
    
    
    constructor(config) {
        this.helper = new Helper(config);
    }
        async list(callback) {
            const data = {};
            const url = '/storage';
            return await this.helper.httpGet(url, data);
        }
        async create(data) {
            const url = '/storage';
            return await this.helper.httpPost(url, data);
        }
        async get(storage) {
            const data = {};
            const url = '/storage/' + storage;
            return await this.helper.httpGet(url, data);
        }
        async update(storage, data) {
            const url = '/storage/' + storage;
            return await this.helper.httpPut(url, data);
        }
        async delete (storage) {
            const data = {};
            const url = '/storage/' + storage;
            return await this.helper.httpDel(url, data);
        }

    }