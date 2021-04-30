const faqCont = document.querySelector(".faq__container")
const template = document.querySelector("#template").content
const fragment = document.createDocumentFragment()
const text = {
    1:{ 
        id:1,
        q: "How many team members can I invite?",
        r :"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
        state: false
    },
    2: {
        id:2,
        q: "What is the maximum file upload size?",
        r :"No more than 2GB. All files in your account must fit your allotted storage space.",
        state: false
    },
    3:{
        id:3,
        q: "How do I reset my password?",
        r :"Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
        state: false
    },
    4:{
        id:4,
        q: "Can I cancel my subscription?",
        r :"Yes! Send us a message and we’ll process your request no questions asked.",
        state: false
    },
    5:{
        id:5,
        q: "Do you provide additional support?",
        r :"Chat and email support is available 24/7. Phone lines are open during normal business hours.",
        state: false
    }  
}

document.addEventListener("DOMContentLoaded", ()=>{
    showText()
})

faqCont.addEventListener('click', e => {
    btnAcc(e)
})

const showText = () =>{
    faqCont.innerHTML = ''
    Object.values(text).forEach(e => {
        const clone = template.cloneNode(true)
        clone.querySelector('h4').textContent = e.q
        if (e.state){
            clone.querySelector('p').textContent = e.r
            clone.querySelector('.faq__statement__text__b__img').classList.add("colapse__img")
            clone.querySelector('.faq__statement__text__h4').style.fontSize = "1.35rem"
            clone.querySelector('.faq__statement__text__h4').style.fontWeight = "700"
            
        }
        else  {
            clone.querySelector('p').textContent = ''
        }
        clone.querySelector('.faq__statement__text').dataset.id = e.id
        clone.querySelector('.text').dataset.id = e.id
        clone.querySelector('.faq__statement__text__b__img').dataset.id = e.id
        fragment.appendChild(clone)
    });
    faqCont.appendChild(fragment)
    
}

const btnAcc = e =>{
    let target = e.target.classList
    if (
        target.contains('faq__statement__text')||
        target.contains('text')||
        target.contains('faq__statement__text__b__img')){
        Object.values(text).forEach(el => {
            if(e.target.dataset.id == el.id){
                if(el.state){
                    text[el.id].state = false
                }
                else{
                    text[el.id].state = true
                }
            }
            else{
                text[el.id].state = false
            }
            /* console.log(el.state) */
        });
        
        showText()
    }
    e.stopPropagation();
    
}


