import { Helper } from "./helper";

export class Openvz {
    helper: any;
    
    
    constructor(config) {
        this.helper = new Helper(config);
    }

    async createOpenvzContainer(node, data, callback) {
        const url = '/nodes/' + node + '/openvz'
        return await this.helper.httpPost(url, data, callback);
    }
    async  mountOpenvzPrivate(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/status/mount';
        return await this.helper.httpPost(url, data, callback);
    }
    async   shutdownOpenvzContainer(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/status/shutdown';
        return await this.helper.httpPost(url, data, callback);
    }
    async stopOpenvzContainer(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/status/stop';
        return await this.helper.httpPost(url, data, callback);
    }
    async unmountOpenvzContainer(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/status/unmount';
        return await this.helper.httpPost(url, data, callback);
    }
    async migrateOpenvzContainer(node, vmid, target, callback) {
        const data = { 'target': target };
        const url = '/nodes/' + node + '/openvz/' + vmid + '/migrate';
        return await this.helper.httpPost(url, data, callback);
    }
    async getContainerIndex(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid;
        return await this.helper.httpGet(url, data, callback);
    }
    async getContainerStatus(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + node + '/status/current';
        return await this.helper.httpGet(url, data, callback);
    }
    async getContainerBeans(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/status/ubc';
        return await this.helper.httpGet(url, data, callback);
    }
    async getContainerConfig(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/config';
        return await this.helper.httpGet(url, data, callback);
    }
    async getContainerInitLog(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/initlog';
        return await this.helper.httpGet(url, data, callback);
    }
    async getContainerRRD(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/rrd';
        return await this.helper.httpGet(url, data, callback);
    }
    async getContainerRRDData(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/rrddata';
        return await this.helper.httpGet(url, data, callback);
    }
    async deleteOpenvzContainer(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid;
        return await this.helper.httpDel(url, data, callback);
    }
    async setOpenvzContainerOptions(node, vmid, data, callback) {
        const url = '/nodes/' + node + '/openvz/' + vmid + '/config';
        return await this.helper.httpPut(url, data, callback);
    }
}