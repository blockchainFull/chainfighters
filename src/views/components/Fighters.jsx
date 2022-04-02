import punch from '../../assets/Icons/punch.png'
import punchgif from '../../assets/GIFs/Fighter Throwing Punches.gif'
import meetimg from '../../assets/NEW Flickering Fighters GIF.gif'
import chooseimg from '../../assets/GIFs/all-in-1.gif'
import legendimg from '../../assets/marcelogzz21_LARGE-2.png'
import image1 from '../../assets/phase1.png'
import wagerimg from '../../assets/Buttons-Titles/button5.png'
import dollarimg from '../../assets/Icons/money.png'
import img2 from '../../assets/2.png'
import sanjiimg from '../../assets/Sanji_LARGE-3.png'
import trophyimg from '../../assets/Icons/Trophy.png'
import image4 from '../../assets/phase4.png'
import mou from '../../assets/GIFs/Sanji.gif'
import chainman from '../../assets/GIFs/Patrick.gif'
import chelo from '../../assets/GIFs/Ninja.gif'
import gandalf from '../../assets/GIFs/Gandy.gif'
import twittericon from '../../assets/Logos/twitter.png'
import grassimg from '../../assets/Dusk Platform.png'

import Querybox from './Querybox'


const Fighters = () => {
    return (
        <div className="fighters">
            <div className="contain">
                <div className="row">
                    <div className="col-xl-4 col-lg-4">
                        <h1>Meet The Fighters</h1>
                        <div className="text meet">4,444 of the universe’s most talented fighters have been sent to the Ethereum blockchain. All generated completely on chain and stored on IPFS.<br/><br/><br/>
Fighters were summoned as a response to the current state of play 2 earn gaming projects that prioritize ponzi-like game economies and disregard gameplay.</div>
                    </div>
                    <div className="col-xl-1 col-lg-1"></div>
                    <div className="col-xl-4 col-lg-4">
                        <img src={meetimg} className="img-box"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="heading">Enter the Arena and $PUNCH your way to glory</div>
                    <div><img src={punch} className="punch-img"></img></div>
                    <div className="col-xl-3 col-lg-3">
                        <div className="text punch">Chain fighters grant holders many different perks. Main one being access to exclusive play 2 earn features in the companion platform fighting game releasing in the near future.</div>
                    </div>
                    <div className="col-xl-3 col-lg-3"><img src={punchgif} className="gif-punch"></img></div>
                    <div className="col-xl-3 col-lg-3">
                        <div className="text punch">Earn the $PUNCH token by playing ranked playlists, winning tournaments, creating custom games and assets, as well as owning an Arena NFT.</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-5">
                        <img src={chooseimg} className="img-box"></img>
                    </div>
                    <div className="col-xl-1 col-lg-1"></div>
                    <div className="col-xl-5 col-lg-5">
                        <h1 style={{textAlign:"right"}}>Choose Your <br/>Fighting <br/>Style<br/></h1>
                        <div style={{fontSize:"14px"}} className="text purple">Fighters can pick from many different battle archetypes that fit their style of play. With over 40-pre made fighting kits, users will be able to choose different kits depending on their strategy and opponent, allowing for a balanced competitive experience</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4">
                        <h1>Become a Legend</h1>
                        <div className="text legend">Place among the top fighters at the end of a ranked-play season and earn one of the Chain Legend NFTs.
                        <br/><br/>
                        -Earn a large share of game revenue
                        <br/><br/>
                        -Access to Legends verified chat
                        <br/><br/>
                        -Exclusive Airdrops
                        </div>
                    </div>
                    <div className="col-xl-1 col-lg-1"></div>
                    <div className="col-xl-4 col-lg-4">
                        <img src={legendimg} className="img-box"></img>
                    </div>
                </div>
                <div className="row">
                    <p className="heading roadmap">Roadmap</p>
                    <div className="col-xl-4 col-lg-4">
                        <h3 className="left">Phase 1: Fighters Launch</h3>
                        <p>. Fighters sell out: Fighters sell out 100%
                        <br/>. FightStash is created: Community wallet is introduced, receiving funding from mint, secondary market sales and in game revenue.
                        <br/>. Fighter staking is launched allowing $PUNCH to be earned passively: Holders will be given the opportunity to stack up on $PUNCH prior to the game’s release
                        <br/>. Begin Full swing game development: Game development efforts are accelerated</p>
                    </div>
                    <div className="col-xl-1 col-lg-1"></div>
                    <div className="col-xl-4 col-lg-4">
                        <img src={image1}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-2 col-lg-2">
                        <img src={img2} style={{width:"100%"}} />
                    </div>
                    <div className="col-xl-2 col-lg-2">
                        <img src={wagerimg} style={{width:"50%"}}/>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <h3 className="left">Phase 2: Initial Dapp release and Chain Fighters Pre-Release</h3>
                        <p>. Alpha Testing access: Active community members will be given the opportunity to test out an early version of the game.
                        <br/>. Wager System introduced in private games.
                        <br/>. 3D Voxel airdrop: Each fighter will receive their own unique 3D Voxel character for use in the SandBox and other metaverses.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4">
                        <h3 className="left">Phase 3: Full Dapp Release</h3>
                        <p>. Beta Launch: Beta version of the game will be released, allowing all fighter holders to start playing.
                        <br/>. Ranked Leaderboard: $PUNCH prize pool to top ranked fighters at the end of every season.
                        <br/>. Chain Legends Airdrop to top 100 ranked fighters: At the end of the beta, the top 100 ranked fighters will each be airdropped a Chain Legend; the VIP chain fighters collection, packed with utility.</p>
                    </div>
                    <div className="col-xl-1 col-lg-1"></div>
                    <div className="col-xl-2 col-lg-2">
                        <img src={sanjiimg} width="100%"/>
                    </div>
                    <div className="col-xl-2 col-lg-2">
                        <img src={trophyimg} width="100%"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4">
                        <img src={image4}/>
                    </div>
                    <div className="col-xl-2 col-lg-2"></div>
                    <div className="col-xl-4 col-lg-4">
                        <h3 className="left">Phase 4: Chain Fighters Game Launch</h3>
                        <p>. Official game launch: Full free-to-play game release for everyone.
                        <br/>. Introduce community uploadable content: Create custom assets and game modes that earn $PUNCH royalties .
                        <br/>. Prize pool tournaments: Fighters can join bracket style elimination tournaments, winner takes all.
                        <br/>. Surprise airdrop for fighters
                        <br/>. Arena NFTs: Own fractional NFTs of arenas where matches are held and earn game revenue.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="heading">
                        <div>Frequently Asked Questions</div>
                    </div>
                    <Querybox title="How does the minting process work?" content="Fighters were stealth-launched on a first-come, first-served basis, meaning no paid marketing, no whitelist and and no bots. We wanted to make this project accesible to those who found out about it without having to wait weeks for hype to accumulate and spend hours on end fighting for whitelist spot." />
                    <Querybox title="How much does it cost to mint a fighter?" content="Each fighter has a mint price of 0.047 ETH." />
                    <Querybox title="How many fighters can I mint?" content="You can mint five fighters per transaction" />
                    <Querybox title="What rights do I have to my fighter and what can I do with it?" content="Fighters use a CC0 license meaning you have exclusive rights to do anything you want with the artwork. All traits have been dynamically created on-chain to allow smooth interactions with smart contracts." />
                    <Querybox title="Do I need to have a Fighter in order to play the game?" content="No, once the full game is released anyone will be able to play Chain Fighters. However, in order to bring value to this collection we have packed each fighter with exclusive P2E features. To explore all the benefits of holding a fighter, read our Whitepaper." />
                    <Querybox title="Will this be the only Fighter collection?" content="It depends, if the game is succesfull we might release more Fighters to accommodate a bigger player base. If that ever were to happen though, we would make sure the original 10k Fighters hold significant utility and privileges over the newer gens." />
                </div>
                <div className="row">
                    <div className="heading">Team and Collaborators</div>
                    <div className="team">
                        <div className="character-box">
                            <h3>Mou</h3>
                            <img src={mou}></img>
                            <img src={grassimg} className="grass-img"></img>
                            <h5>Team Lead</h5>
                        </div>
                        <div className="character-space"></div>
                        <div className="character-box">
                            <h3>CHELO</h3>
                            <img src={chelo}></img>
                            <img src={grassimg} className="grass-img"></img>
                            <h5 className="text-nowrap">Game Design Lead</h5>
                        </div>
                    </div>
                    <div className="team">
                        <div className="character-box">
                            <h3>Gandalf</h3>
                            <img src={gandalf}></img>
                            <img src={grassimg} className="grass-img"></img>
                            <h5>Art</h5>
                        </div>
                        <div className="character-space"></div>
                        <div className="character-box">
                            <h3>ChainMan</h3>
                            <img src={chainman}></img>
                            <img src={grassimg} className="grass-img"></img>
                            <h5>Lead Dev</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fighters;