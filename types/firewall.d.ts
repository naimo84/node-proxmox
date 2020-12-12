
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
