
export class openvz {
    get; post; del; put;
    constructor(get, post, del, put) {
        this.get = get;
        this.post = post;
        this.del = del;
        this.put = put;
    }

    createOpenvzContainer(node, data, callback) {
        const url = '/nodes/' + node + '/openvz'
        this.post(url, data, callback);
    }
    mountOpenvzPrivate(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/status/mount';
        this.post(url, data, callback);
    }
    shutdownOpenvzContainer(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/status/shutdown';
        this.post(url, data, callback);
    }
    startOpenvzContainer(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/status/start';
        this.post(url, data, callback);
    }
    stopOpenvzContainer(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/status/stop';
        this.post(url, data, callback);
    }
    unmountOpenvzContainer(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/status/unmount';
        this.post(url, data, callback);
    }
    migrateOpenvzContainer(node, vmid, target, callback) {
        const data = { 'target': target };
        const url = '/nodes/' + node + '/openvz/' + vmid + '/migrate';
        this.post(url, data, callback);
    }
    getContainerIndex(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid;
        this.get(url, data, callback);
    }
    getContainerStatus(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + node + '/status/current';
        this.get(url, data, callback);
    }
    getContainerBeans(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/status/ubc';
        this.get(url, data, callback);
    }
    getContainerConfig(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/config';
        this.get(url, data, callback);
    }
    getContainerInitLog(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/initlog';
        this.get(url, data, callback);
    }
    getContainerRRD(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/rrd';
        this.get(url, data, callback);
    }
    getContainerRRDData(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid + '/rrddata';
        this.get(url, data, callback);
    }
    deleteOpenvzContainer(node, vmid, callback) {
        const data = {};
        const url = '/nodes/' + node + '/openvz/' + vmid;
        this.del(url, data, callback);
    }
    setOpenvzContainerOptions(node, vmid, data, callback) {
        const url = '/nodes/' + node + '/openvz/' + vmid + '/config';
        this.put(url, data, callback);
    }
}

//  //vm functions
//  class qemu {
//    getStatus(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/status/';
//      get(url, data, callback);
//    }
//    get(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu;
//      get(url, data, callback);
//    }
//    del(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu;
//      del(url, data, callback);
//    }
//    getStatusCurrent(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/status/current'
//      get(url, data, callback);
//    }
//    start(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/status/start';
//      post(url, data, callback);
//    }
//    stop(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/status/stop';
//      post(url, data, callback);
//    }
//    reset(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/status/reset';
//      post(url, data, callback);
//    }
//    shutdown(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/status/shutdown';
//      post(url, data, callback);
//    }
//    suspend(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/status/suspend';
//      post(url, data, callback);
//    }
//    resume(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/status/resume';
//      post(url, data, callback);
//    }
//    //snapshot functions

//    rrd(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/rrd';
//      get(url, data, callback);
//    }
//    rrdData(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/rrddata';
//      get(url, data, callback);
//    }
//    getConfig(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/config';
//      get(url, data, callback);
//    }
//    updateConfig(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/config';
//      put(url, data, callback);
//    }
//    setConfig(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/config';
//      post(url, data, callback);
//    }
//    pending(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/pending';
//      get(url, data, callback);
//    }
//    unlink(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/unlink';
//      put(url, data, callback);
//    }
//    vncproxy(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/vncproxy';
//      post(url, data, callback);
//    }
//    vncwebsocket(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/vncwebsocket';
//      get(url, data, callback);
//    }
//    spiceproxy(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/spiceproxy';
//      post(url, data, callback);
//    }
//    sendkey(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/sendkey';
//      put(url, data, callback);
//    }
//    feature(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/feature';
//      get(url, data, callback);
//    }
//    clone(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/clone';
//      post(url, data, callback);
//    }
//    moveDisk(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/move_disk';
//      post(url, data, callback);
//    }
//    migrate(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/migrate';
//      post(url, data, callback);
//    }
//    monitor(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/monitor';
//      post(url, data, callback);
//    }
//    resize(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/resize';
//      put(url, data, callback);
//    }
//    template(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/template';
//      post(url, data, callback);
//    }


//  }

//  class snapshot {
//   list(node, qemu, callback) {
//     const data = {};
//     const url = '/nodes/' + node + '/qemu/' + qemu + '/snapshot';
//     get(url, data, callback);
//   }
//   get(node, qemu, snapname, callback) {
//     const data = {};
//     const url = '/nodes/' + node + '/qemu/' + qemu + '/snapshot/' + snapname;
//     get(url, data, callback);
//   }
//   getConfig(node, qemu, snapname, callback) {
//     const data = {};
//     const url = '/nodes/' + node + '/qemu/' + qemu + '/snapshot/' + snapname + '/config';
//     get(url, data, callback);
//   }
//   putConfig(node, qemu, snapname, data, callback) {
//     const url = '/nodes/' + node + '/qemu/' + qemu + '/snapshot/' + snapname + '/config';
//     put(url, data, callback);
//   }
//   rollback(node, qemu, snapname, callback) {
//     const data = {};
//     const url = '/nodes/' + node + '/qemu/' + qemu + '/snapshot/' + snapname + '/rollback';
//     post(url, data, callback);
//   }
//   delete(node, qemu, snapname, callback) {
//     const data = {};
//     const url = '/nodes/' + node + '/qemu/' + qemu + '/snapshot/' + snapname;
//     del(url, data, callback);
//   }
//   make(node, qemu, data, callback) {
//     const url = '/nodes/' + node + '/qemu/' + qemu + '/snapshot';
//     post(url, data, callback);
//   }
// }

//  //firewall functions
//  class firewall {
//    list(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall';
//      get(url, data, callback);
//    }
//    listRules(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/rules';
//      get(url, data, callback);
//    }
//    createRule(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/rules';
//      post(url, data, callback);
//    }
//    getRule(node, qemu, pos, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/rules/' + pos;
//      get(url, data, callback);
//    }
//    updateRule(node, qemu, pos, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/rules/' + pos;
//      put(url, data, callback);
//    }
//    deleteRule(node, qemu, pos, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/rules/' + pos;
//      del(url, data, callback);
//    }
//    listAlias(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/aliases';
//      get(url, data, callback);
//    }
//    createAlias(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/aliases';
//      post(url, data, callback);
//    }
//    getAlias(node, qemu, name, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/aliases/' + name;
//      get(url, data, callback);
//    }
//    updateAlias(node, qemu, name, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/aliases/' + name;
//      put(url, data, callback);
//    }
//    deleteAlias(node, qemu, name, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/aliases/' + name;
//      del(url, data, callback);
//    }
//    listIpset(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset';
//      get(url, data, callback);
//    }
//    createIpset(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset';
//      post(url, data, callback);
//    }
//    getIpsetContent(node, qemu, name, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset/' + name;
//      get(url, data, callback);
//    }
//    addIpToIpset(node, qemu, name, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset/' + name;
//      post(url, data, callback);
//    }
//    deleteIpset(node, qemu, name, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset/' + name;
//      del(url, data, callback);
//    }
//    getIpfromIpset(node, qemu, name, cidr, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset/' + name + '/' + cidr;
//      get(url, data, callback);
//    }
//    updateIpfromIpset(node, qemu, name, cidr, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset/' + name + '/' + cidr;
//      put(url, data, callback);
//    }
//    deleteIpfromIpset(node, qemu, name, cidr, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/ipset/' + name + '/' + cidr;
//      del(url, data, callback);
//    }
//    getOptions(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/options';
//      get(url, data, callback);
//    }
//    setOptions(node, qemu, data, callback) {
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/options';
//      put(url, data, callback);
//    }
//    getLog(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/log';
//      get(url, data, callback);
//    }
//    getRefs(node, qemu, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/qemu/' + qemu + '/firewall/refs';
//      get(url, data, callback);
//    }
//  }

//  class network {
//    list(node, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/network';
//      get(url, data, callback);
//    }
//    create(node, data, callback) {
//      const url = '/nodes/' + node + '/network';
//      post(url, data, callback);
//    }
//    get(node, iface, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/network/' + iface;
//      get(url, data, callback);
//    }
//    update(node, iface, data, callback) {
//      const url = '/nodes/' + node + '/network/' + iface;
//      put(url, data, callback);
//    }
//    deleteIface(node, iface, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/network/' + iface;
//      del(url, data, callback);
//    }
//    delete(node, callback) {
//      const data = {};
//      const url = '/nodes/' + node + '/network';
//      del(url, data, callback);
//    }
//  }
//  //access functions
//  class access {
//    listUsers(callback) {
//      const data = {};
//      const url = '/access/users';
//      get(url, data, callback);
//    }
//    createUser(data, callback) {
//      const url = '/access/users';
//      post(url, data, callback);
//    }
//    getUser(user, callback) {
//      const data = {};
//      const url = '/access/users/' + user;
//      get(url, data, callback);
//    }
//    updateUser(user, data, callback) {
//      const url = '/access/users/' + user;
//      put(url, data, callback);
//    }
//    deleteUser(user, callback) {
//      const data = {};
//      const url = '/access/users/' + user;
//      del(url, data, callback);
//    }
//    listGroups(callback) {
//      const data = {};
//      const url = '/access/groups';
//      get(url, data, callback);
//    }
//    createGroup(data, callback) {
//      const url = '/access/groups';
//      post(url, data, callback);
//    }
//    getGroup(group, callback) {
//      const data = {};
//      const url = '/access/groups/' + group;
//      get(url, data, callback);
//    }
//    updateGroup(group, data, callback) {
//      const url = '/access/groups/' + group;
//      put(url, data, callback);
//    }
//    deleteGroup(group, data, callback) {
//      const url = '/access/groups/' + group;
//      del(url, data, callback);
//    }
//    listRoles(callback) {
//      const data = {};
//      const url = '/access/roles';
//      get(url, data, callback);
//    }
//    createRole(data, callback) {
//      const url = '/access/roles';
//      post(url, data, callback);
//    }
//    getRole(role, callback) {
//      const data = {};
//      const url = '/access/roles/' + role;
//      get(url, data, callback);
//    }
//    updateRole(role, data, callback) {
//      const url = '/access/roles/' + role;
//      put(url, data, callback);
//    }
//    deleteRole(role, callback) {
//      const data = {};
//      const url = '/access/roles/' + role;
//      del(url, data, callback);
//    }
//    listDomains(callback) {
//      const data = {};
//      const url = '/access/domains';
//      get(url, data, callback);
//    }
//    createDomain(data, callback) {
//      const url = '/access/domains';
//      post(url, data, callback);
//    }
//    getDomain(domain, callback) {
//      const data = {};
//      const url = '/access/domains/' + domain;
//      get(url, data, callback);
//    }
//    updateDomain(domain, data, callback) {
//      const url = '/access/domains/' + domain;
//      put(url, data, callback);
//    }
//    deleteDomain(domain, callback) {
//      const data = {};
//      const url = '/access/domains/' + domain;
//      del(url, data, callback);
//    }
//    getAcl(callback) {
//      const data = {};
//      const url = '/access/acl';
//      get(url, data, callback);
//    }
//    updateAcl(data, callback) {
//      const url = '/access/acl';
//      put(url, data, callback);
//    }
//    getTicket(callback) {
//      const data = {};
//      const url = '/access/ticket';
//      get(url, data, callback);
//    }
//    postTicket(data, callback) {
//      const url = '/access/ticket';
//      post(url, data, callback);
//    }
//    password(data, callback) {
//      const url = '/access/password';
//      put(url, data, callback);
//    }
//  }
//  //pool functions
//  class pools {
//    list(callback) {
//      const data = {};
//      const url = '/pools';
//      get(url, data, callback);
//    }
//    create(data, callback) {
//      const url = '/pools';
//      post(url, data, callback);
//    }
//    get(pool, callback) {
//      const data = {};
//      const url = '/pools/' + pool;
//      get(url, data, callback);
//    }
//    update(pool, data, callback) {
//      const url = '/pools/' + pool;
//      put(url, data, callback);
//    }
//    delete(pool, callback) {
//      const data = {};
//      const url = '/pools/' + pool;
//      del(url, data, callback);
//    }
//  }
//  //storage functions
//  class storage {
//    list(callback) {
//      const data = {};
//      const url = '/storage';
//      get(url, data, callback);
//    }
//    create(data, callback) {
//      const url = '/storage';
//      post(url, data, callback);
//    }
//    get(storage, callback) {
//      const data = {};
//      const url = '/storage/' + storage;
//      get(url, data, callback);
//    }
//    update(storage, data, callback) {
//      const url = '/storage/' + storage;
//      put(url, data, callback);
//    }
//    delete(storage, callback) {
//      const data = {};
//      const url = '/storage/' + storage;
//      del(url, data, callback);
//    }

//  }