import React from "react";

const Blogs = () => {
  return (
    <div className="bg-dark light-border text-light py-5">
      <div className="container">
        <div className="row row-cols-1 my-5 row-cols-md-2 g-4">
          <div className="col">
            <h3>Difference between javascript and node js</h3>
            <p>
              javascript is a programming language. it's run in any browser
              javascript v8 engine. Node.js is an open-source, cross-platform,
              JavaScript runtime environment that executes.Node. js is not a
              programming language. it's a runtime environment that's used to
              run JavaScript outside the browser.
            </p>
            <p>
              {" "}
              Node.js is primarily used for non-blocking, event-driven servers,
              due to its single-threaded nature. It's used for traditional web
              sites and back-end API services, but was designed with real-time,
              push-based architectures in mind. API application with both
              relational and non-relational databases.
            </p>
          </div>
          <div className="col">
            <h3>When should you use nodejs and when should you use mongodb</h3>
            <p>
              Due to the event-driven and asynchronous nature, Node.js is good
              at building real-time applications like messaging, notifications
              delivery, live streaming and collaboration tools. Node.js assigns
              I/O tasks to the internal IO threads without blocking the main
              thread.
            </p>
            <p>
              Using MongoDB can provide many benefits to a software development
              team. Its flexible schema makes it easy to evolve and store data
              that is easy for developer to work with. MongoDB is built to scale
              up quickly and supports all the main features of modern databases.
              making it a natural choice for developers, they don't need to
              think about normalizing data. MongoDB can also handle high volume
              and can scale both vertically or horizontally to accommodate large
              data loads.
            </p>
          </div>

          <div className="col">
            <h3>Differences between sql and nosql databases.</h3>
            <p>
              SQL is a relational database management system. It is a database
              management system that stores data in a table. SQL is a structured
              query language. It is a programming language that is used to
              create queries. use structured query language and have a
              predefined schema.are vertically scalable are table based.
            </p>
            <p>
              nosql is a database that stores data in a document. It is a non
              relational . nosql databases hav dynamic schemas for unstructured
              data. are horizontally scalable. are document, key-value. and
              better to understand it's data like documents or JSON.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
