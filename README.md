# htammen.github.io

## Developer info
- You need to have node.js installed to run the application with a local
node.js server. I currently (10/21) use v14.16.1 and npm v7.24.1 and it works
fine. In the past I also used node v10, v8 and v6 without problems.

After you cloned the repo from github you should run `npm install` to install
all node dependencies into your local working directory

## PWA details
[ui5-service-worker-sample](https://github.com/SAP-samples/ui5-service-worker-sample)

### Run the app locally
Run the application by entering `npm start` in the terminal

### Build the application

#### Build
Build the application by entering `npm run build` into the command line. Build
means that a `dist` folder is created wich contains the runtime code.
This is referenced by the ./index.html file.

### Deploy application
To deploy the application follow these steps
- update version number in service-worker (it's prbably the manifest.json now)
- execute `npm run build`
- commit your changes to git
- run `npm version xxx` (see npm version --help for details),
e.g. `npm version patch`, `npm version minor`, `npm version major`
- push your changes to the remote repository (origin/master) at github.com
