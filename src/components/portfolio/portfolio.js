import React, { Component } from 'react'

import { SectionHead } from '../stateless/section-head'
import { OurWorksElement } from '../home/our-works-element'
import { PortfolioButton } from './portfolio-button'

import ourWorksData from '../../api/ourWorksData.json'

export class Portfolio extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ourWorks: [],
			portfolioHead: {
				title: 'Nasze prace',
				content: [
					{
						id: 'portfolioHead1',
						text:
							'Za naszymi Klientami zobaczysz projekt, za projektem możliwości - odkryj je wspólnie z nami.'
					},
					{
						id: 'portfolioHead2',
						text: 'Słuchamy, tworzymy oraz wdarżamy unikalne projekty. Bądź z nami w kontakcie!'
					}
				]
			},
			buttonText: [
				{
					text: 'Web Design',
					filter: 'webp'
				},
				{
					text: 'Social Media',
					filter: 'social'
				},
				{
					text: 'Graphic Design',
					filter: 'graphicd'
				},
				{
					text: 'Photo',
					filter: 'photo'
				},
				{
					text: 'Wszystkie'
				}
			]
		}
	}
	componentDidMount() {
		this.setState({
			ourWorks: ourWorksData
		})
	}
	handleClick(x) {
		this.setState({
			ourWorks: ourWorksData.filter(item => item.group === x).length
				? ourWorksData.filter(item => item.group === x)
				: ourWorksData
		})
	}
	render() {
		const { ourWorks, portfolioHead, buttonText } = this.state
		return (
			<div id="portfolio" className="main-margin">
				<div className="container">
					<div className="row">
						<SectionHead title={portfolioHead.title} content={portfolioHead.content} />

						{buttonText.map((item, index) => (
							<PortfolioButton
								button={item}
								index={index}
								buttonLength={buttonText.length - 1}
								handleClick={x => this.handleClick(x)}
								key={`portfolio-button-${index}`}
							/>
						))}
					</div>
					<div className="row">
						{ourWorks.map(x => (
							<OurWorksElement
								group={x.group}
								key={x.id}
								id={x.id}
								client={x.client}
								category={x.category}
								src={x.imgSrc}
								imgAlt={x.imgAlt}
							/>
						))}
					</div>
				</div>
			</div>
		)
	}
}
