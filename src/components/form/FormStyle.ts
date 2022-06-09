import styled from "styled-components";

export const StyleComponent = styled.div`
    display: flex;
    justify-content: center;             
    .context {
        display: flex;
         justify-content: center;
         
        background: #FFFFFF;    
        width: 411px;
        height: 504px;
        border-radius: 20px;    
    }    
    img {
        max-height: 172px;
        max-width: 263px;
        margin-left: 40px;  
    }    
    button {
        width: 343px;
        height: 44px;
        background: #F2B705;
        border-radius: 5px;       
        span {
            font-size: 20px;
            line-height: 27px;           
            color: #FFFFFF;
        }
    }
    p {
        color: #989898;
        font-size: 14px;
    }   
    .par {      
        color: #F6B52E;       
        font-size: 16px;
        width:max-content;
        margin: 0 0 0 auto;
        margin-bottom: 21px;
        margin-top: 10px;
    }   
    .par:hover {
        color: #989898;
        cursor: pointer;
    }    
    input {
        padding: 2.5px;  
        width: 343px;
        height: 32px;
    }   
      .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #10100F; 
        border-width: 1px;
    }    
    .password_header{
        font-size: 20px;
        line-height: 27px;
        color: #989898;
        margin-bottom:40px ;
        text-align: center;
    }    
    a {
        text-decoration: none;
        color: inherit;
    }    
    .error {
        color: red;
        font-size: 14px;
    }
  
   @media only screen and (max-width: 480px) {
        .context {
            width: 343px;
            height: 504px;
        }
        input{
            width: 320px;       
        }
        form {
            margin-left: 5px
        }    
        button {
            width: 323px;
            height: 44px;
            margin-left: 5px
        } 
   }
`;
