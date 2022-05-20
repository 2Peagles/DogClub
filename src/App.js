import React from "react";
import beagle from "./beagle.jpg";
import beaglepup from "./beaglepup.jpg";
import './App.css';

function App( ) {
  return (
    <div className="App">
      <div>
        <header className="App-header sticky">
        <h1>Dog club </h1>
            <div className="dropdown push "> 
            <ion-icon name="reorder-four-outline"></ion-icon>
              <button class="push dropbtn"> </button>
                <div className="dropdown-content">
                  <a href="about "> About </a>
                  <a href="meet ups "> meet ups </a>
                  <a href="location "> location </a>
                  <a href="profile "> Profile</a>
                </div>
            </div>
        </header>
      </div>
      <div>
          <body className="App-Body">
              <div className="">
              <h1 className='buffer'>breeds</h1>
              <h1>breeds</h1>
              <div className="slideshow-container">
              <div className="Breed-Box "> <img className="picture" src={beagle.jpg} alt ="beagle "/>Lorem</div>
              <div className="Breed-Box "> <img className="picture"src={beaglepup.jpg} alt ="beagle puppy "/>Lorem</div>
              <div className="Breed-Box "> <img className="picture"src=""alt ="dog "/>Lorem</div>
              <div className="Breed-Box "> <img className="picture"src="" alt ="dog "/>Lorem</div>
              <div className="Breed-Box "> <img className="picture"src="" alt ="dog "/>Lorem</div>
              </div>
                <br></br>
              </div>
            <div>
              <h1>meet ups</h1>
                <div className="push"> 
                <ul>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul></div>
                <br></br>
            </div>
            <div>
              <h1>about </h1>
                <div className=""> <p>Lorem ipsum dolor sit amet. Id aspernatur animi ut cupiditate eius ab deserunt rerum vel autem ipsum. Qui cupiditate enim et quod dicta et mollitia inventore. </p><p>Ad eveniet tempora non quasi quas et voluptatem officiis et iusto asperiores. Sit ipsa voluptates eos rerum fugiat id error autem nam dolor magnam et cupiditate quaerat hic omnis blanditiis ut nobis voluptas. Et magni nostrum sed galisum illum sed aliquid beatae ea cupiditate impedit et aspernatur quas. </p><p>Qui reprehenderit aspernatur et saepe fuga ea ratione internos id commodi eveniet. Non quidem magnam ut alias obcaecati quo autem aliquam eos aliquid autem ab corrupti odio sit deserunt consequatur est dolorem obcaecati. Aut asperiores quae ut eaque placeat ut officiis maiores et tempore quod ea cupiditate culpa. </p></div>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            </div>
          </body>
          <br></br>
      </div>
      <div>
        <header className="App-header footer"> 
                <div className="push-b"> 
                <ul>
                  <li>location</li>
                  <li>location</li> 
                  <li>location</li>
                  <li>location</li>
                </ul></div>
                <div className="push">
                  <a className="instagram" href="https://www.instagram.com/preciouspeaglepuppies/" > contact us 
                <ion-icon name="logo-instagram"></ion-icon></a>
                </div>
        </header>
      </div>
      </div>
     );
     }
export default App;
