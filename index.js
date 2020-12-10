const axios = require('axios');
const _ = require('lodash');
const chalk = require('chalk');
const moment = require('moment');
const { v4:uuidv4 } = require('uuid');

const Appointment = (() => {
	const state = {}

	function init(){
		axios
		.get('https://randomuser.me/api/?results=10')
		.then(resp => state.users = resp.data.results)
		.then(_ => getUsers())
		.catch(e => console.log(e))
	}

	function getUsers() {
		_.each(state.users, (user, index) => console.log(formatUser(user, index)))
		}

	function printUser(user, index){
		return `${index+1}. Nombre: ${user.name.first} - Apellido ${user.name.last} - ID: ${uuidv4().slice(6)} - TimesTamp: ${moment().format('MMMM Do YYYY, h:mm:ss a')}`
	}

	function formatUser(user, index){
		return chalk.bgWhite.blue(printUser(user, index));
	}

	return {init}
})()

Appointment.init()




