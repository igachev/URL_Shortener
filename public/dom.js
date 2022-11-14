function loadTableItems() {
    fetch('/all'
    )
.then((res) => res.json())
.then((data) => {
   const all = data.shortUrls.map((d) => {
        const {fullUrl,short,countClicks,lastDateClicked} = d;
        //console.log(fullUrl,short,countClicks,lastDateClicked);
        return  `
        <tr>
        <td><a href = "${fullUrl}">${fullUrl} </a> </td>
        <td><a href = "${short}">${short} </a> </td>
        <td>${countClicks}</td>
        <td>${new Date(lastDateClicked).toUTCString()}</td>
        <td><button class="btn-delete">Delete</button></td>
        </tr>
      `
    }).join('')
    document.querySelector('.table-body').innerHTML = all
    deleteRow()
})

}

function deleteRow() {
    let allDeleteBtns = document.querySelectorAll('.btn-delete')
allDeleteBtns.forEach((btn) => {
    btn.addEventListener('click',async(e) => {

        try {
            const id =  e.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
       // console.log(element);
            await fetch(`/${id}`, {
       method: "DELETE",
       headers: {"Content-Type":"application/json"}
    });
    location.assign('/?page=1')
   //location.assign(window.location.href)
    loadTableItems()

        } catch (error) {
            console.log(error);
        }
    })
})
}

deleteRow()



