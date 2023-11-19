```
#!/bin/bash

given_path=/home/techyman/glassfish4/glassfish/domains
for each in "$given_path"/*; do
    cd "$each"
    echo "This is log for $each domain at time $(date '+%s')" >>"$each/logs/application.log"
done
```
The problem with this is that now I needed to clear the already generated logs by V1 script for my logrotate configuration to work properly.
Here's the script for it.
```
#!/bin/bash

given_path=/home/techyman/glassfish4/glassfish/domains
for each in "$given_path"/*; do
    cd "$each/logs"
    echo $PWD
    find . -type f -exec rm -f {} \;
done
```
The crontab configuration for log vomiter is here
```
*/5 * * * *  ./log_vomitter.sh
```
