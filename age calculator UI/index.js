

document.body.innerHTML = `
<div style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    font-family: 'Arial', sans-serif;
">
    <div style="
        background: white;
        padding: 40px;
        clip-path: polygon(50% 0%, 100% 25%, 85% 100%, 15% 100%, 0% 25%);
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        text-align: center;
        width: 400px;
        position: relative;
    ">
        <div style="
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: bold;
            color: #555;
        ">
            <span style="font-size: 20px; font-weight: bold; color: #ff6b6b;">🔥 Rockstar Age Calculator 🔥</span>
        </div>
        <h2 style="color: #333; font-weight: bold;">Made by Muhammad Ahmad Jamal</h2>
        <input type="date" id="birthdate" style="
            padding: 12px;
            margin-top: 15px;
            width: 100%;
            border: 2px solid #ccc;
            border-radius: 8px;
            font-size: 16px;
            transition: all 0.3s;
        " oninput="calculateAgeRealTime()">
        <button id="calculateBtn" style="
            margin-top: 15px;
            padding: 12px 25px;
            border: none;
            background: #ff6b6b;
            color: white;
            cursor: pointer;
            border-radius: 8px;
            font-size: 16px;
            transition: transform 0.2s ease, background 0.3s;
        " onclick="calculateAge()">Calculate</button>
        <p id="result" style="
            margin-top: 20px;
            font-size: 1.5em;
            font-weight: bold;
            color: #333;
        "></p>
    </div>
</div>
`;

function calculateAge() {
const birthdate = document.getElementById('birthdate').value;
if (!birthdate) {
    document.getElementById('result').innerText = "Please enter your birthdate.";
    return;
}
updateAgeDisplay(birthdate);
}

function calculateAgeRealTime() {
const birthdate = document.getElementById('birthdate').value;
if (birthdate) {
    updateAgeDisplay(birthdate);
} else {
    document.getElementById('result').innerText = "";
}
}

function updateAgeDisplay(birthdate) {
const birthDate = new Date(birthdate);
const now = new Date();

let years = now.getFullYear() - birthDate.getFullYear();
let months = now.getMonth() - birthDate.getMonth();
let days = now.getDate() - birthDate.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
}
if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
}

document.getElementById('result').innerText = 
    `You are ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds old.`;
}
