# Example-4

Riffing on the simplest possible "fullstack" application.

Example-4 adds a database. Now we have a REST API that pulls data from the database to be rendered in the front end.

You should try "diffing" Example-4 against Example-3 to see the changes.

This example is more complicated. It's because you must now have a database installed to run the example code (skip to the last two sections for some potentially easier ways to run this example).

## Database setup

Please see this web page for instructions on how to install MongoDB Community Edition on your computer:
https://docs.mongodb.com/manual/installation/

## Setup

First have Node.js installed. Io install follow the instructions here:
https://nodejs.org/en/download/

Now open a terminal, change directory into the repo and invoke these commands:

```bash
cd example-4
npm install
```

## Run it

After setup, invoke this command to start the HTTP server:

```bash
npm start
```

To see the web page open:
[http://localhost:3000](http://localhost:3000)

**To see the results of the REST API open:**
[http://localhost:3000/my-rest-api](http://localhost:3000/my-rest-api)

The data that is returned from REST API and displayed in the front end has been loaded from the database.

## Live reload

When you run this example in "live reload" mode the HTTP server will automatically reload when ever you change the code:

```bash
npm run start:dev
```

## Using Docker-Compose

If you have Docker and Docker-Compose installed already you can run this example without installing Node.js or MongoDB.

Follow the instructions here if you'd like to install Docker:
https://docs.docker.com/get-docker/

Docker-Compose might be included in your Docker install, but if not you can follow these instructions to install it:
https://docs.docker.com/compose/install/

Now you can run this example without directly installing Node.js or MongoDB like this:

```bash
cd example-4
docker-compose up --build
```

Wait for the "up" process to complete.

Now vist your web page on [http://localhost:3000](http://localhost:3000).

Docker and Docker-Compose make it easy to package, share and start your development environment.

## Using Vagrant

If you are using Windowws 10 Home (like me) then you can't run Docker directly on your computer. 

If you'd like to try this example using Docker, you can but you'll have to run it under a Linux virtual machine.

If you already have Vagrant installed ([see here for install instructions[(https://www.vagrantup.com/docs/installation)]) you can can boot a VM easily and I've included a Vagrantfile in this repository to make it even easier for you.

Using Vagrant you can run this example without having to directly install Docker, Docker-Compose, Node.js or MongoDB using the following commands:

```bash
cd example-4
vagrant up
```

Wait for the virtual machine to be booted, then shell into it:

```bash
vagrant ssh
```

Now insited the VM you can run the example using Docker-Compose:

```bash
cd /vagrant
docker-compose up --build
```

Now vist your web page on [http://localhost:3000](http://localhost:3000).

Vagrant makes it easy to build scripted virtual machines and development enviroments.

