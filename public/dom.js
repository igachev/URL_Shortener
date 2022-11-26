


    let allDeleteBtns = document.querySelectorAll('.btn-delete')
allDeleteBtns.forEach((btn) => {
    btn.addEventListener('click',async(e) => {

        try {
            const id =  e.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
        console.log(id);
            await fetch(`/${id}`, {
       method: "DELETE",
       headers: {"Content-Type":"application/json"}
    });
    location.reload()
   

        } catch (error) {
            console.log(error);
        }
    })
})


   
    let allShortBtns = document.querySelectorAll('.short-url-btn')
    allShortBtns.forEach((btn) => {
        btn.addEventListener('click',async(e) => {
           
            setTimeout(() => {
                location.reload()
            }, 100);
    })
    }) 

          
    
   
   
    
 

