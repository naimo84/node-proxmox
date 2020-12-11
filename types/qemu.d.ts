
export class
    Snapshot {





    list(node, qemu);




    get(node, qemu, snapname)




    getConfig(node, qemu, snapname)




    putConfig(node, qemu, snapname, data)



    rollback(node, qemu, snapname)




    delete(node, qemu, snapname)




    make(node, qemu, data)

}


export class Firewall {





    list(node, qemu);




    listRules(node, qemu);




    createRule(node, qemu, data);



    getRule(node, qemu, pos)




    updateRule(node, qemu, pos, data)



    deleteRule(node, qemu, pos)




    listAlias(node, qemu)




    createAlias(node, qemu, data)



    getAlias(node, qemu, name)




    updateAlias(node, qemu, name, data)



    deleteAlias(node, qemu, name)




    listIpset(node, qemu)




    createIpset(node, qemu, data)



    getIpsetContent(node, qemu, name)




    addIpToIpset(node, qemu, name, data)



    deleteIpset(node, qemu, name)




    getIpfromIpset(node, qemu, name, cidr)




    updateIpfromIpset(node, qemu, name, cidr, data)



    deleteIpfromIpset(node, qemu, name, cidr)




    getOptions(node, qemu)




    setOptions(node, qemu, data)



    getLog(node, qemu)




    getRefs(node, qemu)



}


export class Qemu {










    getStatus(node, qemu)




    get(node, qemu)




    del(node, qemu)




    getStatusCurrent(node, qemu)




    start(node, qemu)




    stop(node, qemu)




    reset(node, qemu)




    shutdown(node, qemu)




    suspend(node, qemu)




    resume(node, qemu)





    rrd(node, qemu, data)



    rrdData(node, qemu, data)



    getConfig(node, qemu)




    updateConfig(node, qemu, data)



    setConfig(node, qemu, data)



    pending(node, qemu)




    unlink(node, qemu, data)



    vncproxy(node, qemu)




    vncwebsocket(node, qemu, data)



    spiceproxy(node, qemu, data)



    sendkey(node, qemu, data)



    feature(node, qemu, data)



    clone(node, qemu, data)



    moveDisk(node, qemu, data)



    migrate(node, qemu, data)



    monitor(node, qemu, data)



    resize(node, qemu, data)



    template(node, qemu)




}
