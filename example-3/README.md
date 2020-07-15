# Example-3

Riffing on the simplest possible "fullstack" application.

Still just a static HTTP server that's serving a minimal frontend.

Example-3 adds a simple HTTP GET REST API that returns data for display in the front end.

You should try "diffing" Example-3 against Example-2 to see the changes.

## Setup

Open a terminal, change directory into the repo and invoke these commands:

```bash
cd example-3
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

## Live reload

When you run this example in "live reload" mode the HTTP server will automatically reload when ever you change the code:

```bash
npm run start:dev
````

Have fun with it!