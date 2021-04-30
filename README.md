## A p5 js dekstop app boiler plate using electronjs framework including web-serial api and web-ble api support checks. 

### What is this boiler plate repo trying to do? 🤔
- [x] Wrap [p5.js](https://p5js.org/) web apps as __dekstop apps__ using [elctron.js](https://www.electronjs.org/docs/tutorial/quick-start). [ borrowed the base and edited a bit from [p5js-electron-templates](https://github.com/garciadelcastillo/p5js-electron-templates) ] 
- [x] Check latest [web-serial api](https://web.dev/serial/) support in the then desktop web app.
- [x] Check latest [web-ble api](https://web.dev/bluetooth/) support in the then desktop web app. [ we are also using another library [p5.ble.js](https://itpnyu.github.io/p5ble-website/) for this]
- [x] The idea is to start start developing fast without starting from scratch.


__Notes:__ 
- Of-course download latest p5.js core libaries in `public/libraries/` and p5.js addon libraries in `public/libraries/addons`
- Install node `electron.js` node modules using `npm install` in the home dir. (if you want you can update the `package.json` to get latest versions)
- `npm start` will start the project
- Once the p5 electron app is launched, you can do (for mac) `⌘ + ⌥ + i` to show the dev tools where you will see the necessary notifications. 
![Screenshot 2021-04-30 at 5 09 44 PM](https://user-images.githubusercontent.com/4619862/116678174-9ce33500-a9db-11eb-8f34-ddc3e1b18ad6.png)
