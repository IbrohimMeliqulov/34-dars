import pool from "../config/database.js";

export const BoardController={
    post:async function(req,res){
        try{
            const{title,user_id}=req.body
            const values=[title,user_id]
            const query=`INSERT INTO boards(title,user_id) VALUES($1,$2) RETURNING*`
            const {rows}=await pool.query(query,values)
            return res.status(200).send(rows)
        }catch(err){
            throw new Error(err)
        }
    },
    getAll:async function(req,res){
        try{
            const 
        }catch(err){
            throw new Error(err)
        }
    },
    getOne:async function(req,res){

    },
    put:async function (req,res){

    },
    delete:async function(req,res){

    }
}