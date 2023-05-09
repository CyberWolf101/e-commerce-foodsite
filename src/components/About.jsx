import React from 'react';
import chef from '../assets/chef_edited.jpg'

function About(props) {
    return (
        <div>
            <div className="about-section-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12">
					<img src={chef} alt="" className="img-fluid"/>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12 text-center">
					<div className="inner-column">
						<h1>Welcome To <span>Yamifood Restaurant</span></h1>
						<h4>Little Story</h4>
						<p>Lorem ipsum dolor sit amet, cot feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem. </p>
						<p>Sed semper orci sit ue tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.</p>
						<a className="custom-button abt-btn" href="#">Reservation</a>
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    );
}

export default About;