#!/bin/bash
BLUE='\033[0;34m'
BBLUE='\033[1;34m' #BOLD
PURPLE='\033[0;35m'
RED='\033[0;31m'
BRED='\033[1;31m' #BOLD
GREEN='\033[0;32m'
BGREEN='\033[1;32m' #BOLD
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo -e "${BLUE}Building components...${NC}"
cd ../components
yarn build
cd ..

echo -en "${BLUE}Creating new folder in node_modules of showcase...${NC}"
rm -rf "./demos/showcase/node_modules/.cache"
rm -rf "./demos/showcase/node_modules/@brightlayer-ui/react-components"
mkdir -p "./demos/showcase/node_modules/@brightlayer-ui/react-components"
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying build output into node_modules of showcase...${NC}";
cp -r ./components/package.json ./demos/showcase/node_modules/@brightlayer-ui/react-components/package.json
cp -r ./dist/. ./demos/showcase/node_modules/@brightlayer-ui/react-components
echo -e "${GREEN}Done${NC}"

echo -en "\r\n${BLUE}Linking Components: ${NC}"
if [ ! -f ./demos/showcase/node_modules/@brightlayer-ui/react-components/package.json ]; then echo -e "${BRED}Not Linked${NC}" && exit 1; fi
if [ ! -s ./demos/showcase/node_modules/@brightlayer-ui/react-components ];
    then
        if [ ! -f ./demos/showcase/node_modules/@brightlayer-ui/react-components/index.js ];
        then echo -e "${BRED}Not Linked${NC}" && exit 1;
        fi;
fi

echo -en "${BLUE}Creating new folder in node_modules of react-dev...${NC}"
rm -rf "./docs/node_modules/.cache"
rm -rf "./docs/node_modules/@brightlayer-ui/react-components"
mkdir -p "./docs/node_modules/@brightlayer-ui/react-components"
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying build output into node_modules or react-dev...${NC}";
cp -r ./components/package.json ./docs/node_modules/@brightlayer-ui/react-components/package.json
cp -r ./dist/. ./docs/node_modules/@brightlayer-ui/react-components
echo -e "${GREEN}Done${NC}"

echo -en "\r\n${BLUE}Linking Components: ${NC}"
if [ ! -f ./docs/node_modules/@brightlayer-ui/react-components/package.json ]; then echo -e "${BRED}Not Linked${NC}" && exit 1; fi
if [ ! -s ./docs/node_modules/@brightlayer-ui/react-components ];
    then
        if [ ! -f ./docs/node_modules/@brightlayer-ui/react-components/index.js ];
        then echo -e "${BRED}Not Linked${NC}" && exit 1;
        fi;
fi

echo -e "${GRAY}Complete${NC}\r\n"
