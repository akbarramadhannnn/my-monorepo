## my-monorepo

>**Note**: All third-party library installations must be executed exclusively from the **root project directory**. This practice is mandatory to maintain the integrity of the **NPM Workspaces** architecture, ensuring that dependencies are correctly hoisted and managed via a single global ```package-lock.json```.

## Getting Started

- Clone the repository to your local machine:
```
git clone https://github.com/akbarramadhannnn/my-monorepo.git
```

- Navigate to the project directory:
```
cd monorepo
```

- Install the dependencies:

```
npm install
```

- Link native code iOS :

```
npm run ios:pod
```

- Start the development server:

1. Android

```
npm run android
```

2. iOS

```
npm run ios
```

## How to Install Third-Party Dependencies
To maintain dependency consistency within the monorepo structure, all installations must be executed from the **root project** using **NPM Workspaces**.

Follow the commands below based on the target workspace:
1. Installing for the ```demoapp```
```
npm install [library-name] --workspace=demoapp
```
2. Installing for the ```my-big-library```
```
npm install -D [library-name] --workspace=my-big-library
```
After installing a third-party library into ```my-big-library```, you must manually update the ```package.json``` to avoid version conflicts and package duplication.

### Manual Step After Installation
1. Open ```packages/my-big-library/package.json```.
2. Manually add the library to the ```peerDependencies``` section using the ```"*"``` version. This ensures that the library will use the version already installed in the host application (e.g., ```demoapp```)

**Example** ```package.json``` for ```my-big-library```:
```JSON
{
  "name": "@akbarramadhan/my-big-library",
  "version": "1.0.1",
  "peerDependencies": {
    "axios": "*",
    ...
  },
  "devDependencies": {
    "axios": "^1.7.0",
    ...
  }
}
```
