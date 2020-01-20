import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
const User = (props)=>(
    <div className={styles.user}>
        <img src={props.avator} className={styles.avator} alt="avator"></img>
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default ()=>(
    <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <User 
    avator="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
    username="Jane Doe"
    excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User 
    avator="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
    username="Bob Smith"
    excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    </Container>
)