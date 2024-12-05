import { useState } from 'react'

import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className="Spotify">
          <div className="main" />
          <div className='logodiv'>
          <img className="logo"
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true"
            alt="" />

          </div>
          <div className="d1">
            <img className="Homeicon"
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true"
              alt="" />
            <span className="Home">Home</span>
          </div>
          <div className="d2">
            <img className="Searchicon"
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true"
              alt="" />
            <span className="Search">Search</span>
          </div>
          <div className="d3">
            <img className="Yourlibraryicon"
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true"
              alt="" />
            <span className="Yourlibrary">Your library</span>
          </div>
          <br />
          <div className='d4'>
            <img className="Createicon"
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true"
              alt="" />
            <span className="Create">Create Playlist</span>
          </div>
          <div className='d4'>
            <img className="LikedSongsicon"
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true"
              alt="" />
            <span className="LikedSongs">Liked Songs</span>
          </div>
          <div className='d4'>
            <img className="Yourepisodesicon"
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true"
              alt="" />
            <span className="Yourepisodes">Your Episodes</span>
          </div>
          <br />
          <div>
            <span className="c1">FAV</span>
          </div>
          <br />
          <div>
            <span className="c1">Daily Mix 1</span>
          </div>
          <br />
          <div>
            <span className="c1">Discover Weekly</span>
          </div>
          <br />
          <div>
            <span className="c1">Malayalam</span>
          </div>
          <br />
          <div>
            <span className="c1">Dance/Electronix Mix</span>
          </div>
          <br />
          <div>
            <span className="c1">EDM/Populer</span>
          </div>
          <br />
          <br />
          <br />
          <div>
            <img className="installicon"
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true"
              alt="" />
            <span className="install">Install App</span>
          </div>
        </div>


        <div className='container2'>
          <div>
            <div className="b">
              <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true"
                alt="" />
              <br />
              <div class="goodmorning">
                <p>Good&nbsp;Morning</p>
              </div>
            </div>
            <div>
              <img className="User"
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true"
                alt="" />
            </div>

            <div className='contenar3'>
              <div className="i1">
                <img className="img1"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Group%202.png?raw=true"
                  alt="" />
                <span className="likedsongs">Liked Songs</span>
              </div>

              <div className="i2">
                <img className="img2"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true"
                  alt="" />
                <span className="NeffexPlaylist">Neffex Playlist</span>
              </div>

              <div className="i3">
                <img className="img3"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true"
                  alt="" />
                <span className="KDA">K/DA</span>
              </div>

              <div className="i4">
                <img className="img4"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true"
                  alt="" />
                <span className="Likedsongs">Liked Songs</span>
              </div>

            </div>
            <div className='container4'>
              <div className="i5">
                <img className="img5"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true"
                  alt="" />
                <span className="DanceElectronixMix">Dance/Electronix<br /> Mix</span>
              </div>

            </div>

            <div className='Showsyoumightlikediv'>
              <p className="Showsyoumightlike">Shows you might like <span className="v">SEE ALL</span></p>
            </div>
            <br />
            <div className='container5'>
              <div className="i6">
                <img className="img6"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true"
                  alt="" />
                <br />
                <span className="WeaklyMotivatio">Weakly Motivatio...</span>
                <br />
                <span className="z1">Ren Ina Scott</span>
              </div>

              <div className="i7">
                <img className="img7"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true"
                  alt="" />
                <br />
                <span className="Meditationself">MEDITATION SELF</span>
                <br />
                <span className="z2">ibp hussain aleen</span>
              </div>

              <div className="i8">
                <img className="img8"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true"
                  alt="" />
                <br />
                <span className="wordsbeyondact">Words beyond act...</span>
                <br />
                <span className="z3">smual scott</span>
              </div>

              <div className="i9">
                <img className="img9"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true"
                  alt="" />
                <br />
                <span className="wordsbeyondact">The Alexa Show</span>
                <br />
                <span className="z4">adrian tom</span>
              </div>

              <div className="i10">
                <img className="img10"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true"
                  alt="" />
                <br />
                <span className="wordsbeyondact">The Stories of Ma...</span>
                <br />
                <span className="z5">Leyus</span>
              </div>

              <div className="i11">
                <img className="img11"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true"
                  alt="" />
                <br />
                <span className="wordsbeyondact">Motivation Daily b...</span>
                <br />
                <span className="z6">Giorgina martha</span>
              </div>

            </div>
          </div>
        </div>

      </div>



      <div className="y1">
        <div className="y2">
          <img className="img12" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image11.png?raw=true"
            alt="" />
          <span className="DremingOn">Dreming On</span>
          <span className="M">NEFFEX</span>
          <img className="img13" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/bx_bxs-heart.png?raw=true" alt="" />
          <img className="img14" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Music%20Player%20Options.png?raw=true" alt="" />
          <img className="img15" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Right%20options.png?raw=true" alt="" />
        </div>
      </div>

    </>
  )
}

export default App
