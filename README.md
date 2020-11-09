# fluentui-in-workspaces
A minimal test/sample project with @fluentui/react beta using yarn workspaces and a simplified project setup. Using this to recreate an edge-case where loading the @fluentui/react libraries are causing warnings and ultimately not working.

# Background
A simplified project structure using yarn workspaces and react based frontend using a "shared" webpack configuration.
The frontend is using `office-ui-fabric-core` and `office-ui-fabric-react` for components.

The goal is to to upgrade to `@fluentui/react`, which is is currently in beta 11 but should "just work" out of the box. As you may understand - it doesn't :)

The error recieved when building in webpack (and in the browser console) is:

```shell
## ...omitted for brevity

WARNING in ../node_modules/@fluentui/react-hooks/lib/useForceUpdate.js 7:13-27
"export 'useState' (imported as 'React') was not found in 'react'
 @ ../node_modules/@fluentui/react-hooks/lib/index.js
 @ ../node_modules/@fluentui/react/lib/components/DetailsList/DetailsList.base.js
 @ ../node_modules/@fluentui/react/lib/components/DetailsList/index.js
 @ ../node_modules/@fluentui/react/lib/DetailsList.js
 @ ../node_modules/@fluentui/react/lib/index.js
 @ ./App.tsx - just more of the same

WARNING in ../node_modules/@fluentui/react-hooks/lib/useControllableValue.js 4:13-27
"export 'useState' (imported as 'React') was not found in 'react'
 @ ../node_modules/@fluentui/react-hooks/lib/index.js
 @ ../node_modules/@fluentui/react/lib/components/DetailsList/DetailsList.base.js
 @ ../node_modules/@fluentui/react/lib/components/DetailsList/index.js
 @ ../node_modules/@fluentui/react/lib/DetailsList.js
 @ ../node_modules/@fluentui/react/lib/index.js
 @ ./App.tsx

## ...omitted for brevity

```

# How to run
1. Install dependencies for project from the project root

```shell
yarn
```

2. Start the web project from `\Web.React` folder
```
cd Web.React
yarn start
```
