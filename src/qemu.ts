import { Helper } from "./helper";

class  
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

class Firewall {
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

export class Qemu {

    helper: any;
    snapshot: Snapshot;
    firewall: Firewall;
    
    constructor(config) {
        this.helper = new Helper(config);    
        this.snapshot=new Snapshot(config);
        this.firewall=new Firewall(config);
    }
    

    async getStatus(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/';
        return await this.helper.httpGet(url, data);
    }
    async get(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu;
        return await this.helper.httpGet(url, data);
    }
    async del(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu;
        return await this.helper.httpDel(url, data);
    }
    async getStatusCurrent(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/current'
            return await this.helper.httpGet(url, data);
    }
    async start(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/start';
        return await this.helper.httpPost(url, data);
    }
    async stop(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/stop';
        return await this.helper.httpPost(url, data);
    }
    async reset(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/reset';
        return await this.helper.httpPost(url, data);
    }
    async shutdown(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/shutdown';
        return await this.helper.httpPost(url, data);
    }
    async suspend(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/suspend';
        return await this.helper.httpPost(url, data);
    }
    async resume(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/status/resume';
        return await this.helper.httpPost(url, data);
    }
   
    async rrd(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/rrd';
        return await this.helper.httpGet(url, data);
    }
    async rrdData(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/rrddata';
        return await this.helper.httpGet(url, data);
    }
    async getConfig(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/config';
        return await this.helper.httpGet(url, data);
    }
    async updateConfig(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/config';
        return await this.helper.httpPut(url, data);
    }
    async setConfig(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/config';
        return await this.helper.httpPost(url, data);
    }
    async pending(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/pending';
        return await this.helper.httpGet(url, data);
    }
    async unlink(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/unlink';
        return await this.helper.httpPut(url, data);
    }
    async vncproxy(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/vncproxy';
        return await this.helper.httpPost(url, data);
    }
    async vncwebsocket(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/vncwebsocket';
        return await this.helper.httpGet(url, data);
    }
    async spiceproxy(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/spiceproxy';
        return await this.helper.httpPost(url, data);
    }
    async sendkey(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/sendkey';
        return await this.helper.httpPut(url, data);
    }
    async feature(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/feature';
        return await this.helper.httpGet(url, data);
    }
    async clone(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/clone';
        return await this.helper.httpPost(url, data);
    }
    async moveDisk(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/move_disk';
        return await this.helper.httpPost(url, data);
    }
    async migrate(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/migrate';
        return await this.helper.httpPost(url, data);
    }
    async monitor(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/monitor';
        return await this.helper.httpPost(url, data);
    }
    async resize(node, qemu, data) {
        const url = '/nodes/' + node + '/qemu/' + qemu + '/resize';
        return await this.helper.httpPut(url, data);
    }
    async template(node, qemu) {
        const data = {};
        const url = '/nodes/' + node + '/qemu/' + qemu + '/template';
        return await this.helper.httpPost(url, data);
    }
    
}