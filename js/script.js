let htmlElement = '';

let res;
for(let i=0; i<5; i++){

    htmlElement+=`<span class="css-star js-star">&#9733</span>`;
}
document.querySelector('.js-star-div').innerHTML = htmlElement


let stars = document.querySelectorAll('.js-star')
console.log(stars)

stars.forEach((item,index) => {
    item.addEventListener('click',() => {  
        console.log('old index : ',index)
        res = index+1;
        stars.forEach((item, newindex) => {

            if(index >= newindex){
                console.log('new index : ',newindex)
                item.classList.add('css-color')
                document.querySelector('.js-rating-res').innerHTML = `Rating is : <span class="css-deflt-txt"> ${res} </span>  /  5 `;
            }
            else{
                console.log('else part')
                item.classList.remove('css-color')
            }

        })
    })
})

