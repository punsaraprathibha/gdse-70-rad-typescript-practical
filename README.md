1. Create a new js file called `app.js` and put a simple js function in it and call the function inside the same file.
2. Then you need to run `node app.js` command to execute the code inside `app.js` to see the expected output.
3. Then create a typescript file called `ts-app.ts` and put the same js function in it and add additional static typing feature to it.
4. However, as pure js we can't execute Typescript files directly with node as above.
5. So, you've to execute `tsc ts-app.ts` to transpile (Source to Source compilation from TS to JS) the `ts-app.ts` to `ts-app.js`.
6. Then you'll see a js file created called `ts-app.ts` and to run this js file also you need to use `node ts-app.js`