import "./App.css";
function App() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-800 h-screen">
      <div className="container flex h-screen mx-auto">
        <form className="bg-blue-900 m-auto text-white">
          <h1>Password Generator</h1>
          <div>
            <input type="password" name="password" />
          </div>
          <div>
            <label htmlFor="">Password Length</label>
            <input type="number" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Include Uppercase Letters</label>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Include Lowercase Letters</label>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Include Numbers</label>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Include Symbols</label>
            <input type="checkbox" name="" id="" />
          </div>
          <button type="submit">Generate Password</button>
        </form>
      </div>
    </div>
  );
}

export default App;
