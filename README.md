# Gatsby Boilerplate
This project is based on ![Gatsby Starter](https://github.com/gatsbyjs/gatsby-starter-default).
I deleted all plugins and features that i not usually use, as *gatsby-plugin-manifest* or *gatsby-plugin-offline*.

## Project Requirements
Gatsby uses ![sharp](https://github.com/lovell/sharp) npm package to optimize images, that dependecie require *libvips* on your system to run. If you are using a Linux OS with *apt* as package manager you can install *libvips* using the following command:
```
sudo apt install libvips libvips-dev
```

Another requirement of *sharp* is have node >= 11.0
