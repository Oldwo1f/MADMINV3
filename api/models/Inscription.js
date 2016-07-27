/**
 * Inscription.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

 	attributes: {
	    civ: {type:'string'},
	    name: {type:'string'},
	    firstname: {type:'string'},
	    email: {type:'string',required:true,unique:true,email:true},
	    phone: {type:'string'},
	    company: {type:'string'},
	    description: {type:'string'},
	    password:{type:'string',required:true},
	    changepasswordcomfirm : {type:'string'},
	    newuserhash : {type:'string'},

  	}
};

