const func = async () => {
    const information = document.getElementById('info')
    const response = await window.versions.ping()
    information.innerText = response
    console.log(response) // prints out 'pong'
  }
  
func()