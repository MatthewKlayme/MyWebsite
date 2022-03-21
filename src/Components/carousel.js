import React from 'react'
import {Carousel} from 'react-bootstrap';
import jacked from "../Images/swole.PNG";
import computer from "../Images/computer.jpg";
import friends from "../Images/friends.jpg";

export default function carousel() {
  return (
    <div><Carousel fade>
    <Carousel.Item>
      <img
        className="d-block"
        style= {{ height: 500, width: 500, margin: "auto" }}
        src={computer}
        alt="Klems pc"
      />
      <Carousel.Caption>
        <h3>Gaming</h3>
        <p>Ever since I was a youngster I got into gaming through my older brother Nintendo 64. And after years of gaming eventually I decided to build myself a high speed gaming pc so that I could play AAA ip's.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        style= {{ height: 500, width: 500, margin: "auto" }}
        src={friends}
        alt="Klems friends"
      />
  
      <Carousel.Caption>
        <h3>Travel</h3>
        <p>Summer Break is the time of year me and all my best buds get together and figure out a vacation spot to travel too. Its spontaniouse and random but with the right people it doesnt matter where you go.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        style= {{ height: 500, width: 800, margin: "auto" }}
        src={jacked}
        alt="Jacked klem"
      />
  
      <Carousel.Caption>
        <h3>Stay Swole</h3>
        <p>Since the first time I starting lifting weights I knew I had to set up my own home gym. I love the feeling of the workout pump.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
  )
}
