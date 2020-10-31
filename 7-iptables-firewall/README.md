# IPTables and Firewall Basics

## What? Why? How?
Firewalls are essential to securing a network. 

A large portion of servers run linux and therefore rely on iptables in some fashion to handle networking. 

![Git References](images/iptables-diagram.png)

Image source: *https://sites.google.com/site/mrxpalmeiras/linux/iptables-routing*

### Firewall basics:

It's generally good practice to set the default input policy to drop to prevent unintended traffic.
To ensure the traffic that you do want comes through, you can set a rule to make established or related 
traffic accepted. The commands for this are listed below:

```
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT DROP

```

### Good to know:

When working with iptable rules, make sure the rules are run live first. If a rule locks you out of the system you can reset the machine since the rules won't 
persist. 

### Saving iptable rules:

It becomes tedious to rewrite the rules each boot so the iptables cli provides a built in command called <i>iptables-save</i> to assist in saving changes.

```
iptables-save > /etc/iptables/iptables
```