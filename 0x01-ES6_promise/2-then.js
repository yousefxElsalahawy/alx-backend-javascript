export default function handleResponseFromAPI(promise){
  return new promise.then(() => console.log("{ status: 200, body: 'Success' }"))
    .catch(() => new Error("{}"))
    .finally(() => console.log("Got a response from the API"))
}



