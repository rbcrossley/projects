
 ```
host=www.google.com
port=443
while true; do
    current_time=$(date +%H:%M:%S) 
    r=$(bash -c 'exec 3<> /dev/tcp/'$host'/'$port';echo $?' 2>/dev/null)
    if [ "$r" = "0" ]; then
        echo "[$current_time] $host $port is open"
    else
        echo "[$current_time] $host $port is closed"
        exit 1 # To force fail result in ShellScript
    fi
    sleep 60
done
```
References:
https://unix.stackexchange.com/a/339643/588983

