import logo from '../../assets/Logos/Logo.png'
import discord from '../../assets/Logos/discord-logo.png'
import twitter from '../../assets/Logos/twitter.png'
import opensea from '../../assets/Logos/opensea.png'
import orangelogo from '../../assets/Logos/Orange-1_2.png'
import blackgif from '../../assets/GIFs/Black.gif'

import plusbutton from '../../assets/Buttons-Titles/plusminus1.png'
import plusbuttondown from '../../assets/Buttons-Titles/plusminus2.png'
import minusbutton from '../../assets/Buttons-Titles/plusminus3.png'
import minusbuttondown from '../../assets/Buttons-Titles/plusminus4.png'
import mintbutton from '../../assets/Buttons-Titles/button7.png'
import { useState } from 'react'


const Header = () => {

    const [isConnectWallet, setIsConnectWallet] = useState(false)
    const [isMinusDown, setIsMinusDown] = useState(false)
    const [isPlusDown, setIsPlusDown] = useState(false)
    const [count, setCount] = useState(0);

    return (
        <header>
            <nav>
                <img src={logo} className="left-img"></img>
                <div className="title-bar">
                    <a href="#story">Story</a>
                    <a href="#roadmap">Roadmap</a>
                    <a href="#faq">FAQ</a>
                    <a href="#team">Team</a>
                    <a href="https://vintage-melody-b5a.notion.site/Chain-Fighters-Whitepaper-ec2282bf8c1243c09b2a19243c590fa5">Whitepaper</a>
                </div>
                <div className="connect-bar"><span onMouseOver={() => {
                    setIsConnectWallet(true)
                }} onMouseLeave={() => {
                    setIsConnectWallet(false)
                }}>Connect Wallet
                {
                    isConnectWallet?" >":""
                }
                </span></div>
                <a href="https://opensea.io/explore-collections"><img src={opensea} className="right"></img></a>
                <a href="https://discord.gg/HPMs5pdKav"><img src={discord} className="right"></img></a>
                <a href="https://twitter.com/Chain_Fighters"><img src={twitter} className="right"></img></a>
            </nav>
            <img src={orangelogo} className="chain-fighters"></img>
            <div className="mint-count">
                <span className="mint-box">0/10047 Fighters Minted</span>
                <span className="mint-box">
                    <img src={isMinusDown?minusbuttondown:minusbutton} onMouseDown={() => {
                        setIsMinusDown(true)
                    }} onMouseUp={() => {
                        setIsMinusDown(false)
                        if(count > 0)
                            setCount(count - 1)
                    }}></img>
                    <span className="field">{count}</span>
                    <img src={isPlusDown?plusbuttondown:plusbutton} onMouseDown={() => {
                        setIsPlusDown(true)
                    }} onMouseUp={() => {
                        setIsPlusDown(false)
                        if(count < 10047)
                            setCount(count + 1)
                    }}></img>
                </span>
                <span className="mint-box">Total: 0.047 ETH</span>
            </div>
            <div className="mint-count">
                <img src={mintbutton} className="mint-button" onClick={() => {
                }}></img>
            </div>
            <div className="mint-count">
                <img src={blackgif} className="mint-black" onClick={() => {
                }}></img>
            </div>
        </header>
    )
}

export default Header;