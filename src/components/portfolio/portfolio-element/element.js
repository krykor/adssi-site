import React, { Component } from 'react'

import { Button } from '../../stateless/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ourWorksData from '../../../api/ourWorksData.json'

export class Elements extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ourWorks: ourWorksData.find(x => this.props.match.params.user === x.id),
			colors: ourWorksData.find(x => this.props.match.params.user === x.id).colour
		}
	}
	componentDidMount() {
		this.setColors2()
	}

	setColors2() {
		this.props.colors(this.state.colors)
	}

	render() {
		const { ourWorks, colors } = this.state
		return (
			<div className="portfolio-site">
				<div className="container">
					<div className="row">
						<div id="aa" className="col-md-7">
							{ourWorks.imgDetails.map((item, index) => (
								<p key={`${ourWorks.id}-img-${index}`}>
									<img src={item.src} width="100%" alt={item.alt} title={item.title} />
								</p>
							))}
						</div>
						<div id="bb" className="sidebar-portfolio col-md-5">
							<h2>{ourWorks.title}</h2>

							<hr className={`line-blue line-blue-${colors}`} />

							<p>{ourWorks.description}</p>

							<ul className={`list-check list-check-${colors}`} title="Działania">
								{ourWorks.list.map((item, index) => (
									<li key={`${ourWorks.id}-list-${index}`}>
										<FontAwesomeIcon icon="check" /> {item}
									</li>
								))}
							</ul>

							<hr />

							<div className="list-info">
								<p>
									<span>Klient:</span> {ourWorks.client}
								</p>
								<p>
									<span>Usługa:</span> {ourWorks.category}
								</p>
								<p>
									<span>Data:</span> {ourWorks.date}
								</p>
							</div>

							{ourWorks.btnDetails &&
								ourWorks.btnDetails.map((item, index) => (
									<Button
										link={item.link}
										text={item.text}
										grid="col-sm-6"
										key={`${ourWorks.id}-button-${index}`}
										buttonClass={`btn-primary-${colors}`}
									/>
								))}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
