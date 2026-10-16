import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <form>
   <h2>Liczba sekcji: N</h2>
   <li>
    <ul>1</ul>
       <ul>2</ul>
          <ul>3</ul>
   </li>

  <div class="mb-3" align="center">
 
    <label for="imieNazwisko" class="form-label">Imię i nazwisko:</label>
    <input type="text" class="form-control" id="imieNazwisko" />
  </div>
  <div class="mb-3" align="center">
    <label for="numerSekcji" class="form-label">Numer sekcji:</label>
    <input type="number" class="form-control" id="numerSekcji" />
     </div>
 <p></p>
 
  <button type="submit" class="btn btn-primary" >Zapisz</button>
  
</form>
    </>
  )
}

export default App
