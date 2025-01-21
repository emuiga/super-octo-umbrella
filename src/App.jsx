import './App.css'

export default function App() {

       
  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice') //fetch is a promise
    const data = await response.json() //json is a promise
    console.log(data)
  }

  return (
    <div className='App'>
      <h1>Hello Steve</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button>Get advice</button>
    </div>
  )
}
