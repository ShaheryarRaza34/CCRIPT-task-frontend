/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}


.Home{
    background: #fff;
    max-width: 400px;
    width: 100%;
    margin: 120px auto;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
  }

  .Home header{
    font-size: 30px;
    font-weight: 600;
  }

  .Home .inputtask{
    margin: 20px 0;
    width:100%;
    display: flex;
    height: 45px;
  }

  .inputtask input{
    width: 85%;
    height: 100%;
    outline: none;
    border-radius: 3px;
    border: 1px solid #ccc;
    font-size: 17px;
    padding-left: 15px;
    transition: all 0.3s ease;
  }

  .inputtask input:focus{
    border-color: #8E49E8;
  }

  .inputtask button{
    width: 50px;
    height: 100%;
    border: none;
    color: #fff;
    margin-left: 5px;
    font-size: 21px;
    outline: none;
    background: #8E49E8;
    cursor: pointer;
    border-radius: 3px;
    opacity: 0.6;
    transition: all 0.3s ease;
  }



  .Home .todoList{
    max-height: 250px;
    overflow-y: auto;
  }

  .Home.footer{
    display: flex;
    width: 100%;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
  }

  .footer button{
    padding: 6px 10px;
    border-radius: 3px;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    margin-left: 5px;
    background: #8E49E8;
    cursor: pointer;
    user-select: none;
    opacity: 0.6;
    transition: all 0.3s ease;
  }
  .task__deleteButton{
    padding: 6px 10px;
    border-radius: 3px;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    margin-left: 5px;
    background: #c82d44;
    cursor: pointer;
    user-select: none;
    opacity: 0.6;
    transition: all 0.3s ease;
  }


  
.task__body{
  width: 100%;
  padding: 15px 20px;
  border-left: 4px solid hsl(210, 10%, 75%);
  background-color: white;
  max-width: 700px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  
  box-sizing: border-box;
}

.footer button.active{
    opacity: 1;
    pointer-events: auto;
  } */

import styled from "styled-components";

export const Home = styled.div`
  background: #fff;
  max-width: 400px;
  width: 100%;
  margin: 120px auto;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
`;
