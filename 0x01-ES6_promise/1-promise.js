export default function getFullResponseFromAPI(success){
  return new promise ((res, rej) => {
    if (success){
      res({ status: 200, body: 'Success' });
    }else{
      rej(new Error("The fake API is not working currently"));
    }
  });
}
