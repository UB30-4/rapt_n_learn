

import React from "react";
import { Container  } from "reactstrap";
import './company-section.css'

const Company = () => {
    return <section>
        <Container>
            <div className="company-section">
             <a href="facebook.com" className="icon-gradient rounded facebook"><i class="ri-facebook-fill"></i></a>
             <a href="twitter.com" className="icon-gradient rounded twitter"><i class="ri-twitter-fill"></i></a>
             <a href="linkedln.com" className="icon-gradient rounded linkedin"><i class="ri-linkedin-fill"></i></a>
             <a href="instagram.com" className="icon-gradient rounded instagram"><i class="ri-instagram-fill"></i></a>
            </div>

        </Container>
    </section>
};

export default Company;
