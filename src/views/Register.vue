<template>
    <div class="login">
        <Head ></Head>
         <h2 class="login-title">注册</h2>
         <div class="login-content">
             <div>
             <input type="text" placeholder="请输入手机号" class="username" v-model="phonenumber">
             </div>
             <div>
             <input type="text" placeholder="请输入用户名" class="username" v-model="username">
             </div>
              <div>
             <input type="text" placeholder="请输入验证码" class="testCode" v-model="testCode">
             <button :disabled='codeFlag' @click="getTestCode" id="getTestCode" 
             :style="{'font-size':'0.13rem',color:'#BFC2CC',float:'right',border:'none',background:'none'}">获取验证码</button>
             </div>
              <div>
             <input type="password" placeholder="请输入密码" class="pwd" v-model="pwd">
             </div>
             <div>
             <input type="password" placeholder="请确认密码" class="dbpwd" v-model="dbpwd">
             </div>
             <button class="register" @click="todoRegister">注册</button>
               
               <div class="agree">
                   <input type="checkbox" id="check"> 
                   <span class="read">我已经阅读并同意</span> 
                   <span class="user-aggrement">《用户协议》</span>
               </div>
              
         </div>

       
    </div>
</template>

<script>

import {mapMutations,mapState} from "vuex";
import Head from '@/components/Head.vue'
export default {
   data(){
       return{
           phonenumber:"",
           username: "",
           testCode: "",
           code: "",
           pwd: "",
           dbpwd: "",
           num: 60,
           codeFlag: false, 
       }
   },
   components: {
     Head,
   },
   computed: {
        ...mapState(['searchShow'])
   },
   mounted() {
       this.changeSearch(false)
   },
   methods: {
       ...mapMutations(['changeSearch']),
       getTestCode(){
            var reg=/^[\u4e00-\u9fa50-9a-zA-Z_$]{2,8}$/;
            var regtel=/^1[0-9]{10}$/;
            var username=this.username;
            var phonenumber=this.phonenumber;
            
            var timer=null;
            var txt="";
             if(reg.test(username)){
              if(regtel.test(phonenumber)){
                   this.$axios.post().then(res=>{
                       if(res){

                       }
                   })
                    this.$axios.post("http://182.92.4.245:2906/react/sendCode").then(res=>{
                        this.code=res.data.param;
                        console.log(this.code)
            timer = setInterval(()=>{
              if(this.num>0){
                this.num--;
                txt="还剩 " + this.num + " S";
                // console.log(txt);
                document.getElementById('getTestCode').innerHTML=txt;
                this.codeFlag=true;
            }else{
                    this.num=60;
                    txt="获取验证码",
                    document.getElementById('getTestCode').innerHTML=txt;
                   clearInterval(timer);
                   this.codeFlag=false;
            }
        },1000);
                        
                    })

              }else{
                 this.$notify({message:'请输入正确的手机号', color: 'black',background: '#FF4444'});
              }
             }else{
                this.$notify({message: '请输入长度为2-8位的用户名(请勿使用特殊字符)', color: 'black',background: '#FF4444'});
             }
       },
       todoLogin(){
           
        //   console.log(this.login)
           this.$axios.post("/vue/login",this.login).then(res=>{
               
            console.log(res.data)
               if(res.data.type){
                   sessionStorage.username=this.login.keys
                   setTimeout(()=>{
                      location.href="http://182.92.4.245/yc";
                    },600); 
               }
         
           })
       },
       todoRegister(){
            var reg=/^[\u4e00-\u9fa50-9a-zA-Z_$]{2,8}$/
            var regtel=/^1[0-9]{10}$/
            var regpwd=/^[0-9a-zA-Z]{6,15}$/
            var tishi=document.querySelector('#tishi')
            // var loginInput =document.getElementsByClassName('van-field__control')
            console.log(this.username)
            var username=this.username;
            var phonenumber=this.phonenumber;
            var pwd=this.pwd;
            var dbpwd=this.dbpwd;
            if(reg.test(username)){
              if(regtel.test(phonenumber)){
                 if(this.code==this.testCode){
                     if(regpwd.test(pwd)){
     
                       if(pwd==dbpwd){
                           var checkInput=document.getElementById('check');
                           if(document.getElementById('check').checked){
              this.$axios.post("http://192.168.0.14:8080/wx/auth/register",{
                  "username":this.username,
                   "password":this.pwd,
                   "mobile":this.phonenumber,
                    }).then(res=>{
                        console.log(res)
               if(res.data.errno==0){
                //    console.log('注册成功')
                this.$router.push({name:"login"})
               }else if(res.data.errno=="705"){
                    this.$notify({message:'手机号以存在', color: 'black',});
               }
               else{
                    console.log("注册失败")
                     this.$notify({message:'用户名已存在', color: 'black',});
               }
               
           })
                        }else{
                              this.$notify({message:'请在用户协议处打勾', color: 'black',});  
                           }
   
                       }else{
            //    tishi.innerHTML="请确认两次密码输入一样"
                this.$notify({message:'请确认两次密码输入一样', color: 'black',background: '#FF4444'});
                       }
                   }else{
                // tishi.innerHTML="请输入6-15位密码"
                 this.$notify({message:'请输入6-15位密码', color: 'black',background: '#FF4444'});
                   }
                 }else{
               this.$notify({message:'验证码错误', color: 'black',background: '#FF4444'});
                 }
                   
              }else{
                //    tishi.innerHTML="请输入正确的手机号"
                this.$notify({message:'请输入正确的手机号', color: 'black',background: '#FF4444'});
              }
            }else{
            //  tishi.innerHTML="请输入长度为2-6位的用户名"
            this.$notify({message: '请输入长度为2-8位的用户名(请勿使用特殊字符)', color: 'black',background: '#FF4444'});
            }
       
       
       }
   },
  
}
</script>

<style>
#tishi{
   margin-left: 30%;
   text-align: center;
}
.login-title{
  font-size: 0.22rem;
  font-weight: bold;
  margin-left: 0.16rem;
  margin-top: 0.5rem;
}
.login-content{
 width: 3.43rem;
 /* height: ; */
 margin: auto;
 margin-top: 0.2rem;
 overflow: hidden;
}
.login-content .username{
    
}
.login-content div{
 height: 0.35rem;
 width: 100%;
 border-bottom: 1px solid #EDEFF2;
 margin-top: 0.2rem;
}
input{
 border: none;
}
input::-webkit-input-placeholder {
    color: #BFC2CC;
    font-size: 0.13rem;
    }
.login-content .register{
    margin-top: 0.5rem;
    width: 100%;
    height: 0.44rem;
    border-radius: 0.22rem;
    background: #007BFF;
    border: none;
    color: white;
}
.login-content .agree{
    margin-top: 0.3rem;
    border: 0;
}
.login-content .agree #check{
    margin-left: 0.45rem;
}
.login-content .agree .read{
    font-size: 0.14rem;
    margin-left: 0.08rem;
    color: #D5D7DC;
}
.login-content .agree .user-aggrement{
    margin-left: 0.05rem;
    color: #007BFF;
    font-size: 0.14rem;
}
</style>
