ble = 32, 
-->          mtu = <unset>, 
-->          portgroup = <unset>, 
-->          pnic = <unset>, 
-->          spec = (vim.host.VirtualSwitch.Specification) {
-->             numPorts = 32, 
-->             bridge = (vim.host.VirtualSwitch.Bridge) null, 
-->             policy = (vim.host.NetworkPolicy) null, 
-->             mtu = <unset>
-->          }
-->       }, 
-->       (vim.host.VirtualSwitch) {
-->          name = "vmnet17", 
-->          key = "vim.host.VirtualSwitch-vmnet17", 
-->          numPorts = 32, 
-->          numPortsAvailable = 32, 
-->          mtu = <unset>, 
-->          portgroup = <unset>, 
-->          pnic = <unset>, 
-->          spec = (vim.host.VirtualSwitch.Specification) {
-->             numPorts = 32, 
-->             bridge = (vim.host.VirtualSwitch.Bridge) null, 
-->             policy = (vim.host.NetworkPolicy) null, 
-->             mtu = <unset>
-->          }
-->       }, 
-->       (vim.host.VirtualSwitch) {
-->          name = "vmnet18", 
-->          key = "vim.host.VirtualSwitch-vmnet18", 
-->          numPorts = 32, 
-->          numPortsAvailable = 32, 
-->          mtu = <unset>, 
-->          portgroup = <unset>, 
-->          pnic = <unset>, 
-->          spec = (vim.host.VirtualSwitch.Specification) {
-->             numPorts = 32, 
-->             bridge = (vim.host.VirtualSwitch.Bridge) null, 
-->             policy = (vim.host.NetworkPolicy) null, 
-->             mtu = <unset>
-->          }
-->       }, 
-->       (vim.host.VirtualSwitch) {
-->          name = "vmnet19", 
-->          key = "vim.host.VirtualSwitch-vmnet19", 
-->          numPorts = 32, 
-->          numPortsAvailable = 32, 
-->          mtu = <unset>, 
-->          portgroup = <unset>, 
-->          pnic = <unset>, 
-->          spec = (vim.host.VirtualSwitch.Specification) {
-->             numPorts = 32, 
-->             bridge = (vim.host.VirtualSwitch.Bridge) null, 
-->             policy = (vim.host.NetworkPolicy) null, 
-->             mtu = <unset>
-->          }
-->       }
-->    ], 
-->    proxySwitch = <unset>, 
-->    portgroup = (vim.host.PortGroup) [
-->       (vim.host.PortGroup) {
-->          key = "vim.host.portgroup-Bridged", 
-->          port = <unset>, 
-->          vswitch = <vim.host.VirtualSwitch:vim.host.VirtualSwitch-vmnet0>, 
-->          computedPolicy = (vim.host.NetworkPolicy) {
-->             security = (vim.host.NetworkPolicy.SecurityPolicy) null, 
-->             nicTeaming = (vim.host.NetworkPolicy.NicTeamingPolicy) null, 
-->             offloadPolicy = (vim.host.NetOffloadCapabilities) null, 
-->             shapingPolicy = (vim.host.NetworkPolicy.TrafficShapingPolicy) null
-->          }, 
-->          spec = (vim.host.PortGroup.Specification) {
-->             name = "Bridged", 
-->             vlanId = 0, 
-->             vswitchName = "vmnet0", 
-->             policy = (vim.host.NetworkPolicy) {
-->                security = (vim.host.NetworkPolicy.SecurityPolicy) null, 
-->                nicTeaming = (vim.host.NetworkPolicy.NicTeamingPolicy) null, 
-->                offloadPolicy = (vim.host.NetOffloadCapabilities) null, 
-->                shapingPolicy = (vim.host.NetworkPolicy.TrafficShapingPolicy) null
-->             }
-->          }
-->       }, 
-->       (vim.host.PortGroup) {
-->          key = "vim.host.portgroup-HostOnly", 
-->          port = <unset>, 
-->          vswitch = <vim.host.Virtu