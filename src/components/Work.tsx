import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const workData = [
  {
    name: "Timbits Sports",
    category: "TimHorton · Sports Operations",
    tools: "Ruby on Rails, PostgreSQL, MVC Architecture, RBAC, Vue.js, Redis, Sidekiq",
    image: "/images/timbits-sports-product.png",
  },
  {
    name: "RMR Tim Hortons",
    category: "Stackworx · Franchise Finance",
    tools: "Ruby on Rails, Ledger Systems, Financial Auditing",
    image: "/images/rmr-tim-hortons.png",
  },
  {
    name: "ShadowBox Studios",
    category: "Stackworx · Productions & Media",
    tools: "Ruby on Rails API, React, Evervault, Stripe Escrow, PostgreSQL, RBAC, Redis, Sidekiq, REST APIs",
    image: "/images/shadowbox-studios.png",
  },
  {
    name: "LoadBetter Freight Platform",
    category: "Stackworx · Real-time Freight Marketplace",
    tools: "React, Node.js, Express, PostgreSQL",
    image: "/images/loadbetter.png",
  },
  {
    name: "Smile Cookie Platform",
    category: "Stackworx · CSR & Non-profit Grants",
    tools: "Ruby on Rails, Asynchronous Jobs, Workflow Engine",
    image: "/images/smile-cookie.png",
  },
  {
    name: "My Money Matters",
    category: "Fintech · Financial Wellbeing",
    tools: "ROR, Node.js, Express, Middleware Design, npm, Background jobs, React, PostgreSQL, REST APIs, Auth0, GCP Cloud Run, GCP Compute Engine, Docker, CI/CD",
    image: "/images/my-money-matters.png",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workData.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
