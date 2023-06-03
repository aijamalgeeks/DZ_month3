const wrapper =document.querySelector('wrapper')
const request = new XMLHttpRequest()
request.open('GET',"people.json")
request.setRequestHeader("Content-type", "application/people.json")
request.responseType =  'json'
request.send()
request.onload = () => {
    const  people = request.response
    console.log(people)
    people.forEach(people => {
        const body = document.createElement('people')
        body.classList.add('body')
        const name = document.createElement('people')
        name.textContent= people.name
        body.appendChild(name)
        const age = document.createElement('people')
        age.textContent = `age : $ people.age`
        body.appendChild(age)
        wrapper.appendChild(body)
    })
}