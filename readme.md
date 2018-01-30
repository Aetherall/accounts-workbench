# Accounts-js Workbench

*Dev workspace for Accounts-js*

* Express Server Hot-Reload
* SourceMaps
* VSCode Debugger Configuration
* Accounts-js as git submodule


To use :


clone the repo :
```
git clone https://github.com/Aetherall/accounts-workbench.git
```

change to the created directory :
``` 
cd accounts-workbench 
```

Install dependencies :
```
yarn
```

Init the accounts submodule :
```
git submodule init accounts
```

Change to accounts submodule :
```
cd accounts
```

Install dependencies :
```
yarn
```

Bootstrap the monorepo :
```
lerna bootstrap
```

Link the monorepo packages :
```
yarn link:global
```

Start watching the packages :
```
yarn start
```

### Open a new terminal in the accounts-workbench directory

Link accounts packages in this directory :
```
sh ./link.sh
```



### Start the app

* Via VSCode debugger configuration ( sourcemaps, breackpoints, etc... )

* Via node :
```
yarn start
```


