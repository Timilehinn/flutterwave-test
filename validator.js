// validator class


class RuleValidator{
    constructor(rule, data, field,field_value,condition,condition_val,n_field_one,n_field_two){
        this.rule = rule,
        this.data = data,
        this.field = field,
        this.field_value = field_value,
        this.condition = condition,
        this.condition_val = condition_val,
        this.n_field_one = n_field_one,
        this.n_field_two = n_field_two
    }
    
    
    // this checks if rule.field is of nested type
    getRuleFieldValue(res){
        if(!this.data[this.n_field_one]){
            res.status(400).json({
                message: "field "+ this.n_field_one + (this.n_field_two ? '.'+this.n_field_two : '')+" is missing from data.",
                status: "error",
                data: null
            })
            this.field_value = null;
        }
        if(this.n_field_one && this.n_field_two){
            if(!this.data[this.n_field_one][this.n_field_two]){
                res.status(400).json({
                    message: "field "+ this.n_field_one+'.'+this.n_field_two +" is missing from data.",
                    status: "error",
                    data: null
                })
                this.field_value = null;
            }else{
                this.field_value = this.data[this.n_field_one][this.n_field_two]
            }
            // console.log(field_value, " for fisrt logixc") 

        // if rule.field is passed as e.g "missions"
        }else if(this.n_field_one){
            this.field_value = this.data[this.n_field_one]
            // console.log(field_value+' for else if') 
        }
        return this.field_value
    }
    validateWithRule(res){
        switch(this.rule.condition){

            // condition 'eq' if field value is equal to the condition value
            case "eq":
                if(this.field_value === parseInt(this.condition_val)){
                    console.log('true')
                    res.json({
                        message: 'field '+ this.n_field_one+(this.n_field_two ? '.'+this.n_field_two : '') +' successfully validated.',
                        status: "success",
                        data: {
                            validation: {
                            error: false,
                            field: this.n_field_one+ (this.n_field_two ? '.'+this.n_field_two : ''),
                            field_value: this.field_value,
                            condition: this.condition,
                            condition_value: this.condition_val
                            }
                        }
                    })
                }else{
                    res.status(400).json({
                        message: 'field '+ this.n_field_one+(this.n_field_two ? '.'+this.n_field_two : '') +' failed validation.',
                        status: "error",
                        data: {
                            validation: {
                            error: true,
                            field: this.n_field_one+ (this.n_field_two ? '.'+this.n_field_two : ''),
                            field_value: this.field_value,
                            condition: this.condition,
                            condition_value: this.condition_val
                            }
                        }
                    })
                }
                break;

            // condition 'neq'. if the field value is not eqaual to the condition value
            case "neq":
                if(this.field_value != parseInt(this.condition_val)){
                    console.log('true')
                    res.json({
                        message: 'field '+ this.n_field_one+(this.n_field_two ? '.'+this.n_field_two : '') +' successfully validated.',
                        status: "success",
                        data: {
                            validation: {
                            error: false,
                            field: this.n_field_one+ (this.n_field_two ? '.'+this.n_field_two : ''),
                            field_value: this.field_value,
                            condition: this.condition,
                            condition_value: this.condition_val
                            }
                        }
                    })
                }else{
                    res.status(400).json({
                        message: 'field '+ this.n_field_one+(this.n_field_two ? '.'+this.n_field_two : '') +' failed validation.',
                        status: "error",
                        data: {
                            validation: {
                            error: true,
                            field: this.n_field_one+ (this.n_field_two ? '.'+this.n_field_two : ''),
                            field_value: this.field_value,
                            condition: this.condition,
                            condition_value: this.condition_val
                            }
                        }
                    })
                }
                break;

            //condition 'gt', if the field value is greater than the field value
            case "gt":
                if(this.field_value > parseInt(this.condition_val)){
                    console.log('true')
                    res.json({
                        message: 'field '+ this.n_field_one+(this.n_field_two ? '.'+this.n_field_two : '') +' successfully validated.',
                        status: "success",
                        data: {
                            validation: {
                            error: false,
                            field: this.n_field_one+ (this.n_field_two ? '.'+this.n_field_two : ''),
                            field_value: this.field_value,
                            condition: this.condition,
                            condition_value: this.condition_val
                            }
                        }
                    })
                }else{
                    res.status(400).json({
                        message: 'field '+ this.n_field_one+(this.n_field_two ? '.'+this.n_field_two : '') +' failed validation.',
                        status: "error",
                        data: {
                            validation: {
                            error: true,
                            field: this.n_field_one+ (this.n_field_two ? '.'+this.n_field_two : ''),
                            field_value: this.field_value,
                            condition: this.condition,
                            condition_value: this.condition_val
                            }
                        }
                    })
                }
                break;

            //condition 'gte', if the field value is greater than or equal to the field value
            case "gte":
                if(this.field_value >= parseInt(this.condition_val)){
                    console.log('true')
                    res.json({
                        message: 'field '+ this.n_field_one+(this.n_field_two ? '.'+this.n_field_two : '') +' successfully validated.',
                        status: "success",
                        data: {
                            validation: {
                            error: false,
                            field: this.n_field_one+ (this.n_field_two ? '.'+this.n_field_two : ''),
                            field_value: this.field_value,
                            condition: this.condition,
                            condition_value: this.condition_val
                            }
                        }
                    })
                }else{
                    res.status(400).json({
                        message: 'field '+ this.n_field_one+(this.n_field_two ? '.'+this.n_field_two : '') +' failed validation.',
                        status: "error",
                        data: {
                            validation: {
                            error: true,
                            field: this.n_field_one+ (this.n_field_two ? '.'+this.n_field_two : ''),
                            field_value: this.field_value,
                            condition: this.condition,
                            condition_value: this.condition_val
                            }
                        }
                    })
                }
                break;

            /*condition 'contains' note: *I wasnt really sure what this was supposed to be
              so i acted on my intiution and wrote the block bellow to search for values in 
              a given string or array since if the value is given as a nested component e.g=>
                "data":{
                    "names":{"mark":"mark wild", "sarah":"sarah conor"} ...
                }
                the value of each items will gotten using the corresponding key
                in the case of array it request for contains is best passed as
               
               EX. {
                    "rule": {
                        "field": "names" --
                        "condition": "contains",
                        "condition_value": "rocinante"
                    },
                    "data": {
                        "names":["The Nauvoo", "The Razorback", "The Roci", "Tycho"] --
                    }
                   }
            */
            case "contains":
                console.log(typeof(this.field_value))
                console.log(this.field_value)


                if(typeof(this.field_value) == 'object'){
                    //if the value of the field is an array, it performs a find method to search 
                    // for the condition value
                    (this.field_value.find(val => this.condition_val == val)) ?
                    res.json({
                        message: 'field '+ this.n_field_one+(this.n_field_two ? '.'+this.n_field_two : '') +' successfully validated.',
                        status: "success",
                        data: {
                            validation: {
                            error: false,
                            field: this.n_field_one+ (this.n_field_two ? '.'+this.n_field_two : ''),
                            field_value: parseInt(this.field_value) == 'null' ? parseInt(this.field_value) : this.field_value,
                            condition: this.condition,
                            condition_value: this.condition_val
                            }
                        }
                    })
                    : res.status(400).json({
                        message: 'field '+ this.n_field_one+(this.n_field_two ? '.'+this.n_field_two : '') +' failed validation.',
                        status: "error",
                        data: {
                            validation: {
                            error: true,
                            field: this.n_field_one+ (this.n_field_two ? '.'+this.n_field_two : ''),
                            field_value: parseInt(this.field_value) == 'null' ? parseInt(this.field_value) : this.field_value,
                            condition: this.condition,
                            condition_value: this.condition_val
                            }
                        }
                    })
                }else if(typeof(this.field_value) == 'string'){

                    /*
                        if it is a string, it searches for the index of the 
                        condition value and return false if the result is -1
                        else true if it is not
                    */
                    var i = this.field_value.search(this.condition_val);
                    console.log(i)
                    if(i == -1){
                        res.status(400).json({
                            message: 'field '+ this.n_field_one+(this.n_field_two ? '.'+this.n_field_two : '') +' failed validation.',
                            status: "error",
                            data: {
                                validation: {
                                error: true,
                                field: this.n_field_one+ (this.n_field_two ? '.'+this.n_field_two : ''),
                                field_value: parseInt(this.field_value) == 'null' ? parseInt(this.field_value) : this.field_value,
                                condition: this.condition,
                                condition_value: this.condition_val
                                }
                            }
                        })
                    }else{
                        res.json({
                            message: 'field '+ this.n_field_one+(this.n_field_two ? '.'+this.n_field_two : '') +' successfully validated.',
                            status: "success",
                            data: {
                                validation: {
                                error: false,
                                field: this.n_field_one+ (this.n_field_two ? '.'+this.n_field_two : ''),
                                field_value: parseInt(this.field_value) == 'null' ? parseInt(this.field_value) : this.field_value,
                                condition: this.condition,
                                condition_value: this.condition_val
                                }
                            }
                        })
                    }
                    
                }else{
                    res.status(400).json({
                        message: 'field '+ this.n_field_one+(this.n_field_two ? '.'+this.n_field_two : '') +' failed validation.',
                        status: "error",
                        data: {
                            validation: {
                            error: true,
                            field: this.n_field_one+ (this.n_field_two ? '.'+this.n_field_two : ''),
                            field_value: parseInt(this.field_value) == 'null' ? parseInt(this.field_value) : this.field_value,
                            condition: this.condition,
                            condition_value: this.condition_val
                            }
                        }
                    })
                }
                
            break;

            // if the search condition passed is invalid it returns an error by default
            default:
                res.status(400).json({
                    message: "rule condition '"+ this.condition +"' does not exist for validation.",
                    info: "available rule conditions are eq|neq|gt|gte|contains",
                    status: "error",
                    data: null
                })
        }
        
    }
}

module.exports = RuleValidator;