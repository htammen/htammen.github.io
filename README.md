# htammen.github.io

## Developer info
- You need to have node.js installed to run the application with a local
node.js server. I currently (02/20) use v10.15.0 and npm v6.13.7 and it works
fine. In the past I also used node v8 and v6 without problems.

After you cloned the repo from github you should run `npm install` to install
all node dependencies into your local working directory

### Run the app locally
Run the application by entering `npm start` in the terminal

### Build the application
#### Prebuild
Before you build a new version you should update the version of the service-worker.
Otherwise the users browser doesn't get a notice of the new version and will
allways display the old one out of the application cache.  
This is done in the first line of the file: `let CACHE_NAME = "ui5-consultantprofile-pwa-v1.1.5";`

#### Build
Build the application by entering `npm run build` into the command line. Build
means that a file named `Component-preload.js` is created 
which helps loading the application faster.

### Deploy application
To deploy the application follow the following steps
- update version number in service-worker (s. above) and in package.json
- execute `npm run build`
- commit your changes to git
- run `npm version xxx` (see npm version --help for details),
e.g. `npm version patch`, `npm version minor`, `npm version major`
- push your changes to the remote repository (origin/master) at github.com
