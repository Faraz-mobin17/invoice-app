#!/bin/bash 
# bash script to reanme .js file to .ts file in currect directory
for file in *.js; do
    mv "$file" "${file%.js}.ts"
done
# below command will rename in all the directory where the reanme.sh file is stored
# find . -type f -name "*.js" -exec bash -c 'mv "$1" "${1%.js}.ts"' _ {} \;
