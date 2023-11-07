# Feature Additions
Array of  excluded domains.

```cmd
#!/bin/bash

given_path=/home/techyman/glassfish4/glassfish/domains
excluded_folders=("x" "a" "b")

function clear_log() {
    cd "$1"
    echo "$PWD"
    find . -mtime +"$2" -name "*.log" -exec rm -f {} \;
}

for each in "$given_path"/*; do
    is_excluded=false

    for excluded_folder in ${excluded_folders[@]}; do
        if [ "$each" = "$given_path/$excluded_folder" ]; then
            echo "Excluded: $each"
            is_excluded=true
            break
        fi
    done

    if [ "$is_excluded" = true ]; then
        continue
    else
        case $each in
        *a)
            echo "This is a"
            clear_log "$each" 7
            ;;
        *b)
            echo "This is b"
            clear_log "$each" 4
            ;;
        *c)
            echo "This is c"
            clear_log "$each" 5
            ;;
        *d)
            echo "This is d"
            clear_log "$each" 6
            ;;
        *e)
            echo "This is e"
            clear_log "$each" 8
            ;;
        esac
    fi
done
```
The modifications of this script is a blessing of chatgpt.