# Feature Additions
case statement added, functions added for reusability. 
logs for various directories can be cleared in various time durations.
```cmd
#!/bin/bash

given_path=/home/techyman/glassfish4/glassfish/domains
excluded_folder="x"
function clear_log() {
    cd "$each"
    echo "$PWD"
    find . -mtime +"$1" -name "*.log" -exec rm -f {} \;
    #echo "$2"
    #echo "$1"
}
for each in "$given_path"/*; do
    if [ "$each" = "$given_path/$excluded_folder" ]; then
        echo "$each"
        #echo "This is x"
        #echo "Do nothing"
        continue
    else
        #echo "this is not x"
        #echo "$each"
        #case statement goes here
        case $each in
        *a)

            echo "This is a"
            clear_log 7 "$each"
            ;;
        *b)
            echo "This is b"
            clear_log 4 "$each"
            ;;
        *c)
            echo "This is c"
            clear_log 5 "$each"
            ;;
        *d)
            echo "This is d"
            clear_log 6 "$each"
            ;;
        *e)
            echo "This is e"
            clear_log 8 "$each"
            ;;
        esac
    fi
done
```