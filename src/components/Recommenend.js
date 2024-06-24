//Recommenend component

import prog1 from "../assest/img/prog1.avif";
import prog2 from "../assest/img/prog2.avif";
import prog3 from "../assest/img/prog3.avif";
import prog4 from "../assest/img/prog4.avif";

const Recommenend = () => {
    return (
        <div class="recommended-wrapper">
            <h1>Recommended for you</h1>
            <p>Pick the best fit</p>
            <div class="card-list-wrapper">
                <div class="card-list">
                    <img src={prog1} alt="programming" />
                    <h3>2024 web Developmet Materclass</h3>
                    <p>Web Development</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>448 </p>
                </div>
                <div class="card-list">
                    <img src={prog2} alt="programming" />
                    <h3>2024 Java Materclass</h3>
                    <p>Java</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>448</p>
                </div>
                <div class="card-list">
                    <img src={prog3} alt="programming" />
                    <h3>2024 Python Data Visaulisation Materclass</h3>
                    <p>Python</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>448</p>
                </div>
                <div class="card-list">
                    <img src={prog4} alt="programming" />
                    <h3>2024 Docker Materclass</h3>
                    <p>Docker</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>448</p>
                </div>
            </div>
        </div>
    )
}
export default Recommenend