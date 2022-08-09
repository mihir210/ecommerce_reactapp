import React from 'react';

function About() {
  return (
    <>
    <div className='container mt-5'>
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Introduction
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <p className="about_para">Hewlett-Packard Company, American manufacturer of software and computer services. The company split in 2015 into two companies: HP Inc. and Hewlett Packard Enterprise. Headquarters were in Palo Alto, California.
            </p>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Founding and early growth
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <p className="about_para">The company was founded on January 1, 1939, by William R. Hewlett and David Packard, two recent electrical-engineering graduates of Stanford University. It was the first of many technology companies to benefit from the ideas and support of engineering
                professor Frederick Terman, who pioneered the strong relationship between Stanford and what eventually emerged as Silicon Valley. The company established its reputation as a maker of sophisticated instrumentation. Its first customer was Walt
                Disney Productions, which purchased eight audio oscillators to use in the making of its full-length animated film Fantasia 1940. During World War II the company developed products for military applications that were important enough to merit
                Packard a draft exemption, while Hewlett served in the Army Signal Corps. Throughout the war the company worked with the Naval Research Laboratory to build counter-radar technology and advanced artillery shell fuses.</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Computer business
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <p className="about_para">
                Hewlett-Packard's first computer, the HP 2116A, was developed in 1966 specifically to manage the company’s test and measurement devices. In 1972 the company released the HP 3000 general-purpose minicomputer—a product line that remains in use today—for
                use in business. In 1976 an engineering intern at the company, Stephen G. Wozniak, built a prototype for the first personal computer PC and offered it to the company. Hewlett-Packard declined and gave Wozniak all rights to his idea; later
                he joined with Steven P. Jobs to create Apple Computer, Inc. now Apple Inc..
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}





export default About;
