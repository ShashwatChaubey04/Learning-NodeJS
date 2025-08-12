/*

When we initialize a Node JS module (typically with npm init), it creates a package.json file. That file is the manifest for your Project (a file that describes important information about a project or package) such that npm and other tools use it to understand metadata, dependencies, scripts, versioning, entry points, etc.

package.json contains:
-> Basic Project Info
    name → Name of your Project. 
    version → Current Version of your Project.
    description → Short description of what the Project does.    
    author → Author Name.
    license → Type of License.

-> Scripts
    scripts → Custom Commands you can run using   npm run <script>.

    "scripts": {
      "start": "node index.js",
      "dev": "nodemon index.js",
      "test": "jest"
    }

-> Dependencies
    dependencies → Packages your Project needs to run in Production.
    
    "dependencies": {
      "express": "^4.18.2",
      "mongoose": "^7.2.0"
    }

-> Dev Dependencies
devDependencies → Packages needed only for Development (e.g., testing tools, linters).

    "devDependencies": {
      "nodemon": "^2.0.22",
      "eslint": "^8.43.0"
    }
  
*/

/*

The caret ^/~ is a version range operator in npm. It tells npm:
Install the latest minor or patch version, as long as the major version stays the same.

# Why we use ^/~
Because it:
-> Keeps your app up-to-date with safe updates (bug fixes and small new features)
-> Avoids dangerous big updates that may break your app

Minimum version: 4.18.2
Maximum version: less than 5.0.0 (i.e., ^4.18.2 allows anything from 4.18.2 up to but not including 5.0.0)

where as, 4.18.2 is a Version Number. 
4  ->  Major
18 ->  Minor
2  ->  Patch

🔴 Major (4)
-> Big changes.
-> May break old code (not backward-compatible).
-> Example: 4.x.x → 5.0.0 means big breaking updates.

🟡 Minor (18)
-> New features added.
-> Old code still works (backward-compatible).
-> Example: 4.18.2 → 4.19.0 adds a new feature.

🟢 Patch (2)
-> Bug fixes only.
-> No new features.
-> Example: 4.18.2 → 4.18.3 fixes a small issue.

*/