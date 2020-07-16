# Example-2

Riffing on the simplest possible "fullstack" application.

Still just a static HTTP server that's serving a minimal frontend.

Example-2 adds suport for live reload.

You should try "diffing" Example-2 against Example-1 to see the changes.

## Setup

First have Node.js installed. Io install follow the instructions here:
https://nodejs.org/en/download/

Open a terminal, change directory into the repo and invoke these commands:

```bash
cd example-2
npm install
```

## Run it

After setup, invoke this command to start the HTTP server:

```bash
npm start
```

Now point your web browser at:
[http://localhost:3000](http://localhost:3000)


## Live reload

When you run this example in "live reload" mode the HTTP server will automatically reload when ever you change the code:

```bash
npm run start:dev
````

This is a really nice way to make a fast development process. 

Have fun playing with the code!
