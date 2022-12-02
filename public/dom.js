
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

          
    let allUpdateBtns = document.querySelectorAll('.btn-update')
    allUpdateBtns.forEach((btn) => {
        btn.addEventListener('click',async(e) => {
            try {
                let id =  e.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
                console.log(id);
                let url = document.getElementById('fullUrl2').value
                console.log(url);
               
              await fetch(`/all/${id}`,{
                method:'PUT',
                headers: {
                    'Content-type':'application/json'
                },
                body:
                    JSON.stringify({
                    countClicks:0,
                    fullUrl2:url,
                    lastDateClicked: new Date()
                    })
                    
            })
              // .then(response => response.json())
               // .then(data => console.log(data))
               location.reload()
            } catch (error) {
                console.log(error);
            }
        })
    })
   
   
    
 

