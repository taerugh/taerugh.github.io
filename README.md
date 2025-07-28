# taerugh.github.io

My personal website based on [al-folio](https://github.com/alshedivat/al-folio).

## Local setup using Docker

- First, install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/).
- Finally, run the following command that will pull the latest pre-built image from DockerHub and will run your website.

```bash
$ docker compose pull
$ docker compose up
```

Note that when you run it for the first time, it will download a docker image of size 400MB or so. To see the template running, open your browser and go to `http://localhost:8080`.

## Run prettier code formatting

Follow the first 2 steps in [this tutorial](https://george-gca.github.io/blog/2023/slidev_for_non_web_devs/) (Installing node version manager (nvm) and Installing Node (latest version)), then, install it using npm install prettier inside the project directory, or install it globally on your computer using npm install -g prettier. Then run:

```bash
$ npx prettier . --write
```
