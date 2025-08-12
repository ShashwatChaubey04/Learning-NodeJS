/*

package-lock.json File contain
 :
1. Exact versions of every installed package
Even if package.json says "express": "^4.18.2", the lock file will say:
  "express": {
    "version": "4.18.2",
    ...
  }
So it locks it to 4.18.2 only.

2. Resolved URLs
It saves where npm got the package from:
"resolved": "https://registry.npmjs.org/express/-/express-4.18.2.tgz"
This helps npm download it again from the same source.

3. Dependencies of dependencies (very important!)
If Express depends on another package, that package and its version will also be locked.
So the lock file may look like this:
  "express": {
    "version": "4.18.2",
    "dependencies": {
      "body-parser": {
        "version": "1.20.0",
        ...
      }
    }
  }
Even if you didn’t install body-parser directly, it gets locked too.

4. Integrity Check
It stores a special code called integrity (hash), to make sure the package is not changed or tampered with.
"integrity": "sha512-....."

5. Dev dependencies
If you installed something only for development (like testing tools), it marks it as a dev dependency:
"dev": true

*/