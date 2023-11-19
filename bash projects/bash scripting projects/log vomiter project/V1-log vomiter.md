This vomits logs like this.

```
#!/bin/bash

given_path=/home/techyman/glassfish4/glassfish/domains

for each in "$given_path"/*; do
    cd "$each"

    echo "This is log for $each domain at time $(date '+%s')" >"$each/logs/application.log_$(date '+%Y-%m-%d')_$(date '+%s')"

done
```
The problem with this is that I was creating multiple files which didn't exactly replicate the real life scenario that I wanted to test to use logrotate, so improvements will be done in V2.
