// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:'https://api.github.com/users/',
  userapikey: '?access_token=75de827c4d0ca6139b9b0c7e1a7139173b793ce9' ,
  repositoryapikey:'/repos?access_token=75de827c4d0ca6139b9b0c7e1a7139173b793ce9'

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
