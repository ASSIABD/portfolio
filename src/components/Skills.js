import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    {
      category: "AI & ML",
      items: ["Machine Learning", "Deep Learning", "CNN", "Computer Vision"]
    },
    {
      category: "Data & Big Data",
      items: ["Hadoop", "MapReduce", "Power BI", "SQL", "MongoDB"]
    },
    {
      category: "Languages",
      items: ["Python (pandas/scikit-learn)", "Java", "C", "SQL", "JavaScript", "PHP"]
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Jupyter", "VS Code", "Laravel"]
    }
  ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Technical Skills</h2>
                        <p>My technical stack organized by category<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {skills.map((skillGroup, index) => (
                                <div className="item" key={index}>
                                    <img src={index % 3 === 0 ? meter1 : index % 3 === 1 ? meter2 : meter3} alt="Skill Meter" />
                                    <h5>{skillGroup.category}</h5>
                                    <div className="skill-list">
                                        {skillGroup.items.map((item, itemIndex) => (
                                            <span key={itemIndex} className="skill-item">{item}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
