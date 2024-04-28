const buttons = document.querySelectorAll(".technnbtn button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("clicked");
  });
});


const rangeInput = document.getElementById('points');
    const seniorityContainer = document.querySelector('.Seniority');

    rangeInput.addEventListener('input', () => {
        const selectedIndex = parseInt(rangeInput.value);
        seniorityContainer.innerHTML = ''; 
        for (let i = 0; i < selectedIndex; i++) {
            const seniorityBox = document.createElement('div');
         
            seniorityBox.innerHTML = `
               
                <div class="Senioritybox">
                    <button>Junior</button>
                    <button>Intermediate</button>
                    <button>Senior</button>
                </div>
            `;
            seniorityContainer.appendChild(seniorityBox);
        }
    });



document.addEventListener('DOMContentLoaded', function() {
    const seniorityButtons = document.querySelectorAll('.Senioritybox button');

    seniorityButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            seniorityButtons.forEach(btn => btn.classList.remove('active'));

            
            this.classList.add('active');
        });
    });
});

const seniorityButtons = document.querySelectorAll('.Senioritybox button');
const involvementButtons = document.querySelectorAll('.Involvementbox button');
const budgetInput = document.querySelector('.BudgetBox input');
const budgetDisplay = document.querySelectorAll('.updatebox h3')[0]; 
const investmentDisplay = document.querySelectorAll('.updatebox h3')[1]; 


const developerCostPerMonth = 1000; 
const seniorityMultiplier = {
    'Junior': 0.8,
    'Intermediate': 1,
    'Senior': 1.2
};
const involvementMultiplier = {
    'Low': 0.8,
    'Medium': 1,
    'High': 1.2
};


function calculateBudget() {
   

    const numberOfDevelopers = parseInt(rangeInput.value);
    const seniority = [...seniorityButtons].find(btn => btn.classList.contains('active')).textContent;


    const involvement = [...involvementButtons].find(btn => btn.classList.contains('active')).textContent;
 
    const budget = parseInt(budgetInput.value);

   
    const totalCost = numberOfDevelopers * developerCostPerMonth * seniorityMultiplier[seniority] * involvementMultiplier[involvement];
    const investment = totalCost / 1000 * 1.2;
    console.log("totalcost"+totalCost);
    console.log("investment"+investment);

    budgetDisplay.innerHTML = `Your Total Budget:<br> €  ${totalCost.toFixed(2)}`;
    investmentDisplay.innerHTML = `Your Investment for Month:<br> €  ${investment.toFixed(2)} EURO`;
    
}    


rangeInput.addEventListener('input', calculateBudget);
seniorityButtons.forEach(btn => btn.addEventListener('click', () => {
    seniorityButtons.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
    calculateBudget();
}));
involvementButtons.forEach(btn => btn.addEventListener('click', () => {
    involvementButtons.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
    calculateBudget();
}));

calculateBudget();

