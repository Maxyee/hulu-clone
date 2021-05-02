This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

I used `yarn` package manager. so donwload or clone the repository.

```bash

yarn

yarn run dev

```

## How To Setup Nextjs with TailWindCss Project From Scratch

For the kind information. In this project, I installed everything of NextJs from scratch. I explained everything step by step below:

1. At first, we have to create NextJs project. Write the command below.

```bash

npx create-next-app hulu-clone

```

it will create the nextjs project for us

2. After that we have to navigate to our folder and remove the `package.lock.json` file.

3. Here we are going to use the package manager `yarn`. so we dont need that package.lock.json file.

4. So finally, run the command from bash `yarn` . It will add the `yarn.lock` file to our project with all dependencies.

5. Now we have to run two command for adding the `tailwindcss` for our project.

```bash

yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest

npx tailwindcss init -p

```

6. After finishing the installation of the previous two command we will see two file added to our project folder

one is `postcss.config.js` and another is `tailwind.config.js`

7. Open the file called `tailwind.config.js` and add this two line to the top.
one is for `mode` just in time (jit) and another is for `purge` for removing unnessary files from the directories.

```js

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
}


```

8. Now go to the style folder from the project directory. delete `home.style.css` file
and add the code some code in `global.css` file. 

This code is collected form the documentation website of `tailwindcss`

- [tailwindcss](https://tailwindcss.com/docs/guides/nextjs)

`global.css`

```css

@tailwind base;
@tailwind components;
@tailwind utilities;

```


9. Finally run the project and edit the `pages/index.js` file

10. project run command:


```bash

yarn run dev

```
