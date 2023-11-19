The problem is that we don't have EASY root access to servers. That's why being able to run logrotate without being root is very handy.

Although this is not for catalina.out, concepts apply.

1) Create a directory  /home/techyman/logrotate with two files logrotate.conf and logrotate.status
2) Put your logrotate configuration files there in logrotate.conf
```
/home/techyman/glassfish4/glassfish/domains/*/logs/*.log {
        daily
        copytruncate
        missingok
        rotate 30
        compress
        dateext dateformat -%Y-%m-%d-%s
}
```
3) Run a cron job
```
0 1 * * *  /usr/sbin/logrotate -s /home/techyman/logrotate/logrotate.status /home/techyman/logrotate/logrotate.conf
```
This runs everyday at 1 AM.
To test every 1 second, just do `* * * * *` in cron job.

# What does -s do?
![[attachments/Pasted image 20231119165711.png]]
# Explain the cron tab
![[attachments/Pasted image 20231119165828.png]]

# References:
https://www.sentia.com.au/blog/managing-log-files-on-ubuntu-servers-without-root-access
