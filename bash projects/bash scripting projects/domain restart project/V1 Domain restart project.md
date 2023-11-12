I used to encounter DBAs regularly calling me up to do simple tasks like restarting a domain. Similarly, clients asking me to just restart the domain, I really got tired of it and wrote a script for it.

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

echo "On which domains do you want to perform these actions?"

read -a arrayOfDomains

# https://stackoverflow.com/a/56146307/21719190

for domain in "${arrayOfDomains[@]}"; do

    domain_action "$actionToPerform" "$domain"

    #echo "$domain"

    #https://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php

    #if [ "$actionToPerform" = "1" ]; then

    #   echo "Starting $domain"

    #  domain_action "$actionToPerform" "$domain"

    #elif [ "$actionToPerform" = "2" ]; then

    #   echo "Stopping $domain"

    #  domain_action "$actionToPerform" "$domain"

    #else

    #   [ "$actionToPerform" = "3" ]

    #  echo "Restarting $domain"

    # domain_action "$actionToPerform" "$domain"

    #fi

done
```
