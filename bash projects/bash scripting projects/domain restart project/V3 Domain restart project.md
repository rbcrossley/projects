```
function domain_action() {
    case $1 in

    1)
        echo "instruction received to start domain $2"
        /home/techyman/glassfish4/bin/asadmin start-domain "$2"
        ;;

    2)
        echo "instruction received to stop domain $2"
        /home/techyman/glassfish4/bin/asadmin stop-domain "$2"
        ;;

    3)
        echo "instruction received to restart domain $2"
        /home/techyman/glassfish4/bin/asadmin stop-domain "$2" && /home/techyman/glassfish4/bin/asadmin start-domain "$2"
        ;;
    esac

}
echo "What action do you want to perform? (1 for Start, 2 for Stop, 3 for Restart)"
read actionToPerform
echo "The name of the domains are"
ls /home/techyman/glassfish4/glassfish/domains
echo "On which domains do you want to perform these actions?"
read -a arrayOfDomains
# https://stackoverflow.com/a/56146307/21719190
for domain in "${arrayOfDomains[@]}"; do
    domain_action "$actionToPerform" "$domain"
done
```


