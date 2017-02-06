// export default function apiMiddleware() {
//   return next => action => {
//     const {...rest} = action
//
//     // TODO: SUPER Ugly. needs to be cleanup
//     // axios cannot set header in case of
//
//     switch (action.type) {
//       case GET_:
//         next({...rest, type: action.type})
//         fetch(action.requestPath, {
//           method: action.requestMethod,
//           headers: action.headers,
//           body: JSON.stringify(action.requestBody)
//         }).then((response) => {
//           return response.json()
//         }).then((json) => {
//           next({...rest, data: json, type: action.typeSuccess})
//         })
//         break
//
//       default:
//         next(action)
//         break
//     }
//   }
// }
