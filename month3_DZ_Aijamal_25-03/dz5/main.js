const som  = document.querySelector('#som')
const euro = document.querySelector('#euro')

const  money = (elem, target, isTrue) => {
    elem.oninput = () => {
         const request = new XMLHttpRequest()
    request.open("GET", "money.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
        const response = JSON.parse(request.response)
        if (isTrue) {
            target.value = (elem.value / response.euro ) .toFixed(2)
        } else {
            target.value = (elem.value * response.euro ) .toFixed(2)
        }
    }
    }
}
money(som,euro, true)
money(euro,som,true)