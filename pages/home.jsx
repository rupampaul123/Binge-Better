import TrueFocus from "../components/focus/TrueFocus"
import CardSwap, { Card } from "../components/CardSwap/CardSwap"
import GooeyNav from "../components/navbar/GooeyNav";
import FlowingMenu from "../components/flowing menu/FlowingMenu";
import Component from "../components/footer/footer";
import { Link } from 'react-router-dom';
import movieNight from './components/MovieNight-cuate.png';
export default function Home(){

    const items = [
        { label: "Home", to: "/home" },
        { label: "Search", to: "/search" },
        ];


        const demoItems = [
            { link: '#', text: 'Hollywood', image: 'https://images.unsplash.com/photo-1578674473215-9e07ee2e577d?q=80&w=2153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { link: '#', text: 'Bollywood', image: 'https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2022/05/image1-1.jpg' },
            { link: '#', text: 'TV Shows', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDL8HOpTt0j3TfYFm4X4jDufIuS7SLfB1bnQ&s' },
            { link: '#', text: 'Anime', image: 'https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
            ];
    return (
        <>

        <div style={{ height: '80px',width: "100%" , backgroundColor:"#1a1a1a", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{position:"relative",right:"450px"}}>
                <h1 style={{fontSize: "30px" ,color: "white", fontFamily:"Arial Black"}}>Binge <span style={{color:"red", fontFamily:"Arial Black"}}>Better</span></h1>
            </div>
            <GooeyNav
                items={items}
                particleCount={1}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={0}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
        </div>
        <div style={{display :"flex", justifyContent: "space-around"}}>
            <div><img src={movieNight} style={{height: "800px", }}/></div>
            <div>
            <TrueFocus 
                sentence="Binge Better"
                manualMode={false}
                blurAmount={5}
                borderColor="red"
                animationDuration={1}
                pauseBetweenAnimations={1}
            />
            </div>
           </div>
            <div style={{ height: '600px', position: 'relative', backgroundColor: "#1f1f1f", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{marginRight: "600px",  marginTop:"200px"}}>
                    <h1 style={{ fontSize: "50px", fontFamily: "Arial Black", textAlign:"center"}}>
                        Know What to Watch-<span style={{color: "red"}}>Instantly</span>
                    </h1>
                    <h3 style={{ textAlign: "center", fontSize:"30px"}}>
                        From cult classics to hidden gems, we help you zero in on exactly what you're in the mood for.
                    </h3>
                </div>
            <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={3000}
                pauseOnHover={false}
            >
                <Card>
                <h3>Joker</h3>
                <p>why so serious?</p>
                <img style={{width: "100%", height: "400px"}} src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/joker_th6ifhph_500x749.jpg?v=1662670525"></img>
                </Card>
                <Card>
                <h3>Star Wars</h3>
                <p>saber or saver?</p>
                  <img style={{width: "100%", height: "400px"}} src="https://www.movieposters.com/cdn/shop/products/star-wars-the-last-jedi_nhsygft5_480x.progressive.jpg?v=1640722017"></img>
                </Card>
                <Card>
                <h3>Lion King</h3>
                <p>rawrrrr!!</p>
                  <img style={{width: "100%", height: "400px"}} src="https://www.movieposters.com/cdn/shop/products/530bb74fe86a2cb1088b1d408376e82f_60350132-52c1-40d8-872c-40c3506e4760_480x.progressive.jpg?v=1573613602"></img>
                </Card>
                 <Card>
                <h3>Fight Club</h3>
                <p>first rule of fc : ****</p>
                  <img style={{width: "100%", height: "400px"}} src="https://www.movieposters.com/cdn/shop/files/FIGHT-CLUB_480x.progressive.jpg?v=1730231824"></img>
                </Card>
                 <Card>
                <h3>Cars 3</h3>
                <p>Kchawww!!</p>
                  <img style={{width: "100%", height: "400px"}} src="https://www.movieposters.com/cdn/shop/products/991c3e2ec879942f59eada4e4d8b232a_cbcd0b60-037c-4eb8-b800-218c93afc543_480x.progressive.jpg?v=1573591649"></img>
                </Card>
            </CardSwap>
            </div>
            <div style={{marginTop:"500px", backgroundColor: "#1f1f1f", fontSize: "60px", color: "white", textAlign: "center", height: "100px", fontFamily: "Arial Black"}}>
                Every Title, Every Genre. <span style={{color: "red"}}>One Place.</span>
            </div>

            <div style={{ height: '600px', width: "100%", position: 'relative', backgroundColor: "#1f1f1f", marginTop: "50px" }}>
            <FlowingMenu items={demoItems} />
            </div>
            <div style={{marginTop: "100px"}}>
                <div style={{ textAlign: "center", marginTop: "40px" }}>
                    <Link to='/search' >
                    <button className="movie-btn">
                        Explore Now
                    </button>
                    </Link>
                    <style>
                        {`
                        .movie-btn {
                            background-color: transparent;
                            border: 2px solid red;
                            color: white;
                            padding: 12px 28px;
                            border-radius: 50px;
                            font-weight: 600;
                            font-size: 1rem;
                            letter-spacing: 1px;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            text-transform: uppercase;
                        }

                        .movie-btn:hover {
                            background-color: red;
                            color: #1f1f1f;
                            box-shadow: 0 0 15px red;
                        }
                        `}
                    </style>
                </div>
            </div >
            <div style={{marginTop: "300px"}}>
                <Component/>
            </div>
            
        </>
    )
}