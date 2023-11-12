We will use whiptail here. Thanks to chatgpt for the code
```
#!/bin/bash

  

function domain_action() {

    case $1 in

    1)

        echo "Instruction received to start domain $2"

        /home/techyman/glassfish4/bin/asadmin start-domain "$2"

        ;;

    2)

        echo "Instruction received to stop domain $2"

        /home/techyman/glassfish4/bin/asadmin stop-domain "$2"

        ;;

    3)

        echo "Instruction received to restart domain $2"

        /home/techyman/glassfish4/bin/asadmin stop-domain "$2" && /home/techyman/glassfish4/bin/asadmin start-domain "$2"

        ;;

    esac

}

  

# Display a menu using whiptail

actionToPerform=$(whiptail --title "Domain Action Menu" --menu "Choose an action:" 15 60 4 \

    1 "Start" \

    2 "Stop" \

    3 "Restart" 3>&1 1>&2 2>&3)

  

# Check if the user pressed Cancel or Esc

if [ $? -ne 0 ]; then

    echo "Action canceled. Exiting."

    exit 1

fi

  

# Get domains using whiptail input box

whiptail --title "Domain Input" --inputbox "Enter space-separated domains:" 15 60 2>domains.txt

  

# Read domains from the file

read -a arrayOfDomains <domains.txt

  

# Loop through domains and perform the selected action

for domain in "${arrayOfDomains[@]}"; do

    domain_action "$actionToPerform" "$domain"

done

  

# Cleanup temporary file

rm domains.txt
```
