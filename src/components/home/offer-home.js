import React, { Component } from 'react'

import { OfferComponent } from './offer-component'
import { OfferComponentLeft } from './offer-left-component'

export class OfferHome extends Component {
	constructor(props) {
		super(props)
		this.state = {
			offerComponent: {
				title: 'Projekt jest cichym ambasadorem Twojej marki',
				p1:
					'Jesteśmy zespołem pełnym pasji, kreatywności i posiadającym narzędzia, odpowiadające potrzebom naszych Klientów. Uzupełniamy się umiejętnościami, dlatego nie ma dla nas rzeczy niemożliwych.',
				p2:
					'Ważne jest dla nas zrozumienie celów, planów oraz otoczenia. Słuchamy i wdrażamy skuteczne strategie, tworząc unikalne projekty.'
			},
			offerComponentV1: [
				{
					id: 'test11',
					title: 'Social media',
					text:
						'kreujemy wizerunek zgodny z marką, angażujemy, monitorujemy i koordynujemy wszelkie działania',
					icon: 'users',
					divClass: 'sr1'
				},
				{
					id: 'test12',
					title: 'Kampanie reklamowe',
					text:
						'opracowywanie strategii kampanii i jej optymalizacja to nieodłączny element marketingu',
					icon: 'lightbulb',
					divClass: 'sr1'
				}
			],
			offerComponentV2: [
				{
					id: 'test21',
					title: 'video & foto',
					text:
						'fotografujemy, nagrywamy i edytujemy, by pokazać atuty Twojego produktu, usługi i całej marki',
					icon: 'camera',
					divClass: 'sr12'
				},
				{
					id: 'test22',
					title: 'Strony www',
					text:
						'zadbamy by Twoja strona internetowa była responsywna, intuicyjna i zatrzymywała klientów na dłużej',
					icon: 'laptop',
					divClass: 'sr12'
				}
			]
		}
	}

	OfferComponentRender = x => {
		return <OfferComponent title={x.title} key={x.id} text={x.text} icon={x.icon} id={x.id} />
	}

	render() {
		const { title, p1, p2 } = this.state.offerComponent

		const { offerComponentV1, offerComponentV2 } = this.state

		return (
			<div className="bg-color-bright">
				<div id="uslugi" className="container text-center">
					<div className="row">
						<OfferComponentLeft title={title} p1={p1} p2={p2} buttonLink="/oferta" />
						<div className="col-sm-7 col-sm-offset-1">
							<div className="row">{offerComponentV1.map(x => this.OfferComponentRender(x))}</div>
							<div className="row">{offerComponentV2.map(x => this.OfferComponentRender(x))}</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
