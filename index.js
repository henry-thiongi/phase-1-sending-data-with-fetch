// Add your code here
function submitData(name,email){
    const options = 
{
    method : "POST",
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json"
    },
    body: JSON.stringify({
        name,
        email
    })
} 

   return fetch('http://localhost:3000/users',options)
   .then(resp=>resp.json())
   .then(data=>document.body.innerHTML =data['id'] )
   .catch(error=>document.body.innerHTML = error.message)

} 