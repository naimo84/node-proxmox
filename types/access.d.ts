
export class Access {
     listUsers(callback);
    
     createUser(data);
    
     getUser(user);
    
     updateUser(user, data);
    
     deleteUser(user);
    
     listGroups(callback);
    
     createGroup(data);
    
     getGroup(group);
    
     updateGroup(group, data);
    
     deleteGroup(group, data);
    
     listRoles(callback);
    
     createRole(data);
    
     getRole(role);
    
     updateRole(role, data);
    
     deleteRole(role);
    
     listDomains(callback);
    
     createDomain(data);
    
     getDomain(domain);
    
     updateDomain(domain, data);
    
     deleteDomain(domain);
    
     getAcl(callback);
    
     updateAcl(data);
    
     getTicket(callback);
    
     postTicket(data);
    
     password(data);
    
}