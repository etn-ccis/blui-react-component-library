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

echo -en "${BLUE}Creating new folder in node_modules...${NC}"
rm -rf "./demos/showcase/node_modules/.cache"
rm -rf "./demos/showcase/node_modules/@brightlayer-ui/react-components"
mkdir -p "./demos/showcase/node_modules/@brightlayer-ui/react-components"
# rm -rf ./demos/storybook/node_modules/@brightlayer-ui/react-components
# mkdir -p ./demos/storybook/node_modules/@brightlayer-ui/react-components
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying build output into node_modules...${NC}";
cp -r ./components/package.json ./demos/showcase/node_modules/@brightlayer-ui/react-components/package.json
cp -r ./dist/. ./demos/showcase/node_modules/@brightlayer-ui/react-components
# cp -r ./components/package.json ./demos/storybook/node_modules/@brightlayer-ui/react-components/package.json
# cp -r ./dist/. ./demos/storybook/node_modules/@brightlayer-ui/react-components
echo -e "${GREEN}Done${NC}"

echo -en "\r\n${BLUE}Linking Components: ${NC}"
if [ ! -f ./demos/showcase/node_modules/@brightlayer-ui/react-components/package.json ]; then echo -e "${BRED}Not Linked${NC}" && exit 1; fi
# if [ ! -f ./demos/storybook/node_modules/@brightlayer-ui/react-components/package.json ]; then echo -e "${BRED}Not Linked${NC}" && exit 1; fi
if [ ! -s ./demos/showcase/node_modules/@brightlayer-ui/react-components ];
    then
        if [ ! -f ./demos/showcase/node_modules/@brightlayer-ui/react-components/index.js ];
        then echo -e "${BRED}Not Linked${NC}" && exit 1;
        fi;
fi

echo -en "${BLUE}Creating new folder in node_modules of react-dev...${NC}"
rm -rf "./docs/react-dev/node_modules/.cache"
rm -rf "./docs/react-dev/node_modules/@brightlayer-ui/react-components"
mkdir -p "./docs/react-dev/node_modules/@brightlayer-ui/react-components"
# rm -rf ./demos/storybook/node_modules/@brightlayer-ui/react-components
# mkdir -p ./demos/storybook/node_modules/@brightlayer-ui/react-components
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying build output into node_modules...${NC}";
cp -r ./components/package.json ./docs/react-dev/node_modules/@brightlayer-ui/react-components/package.json
cp -r ./dist/. ./docs/react-dev/node_modules/@brightlayer-ui/react-components
# cp -r ./components/package.json ./demos/storybook/node_modules/@brightlayer-ui/react-components/package.json
# cp -r ./dist/. ./demos/storybook/node_modules/@brightlayer-ui/react-components
echo -e "${GREEN}Done${NC}"

echo -en "\r\n${BLUE}Linking Components: ${NC}"
if [ ! -f ./docs/react-dev/node_modules/@brightlayer-ui/react-components/package.json ]; then echo -e "${BRED}Not Linked${NC}" && exit 1; fi
# if [ ! -f ./demos/storybook/node_modules/@brightlayer-ui/react-components/package.json ]; then echo -e "${BRED}Not Linked${NC}" && exit 1; fi
if [ ! -s ./docs/react-dev/node_modules/@brightlayer-ui/react-components ];
    then
        if [ ! -f ./docs/react-dev/node_modules/@brightlayer-ui/react-components/index.js ];
        then echo -e "${BRED}Not Linked${NC}" && exit 1;
        fi;
fi
# if [ ! -s ./demos/storybook/node_modules/@brightlayer-ui/react-components ];
#     then
#         if [ ! -f ./demos/storybook/node_modules/@brightlayer-ui/react-components/index.js ];
#         then echo -e "${BRED}Not Linked${NC}" && exit 1;
#         fi;
# fi
echo -e "${GRAY}Complete${NC}\r\n"
