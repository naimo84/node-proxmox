import { Helper } from "./helper";


export class Firewall {
    helper: any;
    
    
    constructor(config) {
        this.helper = new Helper(config);
    }

    async list(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall';
        return await this.helper.httpGet(url, data);
    }
    async listRules(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/rules';
        return await this.helper.httpGet(url, data);
    }
    async createRule(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/rules';
        return await this.helper.httpPost(url, data);
    }
    async getRule(node, qemu, pos) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/rules/' + pos;
        return await this.helper.httpGet(url, data);
    }
    async updateRule(node, qemu, pos, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/rules/' + pos;
        return await this.helper.httpPut(url, data);
    }
    async deleteRule(node, qemu, pos) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/rules/' + pos;
        return await this.helper.httpDel(url, data);
    }
    async listAlias(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/aliases';
        return await this.helper.httpGet(url, data);
    }
    async createAlias(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/aliases';
        return await this.helper.httpPost(url, data);
    }
    async getAlias(node, qemu, name) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/aliases/' + name;
        return await this.helper.httpGet(url, data);
    }
    async updateAlias(node, qemu, name, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/aliases/' + name;
        return await this.helper.httpPut(url, data);
    }
    async deleteAlias(node, qemu, name) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/aliases/' + name;
        return await this.helper.httpDel(url, data);
    }
    async listIpset(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset';
        return await this.helper.httpGet(url, data);
    }
    async createIpset(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset';
        return await this.helper.httpPost(url, data);
    }
    async getIpsetContent(node, qemu, name) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset/' + name;
        return await this.helper.httpGet(url, data);
    }
    async addIpToIpset(node, qemu, name, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset/' + name;
        return await this.helper.httpPost(url, data);
    }
    async deleteIpset(node, qemu, name) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset/' + name;
        return await this.helper.httpDel(url, data);
    }
    async getIpfromIpset(node, qemu, name, cidr) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset/' + name + '/' + cidr;
        return await this.helper.httpGet(url, data);
    }
    async updateIpfromIpset(node, qemu, name, cidr, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset/' + name + '/' + cidr;
        return await this.helper.httpPut(url, data);
    }
    async deleteIpfromIpset(node, qemu, name, cidr) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset/' + name + '/' + cidr;
        return await this.helper.httpDel(url, data);
    }
    async getOptions(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/options';
        return await this.helper.httpGet(url, data);
    }
    async setOptions(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/options';
        return await this.helper.httpPut(url, data);
    }
    async getLog(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/log';
        return await this.helper.httpGet(url, data);
    }
    async getRefs(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/refs';
        return await this.helper.httpGet(url, data);
    }
}
