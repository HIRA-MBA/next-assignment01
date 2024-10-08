import React from 'react'


const Suggestionspage = () => {
  return (
    <div>
      <h2>your suggestion</h2>
      <form>
      <br/>
        <label>Name
        <input type="text" placeholder='your name'/></label>
        <br/>
        <br/>
        <label>suggestions
        <input type="textarea" placeholder='your name' /></label>
       
<button>Submit</button>
      </form>
    </div>
  )
}

export default Suggestionspage
