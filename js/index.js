/* Setar os Valores */
document.getElementById('salvarBtn').addEventListener("click", setValues)
function setValues() {
    let tx_user = document.querySelector('#tx_user')
    let tx_local = document.querySelector('#tx_local')
    let tx_userDescription = document.getElementById('userDescription')
    let tx_Description = document.getElementById("description")
    let tx_date = document.getElementById('date')
    let tx_likes = document.getElementById('likes')
    let tx_commentsnumber = document.getElementById('comments')

    tx_user.textContent = document.querySelector('#et_username').value
    tx_userDescription.textContent = document.querySelector('#et_username').value
    tx_local.textContent = document.querySelector('#et_local').value
    tx_Description.textContent = document.getElementById("et_description").value
    tx_date.textContent = formatedDate()
    tx_likes.textContent = document.getElementById('et_likenumber').value + " curtidas"
    tx_commentsnumber.textContent = "Ver todos os " + document.getElementById('et_commentsnumber').value + " comentários"
}

function formatedDate() {
    let day = document.querySelector('#et_day').value
    let month = document.querySelector('#et_month').value
    let year = document.querySelector('#et_year').value

    return day + " de " + monthName(parseInt(month)) + " de " + year
}

function monthName(mes) {
    switch (mes){
        case 1:
            return "Janeiro"
        case 2:
            return "Fevereiro"
        case 3:
            return "Março"
        case 4:
            return "Abril"
        case 5:
            return "Maio"
        case 6:
            return "Junho"
        case 7:
            return "Julho"
        case 8:
            return "Agosto"
        case 9:
            return "Setembro"
        case 10:
            return "Outubro"
        case 11:
            return "Novembro"
        case 12:
            return "Dezembro"
    }
}

/** Enter para setar os valores */
document.addEventListener('keypress', keyDown)
function keyDown(e) {
    if (e.key == 'Enter') {
        setValues()
    }
    return e.key
}

/** Opção mesma foto para o Perfil */
document.getElementById('sameImgBox').addEventListener("click", perfilPhoto)
let boxState = true
function perfilPhoto() {
    let box = document.getElementById('sameImgBox').checked
    if (box) {
        document.querySelector('.photoPerfil').style.display = "none"
    } else {
        document.querySelector('.photoPerfil').style.display = "block"
    }
    boxState = box
}

/** Convertendo e setando foto "Upada" */
document.querySelector("#postImgUp").addEventListener('change', changePostPhoto)
let postImage_uploaded = ""
function changePostPhoto() {
    const reader = new FileReader()
    reader.readAsDataURL(this.files[0])

    reader.addEventListener('load', () => {
        postImage_uploaded = reader.result
        if (boxState){
            setValues()
            document.querySelector("main").style.content = `url(${postImage_uploaded})`
            document.querySelector("#UserPhoto").style.content = `url(${postImage_uploaded})`
        } else {     
            setValues()       
            document.querySelector("main").style.content = `url(${postImage_uploaded})`
        }
    })   


}

document.querySelector("#perfilImgUp").addEventListener('change', changeUserPhoto)
let userImage_uploaded = ""
function changeUserPhoto() {
    const reader = new FileReader()
    reader.readAsDataURL(this.files[0])

    reader.addEventListener('load', () => {
        userImage_uploaded = reader.result
        setValues()  
        document.querySelector("#UserPhoto").style.content = `url(${userImage_uploaded})`
        console.log(boxState)
    })   


}

