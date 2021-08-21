"use strict"

// 컨트롤러 부분 모듈화
const root = (req, res) => {
    res.render("home/index");
}

const login = (req, res) =>{
    res.render("home/login");
}

module.exports={
    root,
    login
};