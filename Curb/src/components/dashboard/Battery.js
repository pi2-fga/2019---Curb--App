import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import axios from 'react-native-axios'
import FusionCharts from "react-native-fusioncharts";

export default class Battery extends Component {

	constructor(props) {
		super(props);
			this.apiCaller = null;
			this.fetchDataFromApi = this.fetchDataFromApi.bind(this)
			this.state = {
				monitoring: [],
				type: 'angulargauge',
				width: '100%',
				height: '100%',
				dataFormat: 'json',
				dataSource: {
					chart: {
						caption: "Nível de Bateria do Curb",
						lowerLimit: "0",
						upperLimit: "100",
						showValue: "1",
						numberSuffix: "%",
						theme: "ocean",
						showToolTip: "0"
					},
					colorRange: {
						color: [
							{
								minValue: "0",
								maxValue: "50",
								code: "#F2726F"
							},
							{
								minValue: "50",
								maxValue: "75",
								code: "#FFC533"
							},
							{
								minValue: "75",
								maxValue: "100",
								code: "#62B58F"
							}
						]
					},
					dials: {
						dial: [
							{
								value: "0"
							}
						]
					}
				}
			};
		this.libraryPath = Platform.select({
				android: require('../../../assets/fusioncharts/fusioncharts.html')
		});
	}

	fetchDataFromApi = ()  => {

		if(global.status_curb == 0) {

			this.setState({
				monitoring: 0,
				dataSource: {
					chart: {
						caption: "O Curb está desligado",
						lowerLimit: "0",
						upperLimit: "100",
						showValue: "1",
						numberSuffix: "%",
						theme: "ocean",
						showToolTip: "0"
					},
					colorRange: {
						color: [
							{
								minValue: "0",
								maxValue: "50",
								code: "#F2726F"
							},
							{
								minValue: "50",
								maxValue: "75",
								code: "#FFC533"
							},
							{
								minValue: "75",
								maxValue: "100",
								code: "#62B58F"
							}
						]
					},
					dials: {
						dial: [
							{
								value: "0"
							}
						]
					}
				},
			});
		} else {

			const url = "http://gustavo2795.pythonanywhere.com/monitoramentos/";
			console.log(this.state)
			axios.get(url)
				.then((response) => {
					this.setState({
						monitoring: response.data,
						dataSource: {
							chart: {
								caption: "Nível de Bateria do Curb",
								lowerLimit: "0",
								upperLimit: "100",
								showValue: "1",
								numberSuffix: "%",
								theme: "ocean",
								showToolTip: "0"
							},
							colorRange: {
								color: [
									{
										minValue: "0",
										maxValue: "50",
										code: "#F2726F"
									},
									{
										minValue: "50",
										maxValue: "75",
										code: "#FFC533"
									},
									{
										minValue: "75",
										maxValue: "100",
										code: "#62B58F"
									}
								]
							},
							dials: {
								dial: [
									{
										value: response.data[response.data.length-1].bateria
									}
								]
							}
						},
					}, () => {
					console.log(this.state)
				});
			}); 
		} 
		setTimeout(() =>{
			this.fetchDataFromApi()
		}, 5000)
	};
	
	componentDidMount(){

		this.fetchDataFromApi();
	}
	 
    render() {
    	return (
        	<View style={styles.container}>
				<View style={styles.chartContainer}>
					<FusionCharts
						type={this.state.type}
						width={this.state.width}
						height={this.state.height}
						dataFormat={this.state.dataFormat}
						dataSource={this.state.dataSource}
						libraryPath={this.libraryPath}
					/>
				</View>
			</View>
        );
	}
}
    
const styles = StyleSheet.create({
	container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
		backgroundColor: 'white',
		paddingTop: 150,
    },
	header: {
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center'
	},
	chartContainer: {
		height: 400,
		backgroundColor: 'white'
	}
});