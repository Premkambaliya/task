import './Upper.css'

function Upper() {

  const data = [
    { img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true", title: "Home" },
    { img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true", title: "Search" },
    { img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true", title: "Your library" },
  ];

  const data1 = [
    { img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Group%202.png?raw=true", title: "Liked Songs" },
    { img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true", title: "Neffex Playlist" },
    { img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true", title: "K/DA" },
    { img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true", title: "Liked Songs" },
  ];

  const data2 = [
    { id:"1", img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true", title: "WeaklyMotivatio...  ", title1: "Ren Ina Scott" },
    { id:"8", img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true", title: "WeaklyMotivatio...  ", title1: "Ren Ina Scott" },
    { id:"2", img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true", title: "MEDITATION SELF  ", title1: " ibp hussain aleen" },
    { id:"3", img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true", title: "Words beyond act... ", title1: "smual scott" },
    { id:"10", img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true", title: "Words beyond act... ", title1: "smual scott" },
    { id:"4", img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true", title: "The Alexa Show ", title1: "adrian tom" },
    { id:"5", img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true", title: "The Stories of Ma... ", title1: "Leyus" },
    { id:"12", img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true", title: "The Stories of Ma... ", title1: "Leyus" },
    { id:"6", img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true", title: "Motivation Daily b... ", title1: "Giorgina martha" },
  ];

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
          {/* <div className="d2">
    <img className="Homeicon"
      src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true"
      alt="" />
    <span className="Home">Home</span>
  </div>
  <div className="d2">
    <img className="Homeicon"
      src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true"
      alt="" />
    <span className="Home">Search</span>
  </div>
  <div className="d2">
    <img className="Homeicon"
      src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true"
      alt="" />
    <span className="Home">Your library</span>
  </div> */}

          <div>
            {data.map((icon) => (
              <div className="d2">
                <img src={icon.img} alt="" className='Homeicon' />
                <span className='Home'>{icon.title}</span>
              </div>
            ))}
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
              <div className="goodmorning">
                <p>Good&nbsp;Morning</p>
              </div>
            </div>
            <div>
              <img className="User"
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true"
                alt="" />
            </div>


            <div className='contenar3'>

              {/* <div className="i1">
                <img className="img1"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Group%202.png?raw=true"
                  alt="" />
                <span className="likedsongs">Liked Songs</span>
              </div>

              <div className="i1">
                <img className="img1"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true"
                  alt="" />
                <span className="likedsongs">Neffex Playlist</span>
              </div>

              <div className="i1">
                <img className="img1"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true"
                  alt="" />
                <span className="likedsongs">K/DA</span>
              </div>

              <div className="i1">
                <img className="img1"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true"
                  alt="" />
                <span className="likedsongs">Liked Songs</span>
              </div> */}

              {data1.map((j) => (
                <div className="i1">
                  <img src={j.img} alt="" className='img1' />
                  <span className='likedsongs'>{j.title}</span>
                </div>
              ))}

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

              {/* <div className="i6">
                <img className="img6"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true"
                  alt="" />
                <br />
                <span className="WeaklyMotivatio">Weakly Motivatio...</span>
                <br />
                <span className="z1">Ren Ina Scott</span>
              </div>

              <div className="i6">
                <img className="img6"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true"
                  alt="" />
                <br />
                <span className="WeaklyMotivatio">MEDITATION SELF</span>
                <br />
                <span className="z1">ibp hussain aleen</span>
              </div>

              <div className="i6">
                <img className="img6"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true"
                  alt="" />
                <br />
                <span className="WeaklyMotivatio">Words beyond act...</span>
                <br />
                <span className="z1">smual scott</span>
              </div>

              <div className="i6">
                <img className="img6"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true"
                  alt="" />
                <br />
                <span className="WeaklyMotivatio">The Alexa Show</span>
                <br />
                <span className="z1">adrian tom</span>
              </div>

              <div className="i6">
                <img className="img6"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true"
                  alt="" />
                <br />
                <span className="WeaklyMotivatio">The Stories of Ma...</span>
                <br />
                <span className="z1">Leyus</span>
              </div>

              <div className="i6">
                <img className="img6"
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true"
                  alt="" />
                <br />
                <span className="WeaklyMotivatio">Motivation Daily b...</span>
                <br />
                <span className="z1">Giorgina martha</span>
              </div> */}



              {data2.filter((p) => p.id % 2 == 0)
              .map((k) => (
                <div className="i6">
                  <img src={k.img} alt="" className='img6' /><br />
                  <span className='WeaklyMotivatio'>{k.title}</span>  <br />
                  <span className='z1'>{k.title1}</span>
                </div>
              ))}

            </div>


          </div>


        </div>

      </div>


    </>
  )
}

export default Upper
