import React from "react"
import { Link } from 'gatsby'
import Container from '../components/container'
const ListLink = props=>(
    <li style={{display:'inline-block',marginRight:'1rem'}}>
        <Link to={props.to} style={{...props.css,textShadow:'none',background:'none'}}>{props.children}</Link>
    </li>
)

const Header = (props)=>(
    <header style={{...props.css,position:'fixed',top:'0',width:'100%'}}>
        {props.children}
    </header>
)

const Aside = (props)=>(
    <aside style={{...props.css,position:'fixed',left:'0',borderRight:'1px solid teal'}}>
        {props.children}
    </aside>
)

const Main = (props)=>(
    <div style={{...props.css,position:'relative',padding:'3rem 0'}}>
        {props.children}
    </div>
)

const Footer = (props)=>(
    <footer style={{textAlign:'center',position:'absolute',width:'100%',bottom:'1rem'}}>
        {props.children}
    </footer>
)

export default ({children})=>(
    <div style={{paddingTop:'2rem'}}>
        <Header css={{height:'2rem',background:'teal',lineHeight:'2rem'}}>
            <Link to="/" style={{textShadow:'none',background:'none',paddingLeft:'1.5rem'}}>
                <h3 style={{display:'inline'}}>MySweetSite</h3>
            </Link>
            <ul style={{float:'right',listStyle:'none'}}>
                <ListLink to="/" css={{color:'white'}}>Home</ListLink>
                <ListLink to="/about/" css={{color:'white'}}>About</ListLink>
                <ListLink to="/contact" css={{color:'white'}}>Contact</ListLink>
            </ul>
        </Header>
        <Aside css={{width:'250px',height:'calc(100vh - 2rem)',borderRight:'1px solid teal'}}>Sidebar</Aside>
        <Main css={{marginLeft:'250px',minHeight:'calc(100vh - 2rem)'}}>
            <Container>{children}</Container>
            <Footer>my sweet site footer</Footer>
        </Main>
    </div>
)