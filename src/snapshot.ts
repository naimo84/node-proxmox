import { Helper } from "./helper";

export class  
Snapshot {
    helper: any;    

    

    constructor(config) {
        this.helper = new Helper(config);
    }

    async list(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/snapshot';
        return await this.helper.httpGet(url, data);
    }
    async get(node, qemu, snapname) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/snapshot/' + snapname;
        return await this.helper.httpGet(url, data);
    }
    async getConfig(node, qemu, snapname) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/snapshot/' + snapname + '/config';
        return await this.helper.httpGet(url, data);
    }
    async putConfig(node, qemu, snapname, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/snapshot/' + snapname + '/config';
        return await this.helper.httpPut(url, data);
    }
    async rollback(node, qemu, snapname) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/snapshot/' + snapname + '/rollback';
        return await this.helper.httpPost(url, data);
    }
    async delete (node, qemu, snapname) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/snapshot/' + snapname;
        return await this.helper.httpDel(url, data);
    }
    async make(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/snapshot';
        return await this.helper.httpPost(url, data);
    }
}
