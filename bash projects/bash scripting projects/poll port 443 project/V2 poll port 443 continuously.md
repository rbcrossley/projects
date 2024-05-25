```
host=www.google.com
port=443
while true; do
    current_time=$(date +%H:%M:%S)
    r=$(bash -c 'exec 3<> /dev/tcp/'$host'/'$port';echo $?' 2>/dev/null)
    if [ "$r" = "0" ]; then
        echo "[$current_time] $host $port is open" >> log_file.txt
    else
        echo "[$current_time] $host $port is closed" >> log_file.txt
    fi
done
```
# What does it do?
![](attachments/Pasted%20image%2020240131195826.png)
Directly from manpages,
```
REDIRECTION
[...]
Bash handles several filenames specially when they are used in redirections,
as described in the following table.  If the operating system on which bash
is running provides these special files, bash will use them; 
**otherwise it will emulate them internally** with the behavior described below.
[...]
              /dev/tcp/host/port
                     If host is a valid hostname or Internet address,
and port is an integer port number or service name, bash attempts
to open the corresponding TCP socket.
```
![](attachments/Pasted%20image%2020240131200225.png)

References:
https://catonmat.net/bash-one-liners-explained-part-three
# How to run this on server
Use a cronjob, don't use setsid.
