/*
    NOTE: the code checks out for all the given examples and some other personal 
    examples as well
*/ 

const express = require('express');
const app = express();
const RuleValidator = require('./validator');
const PORT =  process.env.PORT || 54321;
const cors = require('cors')

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors());

app.get('/',(req,res)=>{
    res.json({
        message:"Timilehin rule-validation api",
        status:"success",
        data:{
            name:"Makinde Timilehin",
            github:"@Timilehinn",
            email:"makindetimi@gmail.com",
            mobile:"+2341234567890",
            twitter:"@makiaveli96"            
        }
    })
})

app.post('/validate-rule',(req,res)=>{
    const {rule, data} = req.body
    
    if((!rule) || (!data)){
        res.status(400).json({
            message: (rule ? 'data' : 'rule') + " is required.",
            status: "error",
            data: null
        })
        return false;
    }
    if(typeof(rule) != 'object'){
        res.status(400).json({
            message: "rule should be an object.",
            status: "error",
            data: null
        })
        return false;
    }
    console.log("sdvsvd " +data[rule.field])
    // this block ensures that all field values must be required before proceeding
    
    if( !rule.field || !rule.condition || !rule.condition_value )
        {
            res.status(400).json({
                    message: "Invalid JSON payload passed.",
                    status: "error",
                    data: null
            })
            return false
        }
    var condition = rule.condition;
    var condition_val = rule.condition_value;
    var field = rule.field;
    var field_value;
    var n_field_one = rule.field.split(".")[0];
    var n_field_two = rule.field.split(".")[1];
    
    // new instance of RuleValidator
    var validate = new RuleValidator(rule,data,field,field_value,condition,condition_val,n_field_one,n_field_two)

    //PAYLOAD VALIDATED
    // console.log(validate.validatePayload(req))
        // if(validate.validateFields(res)){
    if(validate.getRuleFieldValue(res)){
        validate.validateWithRule(res)
        // }
    }  

})

app.listen(PORT,()=>console.log("server started"))