import { Router } from "express"

const router = Router();

router.get('/api/products', (request, response) =>{
    console.log(request.headers.cookie);
    console.log(request.cookies);
    console.log(request.signedCookies.hello);
    if(request.signedCookies.hello && request.signedCookies.hello === 'world'){ 
        return response.send([{ id: 123, name:' chicken', price: 80}])
    }
    return response.status(403)
    .send({msg:"You need the correct cookies"});
})

export default router;