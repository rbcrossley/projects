- Catalina.out left uncontrolled creates a huge file. And can cause server shutdown. And since by default, it wasn't creating new log file for each day, it was really a terrible experience.
```
/opt/tomcat/apache-tomcat-9.0.83/logs/*.out
{
    su root root
    daily
    compress
    missingok
    notifempty
    copytruncate
    rotate 3
    dateext dateformat -%Y-%m-%d-%s   
}
```
This will run daily, compress the last log file, and truncates the new log's name will be same as old log's name i.e catalina.out because of copytruncate (instead of it being catalina.out.log.1 etc).
