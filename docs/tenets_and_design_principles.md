# Tenets and Design Principles

## Tenets

### Focus on the what and not the how

Thanks to Godspeed's out of box integrations, abstractions and command line assistance, developers can focus on implementing features rather than scaffolding, wiring up integrations, writing boilerplate code, doing repetitive tasks, setting up CI/CD, [telemetry](telemetry/overview.md) etc. 

### Decoupled Architecture
The framework emphasizes and facilitates the adoption of [decoupled architecture](https://youtu.be/tVWDbVPsLFQ?si=tSILBF1LSoDmCn4Q), a practice that brings notable advantages.

For example, decoupled [event sources](event_sources/overview.md) and [datasources](data_sources/overview.md) mean that replacing HTTP server, message bus, databases, cache systems, HTTP client etc. should require minimum to no changes in the project. Even switching between languages, like from Nodejs to Java, should require change in business logic only, leaving the abstracted event definitions, database models, API calls and business logic untouched.

### Standards driven
All projects of an organization should follow standardized and systematic implementation for ensuring maintainability and easy adoption by new developers.
Godspeed is called a meta-framework, or a framework of frameworks, because it unifies the way in which microservices are developed across the organization, even with varying languages and frameworks like Nodejs, BunJS, Java Springboot (coming soon), Golang/Python (coming in 2024) etc., via its standardized abstractions & scaffolding. 

Further the standardization includes established industry standards into system design, such as [OpenTelemetry](telemetry/overview.md) for observability, Swagger specifications for API and event schema, and [Prisma](data_sources/datasource_plugins#1-prisma-as-datasource) for database model definition.

---



In order to serve the [Goals](/docs/introduction#aims) and [Tenets](/docs/introduction#tenets) of the framework, here are the design principles we have followed.

## Design Principles

### Three fundamental abstractions
Every microservice in the Godspeed framework has three fundamental abstractions which encompass the functionality of any microservice in general.

- **[Event-sources](event_sources/overview.md):** In the Godspeed framework, Event Sources serve as a mechanism for defining the primary entry or initiation points of an application. Developers can use [pre-built](event_sources/event_source_plugins.md) event source types or create their [own plugins](event_sources/create_your_event_source.md). For instance, you can opt for an ['Express'](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/express-as-http#godspeed-express-plugin) type of Event Source to expose your microservice through REST APIs, ['Kafka'](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/kafka-as-datasource-as-eventsource#godspeed-plugin-kafka-as-datasource-as-eventsource) message bus event source, a 'Salesforce' Event Source, or you may choose a ['cron'](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/cron-as-eventsource#godspeed-plugin-cron-as-eventsource) type Event Source to schedule recurring calls to specific workflows. This level of configurability empowers developers to finely tune the behavior of their application according to their requirements.

  - **[Events](events/overview.md):** Events trigger workflows. Events are of two types: sync (http: REST, gRpc, Graphql) or async(message bus, socket, cron) Events are generated by event sources like REST endpoints, gRPC, message bus, webhooks, websockets, S3, and more...

- **[Functions or Workflows](workflows/overview.md):** Workflows are triggered by events. They not only perform business logic but also provide orchestration and federation over datasources. They will use datasources to store or retrieve data, join across various datasources, transform data, emit events and send responses. The framework provides two mechanisms for writing workflows - YAML DSL or native language like JS, TS or Java. For simple workflows, the framework provides a [YAML DSL](workflows/yaml_dsl_functions.md) with some [inbuilt functions](workflows/inbuilt_workflows.md) and [inline scripting](workflows/inbuilt_workflows#comgsreturn) in JS/CoffeeScript/Groovy. This saves boilerplate and lines of code where we mainly query other datasources with authz, caching, retries, token refresh, custom telemetry etc. YAML DSL is useful when business logic is simple. If YAML does not suffice for any particular case, developers can author JS/TS workflows alongside YAML workflows. Workflows can invoke sub-workflows written in YAML DSL or [native language](workflows/native_language_functions.md). Coming in future: Support for Java.

- **[Datasources](data_sources/overview.md):** Datasources are locations where data can be stored or read from. Developers can use [pre-built](data_sources/datasource_plugins.md) datasource types or create their [custom plugin](data_sources/create_your_data_source). For example API datasource (another microservice or third party), datastores (RDBMS, document, key-value), file system, S3 storage, message bus, cache etc. A microservice can use multiple datasources. 

### Schema driven development

The event schema should serve as single source of truth and binding contract between teams integrating microservices or frontend and backend. This allows them to work in parallel, in a decoupled manner, and enhances team efficiency. At Godspeed, this serves as a fundamental pillar of our design. The database schema written in Prisma format generates the CRUD API schema and also the CRUD workflows. Further, the schema of all other kind of events whether Sync or Async, follow Swagger Spec to define the input and output shape. From this event spec one can generate a Graphql or gRpc schema as well (Planned). Next, for calling an external API, the default API client integration (ex. [Axios](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/axios-as-datasource#godspeed-plugin-axios-as-datasource) for Nodejs), validates the input and output of the API based on the API's Swagger spec defined in the API integration. To initiate development, the developer needs to first and foremost define the API and data schema.

### Standardized YAML based DSL and configurations
At Godspeed we want projects written across languages like JS, Java, Golang to be atleast 70% same via higher level abstractions coded as a YAML DSL. This allows consistency of implementation, helps new developers onboard existing projects easily, prevents technical debt and also eases migration from one language or integration to another.

Events, workflows, datasources, configurations and environment variables are defined with high level cross-framework, cross-language, cross-integration abstractions, using YAML-based DSL which allows inline scripting in JS, CoffeeScript or Groovy (coming soon with Java port). However, when necessary, workflows can also be scripted in pure JavaScript, Typescript or Java files.

Godspeed's YAML-based DSL simplifies the expression of what is to be done. In many cases, it results in shorter, boilerplate free, comprehensible code compared to traditional programming. Plugin developers define  
- The custom URI of their event types
- The DSL of the functions exposed by their [plugin](data_sources/datasource_plugins.md)


### Unified datastore model and API**

The unified model configuration and CRUD API, which includes popular SQL, NoSQL stores including [Elasticgraph](elasticgraph_orm/elasticgraph.md) (a unique ORM over Elasticsearch), offer standardized interfaces to various types of datastores, whether SQL or NoSQL. Each integration adapts to the nature of the data store. The Prisma and Elasticgraph plugins provided by Godspeed expose the native functions of the client used, giving developer the freedom to use the universal syntax or native queries.


### Schema driven data validation
We follow Swagger spec as a standard to validate the schema of the event, whether incoming or outgoing events (HTTP), without developer having to write any code. In case of database API calls, the datastore plugin validates the arguments based on the DB model specified in Prisma format.
The plugins for HTTP APIs or datastores offer validation for third-party API requests and responses, datastore queries, and incoming events based on Swagger spec or DB schema. For more intricate validation scenarios, such as conditional validation based on attributes like subject, object, environment, or payload, developers can incorporate these rules into the application logic as part of middleware or workflows.

### Authentication
Authentication helps to identify who is the user, and generate their access tokens or JWT token for authorized access to the resources of the application.
The framework gives developers full freedom to setup any kind of authentication. For ex. they can setup simple auth using the microservice's internal datastore. Or they can invoke an IAM service like ORY Kratos, AWS Okta, or an inhouse service. They can also add OAUTH2 authentication using different providers like Google, Microsoft, Apple, Github etc. using pre-built plugins, or import and customize an existing HTTP plugin like Express, by adding PassportJS middleware.

### Authorization
[Authorization](authorization/overview.md) is key to security, for multi-tenant or variety of other use cases. The framework allows neat, clean and low code syntax to have a fine grained authorization in place, at the event level or workflow's task level, when querying a database or another API.
Developers define authorization rules for each event or workflow task using straightforward configurations for JWT validation or RBAC/ABAC. For more complex use cases, for ex. where they query a policy engine and dynamically compute the permissions, they can write workflows or native functions to access the datasources, compute the rules on the fly, and patch the outcome of that function into a task's `authz` parameter. 
These rules encompass not only access to API endpoints but also provide fine-grained data access within datastores, for table, row and column level access. The framework allows seamless integration with third-party authorization services or ACL databases via the datasource abstraction.

### Autogenerated Swagger spec
Following the principles of Schema Driven Development, the event spec of the microservice can be used to auto-generate the Swagger spec for HTTP APIs exposed by this serice. The framework provides autogenerated Swagger documentation using CLI.

### Autogenerated CRUD API
The framework provides autogenereated CRUD APIs from database model written in Prisma format. Generated API's can be extended by the developers as per their needs. We are planning auto generate or Graphql and gRpc APIs, and may release a developer bountry for the same soon.

### Environment variables and configurations
The framework promites setting up of environment variables in a pre-defined YAML file. Though the developer can also allow access by other means via a .env file or setting them up manually. Further [configurations](config/overview.md) are to be written in `/config` folder. These variables are accessible in 
- Other configuration files
- Datasource, event source and event definitions
- Workflows

### Log redaction
The framework allows developer to specify the keys that may have sensitive information and should never get published in logs by mistake. There is a centralized check for such keys before a log is about to be printed. 

### Telemetry autoinstrumentation using OTEL
Godspeed allows a developer to add auto-instrumentation which publishes logs, trace and APM information in OTEL standard format, supported by all major observability backends. The APM export captures not just the RAM, CPU information per node/pod/service, but also the latency information of the incoming API calls, with broken down spans giving breakup of latency across the calls to datastores or external APIs. This helps to find out exact bottlenecks. Further the logs and trace/spans are correlated to find out exactly where the error happened in a request spanning multiple microservices with each calling multiple datasources and doing internal computation. 
Developer can also add custom logging, span creation and BPM metrics at task level. For ex. new user registration, failed login attempt etc.

### GuardRails 
Guardrails in the context of software development refer to a set of predefined rules, best practices, and constraints that guide developers in creating code that is secure, efficient, and maintainable. 

At Godspeed, our development philosophy revolves around four core guardrails, shaping a robust and innovative approach to software creation:

**1.Schema driven development:**

Embracing the power of structured data, Godspeed follows a schema-driven development approach. This guardrail ensures that the events, workflows within the software are defined by clear and well-documented schemas. 

Dive deeper into the fascinating world of schema-driven development by watching the video below...

<div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/jtn8rvfs7lo" frameBorder="0" allowFullScreen></iframe>
</div>


**2.Configure over code:**

At Godspeed, we believe in empowerment over complexity. That's why we champion configuration over endless coding. This guardrail encourages the use of high-level abstractions and configuration settings, giving developers the power to tailor the software's behavior without getting lost in the weeds of complex code changes.

Ready to unravel the magic of configure over code? Take a closer look in the video below, where we break it down in simple terms!"

<div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/7y7-gx80Nsc" frameBorder="0" allowFullScreen></iframe>
</div>





**3.Security:**

At Godspeed, security is non-negotiable. We've fortified our software with robust security standards and practices, including secure coding, strong authentication, and proactive vulnerability mitigation. 

Watch the video below to see how we keep your digital fortress impregnable."

<div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/nVn86r3Sguo" frameBorder="0" allowFullScreen></iframe>
</div>



**4. Decoupled Architecture:**

Godspeed's guardrail of decoupled architecture advocates for the separation of concerns within the software. By modularizing components and minimizing dependencies, this approach enhances scalability, maintainability, and collaboration among development teams. 

Watch the below video for more understanding.

<div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/tVWDbVPsLFQ" frameBorder="0" allowFullScreen></iframe>
</div>

