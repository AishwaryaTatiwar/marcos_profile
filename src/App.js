import './App.css';
import profile_img from './profile_img.webp';

function App() {
  return (
    <div className="App">
      <div className='main'>

        <div className='top_head'>
        <img className='image'src={profile_img} alt="No image"></img>
        <h1 className='heading'>Profile</h1>
        </div>
        
        <div className='Field'>
        <h1 className='name_label'>Name:</h1>
        <input type="text" placeholder="Enter name" spellcheck="false" ></input>
        </div>

        <div className='Field'>
        <h1 className='program_label'>Program:</h1>
        <input type="text" placeholder="Enter program" spellcheck="false" ></input>
        </div>

        <div className='Field'>
        <h1 className='program_label'>College:</h1>
        <input type="text" placeholder="Enter college" spellcheck="false" ></input>
        </div>
        
        <div className='Field'>
        <h1 className='program_label'>Branch:</h1>
        <select id="branches" name="fruits">
          <option value="select_branch">Select Branch </option>
            <option value="cse">CSE</option>
            <option value="it">IT</option>
            <option value="etc">ETC</option>
            <option value="mech">Mechanical</option>
            <option value="civil">Civil</option>
        </select>
        </div>

        <div className='Field'>
        <h1 className='program_label'>Semester:</h1>
        <input type="number" placeholder="Enter semester" spellcheck="false" ></input>
        </div>

        <div className='Field'>
        <h1 className='program_label'>Contact number:</h1>
        <input type="text" placeholder="Enter contact number" spellcheck="false" ></input>
        </div>

        <button>Save</button>
        <button>Your notes</button>
      </div>
    </div>
  );
}

export default App;
