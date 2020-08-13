;(
  async function () {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    const data = await response.json()

    let userCounter = 1
    let completedTrue = [];
    let completedFalse = [];

    for (let userInfo of data) {

      const newTr = document.createElement('TR')

      let newTdUserSerialNumber = document.createElement('TD')
      const newTdUserID = document.createElement('TD')
      const newTdID = document.createElement('TD')
      const newTdTitle = document.createElement('TD')
      const newTdCompleted = document.createElement('TD')

      newTdUserSerialNumber.textContent = userCounter + ' .'
      userCounter++
      newTdUserID.textContent = userInfo.userId
      newTdID.textContent = userInfo.id
      newTdTitle.textContent = userInfo.title
      newTdCompleted.textContent = userInfo.completed

      if (newTdCompleted.textContent === "true") {
        completedTrue.push(newTdID.textContent)
      }
      else if (newTdCompleted.textContent === "false") {
        completedFalse.push(newTdID.textContent)
      }
      
      newTr.appendChild(newTdUserSerialNumber)
      newTr.appendChild(newTdUserID)
      newTr.appendChild(newTdID)
      newTr.appendChild(newTdTitle)
      newTr.appendChild(newTdCompleted)

      tbodyUsers.appendChild(newTr)
    }

    document.getElementById('completed').onclick = function () {
      for (let completedValue of completedTrue) {
        let a = document.getElementsByTagName('TR')[completedValue]
        a.style.backgroundColor = '#49d094'
        a.style.color = '#fff'
      }
      for (let completedValue of completedFalse) {
        let a = document.getElementsByTagName('TR')[completedValue]
        a.style.backgroundColor = '#fff'
        a.style.color = '#49d094'
      }
    }
    document.getElementById('uncompleted').onclick = function () {
      for (let completedValue of completedFalse) {
        let a = document.getElementsByTagName('TR')[completedValue]
        a.style.backgroundColor = '#D6664E'
        a.style.color = '#fff'
      }
      for (let completedValue of completedTrue) {
        let a = document.getElementsByTagName('TR')[completedValue]
        a.style.backgroundColor = '#fff'
        a.style.color = '#49d094'
      }
    }
    document.getElementById('bothStatus').onclick = function () {
      for (let completedValue of completedTrue) {
        let a = document.getElementsByTagName('TR')[completedValue]
        a.style.backgroundColor = '#49d094'
        a.style.color = '#fff'
      }
      for (let completedValue of completedFalse) {
        let a = document.getElementsByTagName('TR')[completedValue]
        a.style.backgroundColor = '#D6664E'
        a.style.color = '#fff'
      }
    }
    document.getElementById('withoutStatus').onclick = function () {
      for (let completedValue of completedTrue) {
        let a = document.getElementsByTagName('TR')[completedValue]
        a.style.backgroundColor = '#fff'
        a.style.color = '#49d094'
      }
      for (let completedValue of completedFalse) {
        let a = document.getElementsByTagName('TR')[completedValue]
        a.style.backgroundColor = '#fff'
        a.style.color = '#49d094'
      }
    }
  }
)()