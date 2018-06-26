# Typescript for both the browser and node

I'd like to find a way to maintain a tree of libraries so that:

- Any set of libraries can be used in the browser.
- The libraries can be used in Node.
- The libraries can be used directly in the browser.
  - Ideally, this should work for flat-file development, and not require a web server.
  - Ideally, the libraries could be used as browser modules.
- The library builds do not duplicate library dependencies.
  - Partially for bloat, but also so that different libs don't use independent copies of shared dependencies at runtime.
- Any library or app using them can be maintained in either vanilla JS or Typescript.
- The minimum amount of *mandatory* tooling for projects using the libraries should be minimal.
