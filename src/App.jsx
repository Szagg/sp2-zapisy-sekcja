import { useState } from 'react';

function App() {
   const kursy = ["Piłka nożna", "Szachy", "Robotyka", "Pływanie"];
   const [imieNazwisko, setImieNazwisko] = useState("");
  const [numerSekcji, setNumerSekcji] = useState("");

  return (
    <>
    <form>
    
    <h2>Liczba sekcji: {kursy.length} </h2>
    <ol>
    {kursy.map((kurs, index) => (
          <li key={index}>{kurs}</li>
        ))}
    </ol>
  <div class="mb-3" >
    <label for="imieNazwisko" class="form-label">Imię i nazwisko:</label>
    <input type="text" class="form-control" id="imieNazwisko" />
  </div>
  <div class="mb-3">
    <label for="numerSekcji" class="form-label">Numer sekcji:</label>
    <input type="number" class="form-control" id="numerSekcji" />
  </div>
  <button type="submit" class="btn btn-primary">Zapisz</button>
</form>
    </>
  )
}

export default App
