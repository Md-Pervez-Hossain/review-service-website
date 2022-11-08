import React from "react";

const Blog = () => {
  return (
    <div className="md:w-9/12 mx-auto my-16 p-4">
      <div className="bg-gray-100 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-5">
          Difference between SQL and NoSQL ?
        </h2>
        <p>
          SQL databases are efficient at processing queries and joining data
          across tables, making it easier to perform complex queries against
          structured data, including ad hoc requests. NoSQL databases lack
          consistency across products and typically require more work to query
          data, particular as query complexity increases.
        </p>
      </div>
      <div className="bg-gray-100 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-5">
          What is JWT, and how does it work ?
        </h2>
        <p>
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object. It is
          compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP)
        </p>
        <br />
        <p>
          JWTs are digitally signed using either a secret (HMAC) or a
          public/private key pair (RSA or ECDSA) which safeguards them from
          being modified by the client or an attacker. Stored only on the
          client: You generate JWTs on the server and send them to the client.
          The client then submits the JWT with every request.
        </p>
      </div>
      <div className="bg-gray-100 p-5 mb-5">
        <h2 className="text-2xl font-bold ">
          Difference between JavaScript and Node.js
        </h2>
        <p>
          JavaScript is a proper high-level programming language used to create
          web scripts whereas Node.js is a run time environment built on
          google's v8 engine.
        </p>
        <br />
        <p>
          JavaScript is executed in the browser whereas using Node.js gives us
          the ability to execute JavaScript outside the browser.
        </p>
        <br />
        <p>
          JavaScript can manipulate DOM or add HTML within whereas Node.js
          doesn't have the capability to add HTML.
        </p>
        <br />
        <p>
          JavaScript is mainly used to create front end web applications or
          develop client-side whereas Node.js is used on the back end
          development that is server-side development
        </p>
        <br />
        <p>
          JavaScript follows the standard of JavaScript when writing programs
          whereas Node.js is written in C++ while using the v8 engine, it runs
          JavaScript outside the browser.
        </p>
        <br />
        <p>
          JavaScript requires any running environment as it can execute on any
          engine such as Firefox's spider monkey, v8 engine of google chrome,
          JavaScript core of Safari whereas Node.js runs only on the v8 engine
          of google chrome.
        </p>
        <br />
      </div>
      <div className="bg-gray-100 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-5">
          How NodeJS handle multiple client requests ?
        </h2>
        <p>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blog;
