# Designing Facebook UI using TailwindCSS

I have forgotten to commit the initial code setup, before building top navigation. Sorry

## Npm Packages Used

- tailwindcss-cli, run by using `npx`
- simple-hot-reload-server, globally installed (you can use other live server)

## Steps to setup from groundup

1. Create a project folder and cd into it
2. Create folder structure as below:

   - project-folder
     - src
       - images
       - static
       - tailwind

   by running this command:<br />
   `mkdir -p src/{tailwind,static,images} `

3. `cd` into tailwind folder. And then create tailwind config file by running this command:<br /> `npx tailwindcss-cli@latest init`
4. Edit tailwind config as in the file at the repo (extend the colors, the variant, enable dark mode using class method, purge unused css class)
5. Create a css file for custom tailwind css `tailwind.custom.css`, see the content of it at the repo
6. Because we are on development mode, then firstly we set Node environment as below: <br />
   `export NODE_ENV=development`, if we are in \*nix OS terminal<br />
   `$env:NODE_ENV="development"`, if we are in Windows OS powershell<br />
   If we are for production version of css, then change NODE_ENV to `production`
7. Build custom tailwind css as configured at tailwind config and at `tailwind.custom.css`, by running this command: <br />
   ` npx tailwindcss-cli@latest build tailwind.custom.css -c tailwind.config.js -o tailwind.css` <br />
8. Create `index.html` as at the repo (link the css for icons and custom tailwind css)
9. Run any live server you have. I use simple-hot-reload-server, then I run this command: <br />
   `hrs src` from within project folder

---

    🚀 Cheers 🚀
