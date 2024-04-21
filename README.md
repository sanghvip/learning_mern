# learning_nextjs
A repository for recording notes while learning next js
creating backend
1. npm init - created a new node project for us


2. since we are using typescript, we have to install types packages. nodemon gives us development server
the above libs are only dev libs. This will help us improve our performance in the production by reducing the libs in our build package.

3. named vs default export: only one default export can be present but there can be multiple named export. Named exports are basically used to export mutliple utilities from the module.
[https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import](reference link)


4. we are going to use vite for developing front end. we wil be usin typescript+swc . SWC is basically a typescript and javascript compiler written in rust to provide faster compile times as compared to bable.

5. one can override styles in tailwind by adding that class name in the tailwind config file

6.interfaces in typescript - https://www.typescriptlang.org/docs/handbook/interfaces.html
